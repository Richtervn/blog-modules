import express from 'express';

export default (BookShelves, factories) => {
  const router = express.Router();
  const { wrap, commonService, deleteFile } = factories;

  router.get(
    '/book_shelves',
    wrap(async (req, res, next) => {
      const bookShelves = await commonService.getAll(BookShelves, { Books: false });
      res.send(bookShelves);
    })
  );

  router.get(
    '/book_shelf/:title',
    wrap(async ({ params }, res, next) => {
      const bookShelve = await commonService.getOneByParam(BookShelves, { Title: params.title });
      res.send(bookShelve);
    })
  );

  router.post(
    '/book_shelf',
    wrap(async ({ body }, res, next) => {
      const bookShelf = await commonService.create(BookShelves, body);
      res.send(bookShelf);
    })
  );

  router.put(
    '/book_shelf',
    wrap(async ({ body }, res, next) => {
      const result = await BookShelves.findOneAndUpdate(
        { _id: body._id },
        { $set: { Title: body.title } },
        { new: true }
      );
      res.send(result);
    })
  );

  router.delete(
    '/book_shelf/:id',
    wrap(async ({ params }, res, next) => {
      const bookShelf = await commonService.getOne(BookShelves, params.id);
      bookShelf.Books.forEach(book => {
        book.FileUrl && deleteFile(book.FileUrl);
      });
      const result = await commonService.delete(BookShelves, params.id);
      res.send(result);
    })
  );

  router.post(
    '/book',
    wrap(async ({ files, body }, res, next) => {
      const bookUrl = commonService.uploadArchive(files, './public/Books');
      if (bookUrl) body.FileUrl = bookUrl;
      const bookShelf = await commonService.getOne(BookShelves, body.shelfId);

      if (!bookShelf) {
        return res.send({ message: "Can't find bookshelf" });
      }
      bookShelf.Books.push({
        Label: body.Label,
        Author: body.Author,
        PublishDate: body.PublishDate,
        FileUrl: body.FileUrl
      });
      const result = await bookShelf.save();
      res.send(result);
    })
  );

  router.put(
    '/book',
    wrap(async ({ files, body }, res, next) => {
      const bookUrl = commonService.uploadArchive(files, './public/Books');
      const bookShelf = await commonService.getOne(BookShelves, body.shelfId);
      const book = bookShelf.Books.find(oldBook => oldBook.id == body._id);
      if (!book) {
        return res.send({ message: "Can't find this book" });
      }
      if (bookUrl) {
        deleteFile(book.FileUrl);
        book.FileUrl = FileUrl;
      }
      if (body.Author) book.Author = body.Author;
      if (body.Label) book.Label = body.Label;
      if (body.PublishDate) book.PublishDate = body.PublishDate;
      bookShelf.Books = bookShelf.Books.map(oldBook => {
        if (oldBook.id == body._id) return book;
        return oldBook;
      });
      const result = await bookShelf.save();
      res.send(result);
    })
  );

  router.delete(
    '/book/:id',
    wrap(async ({ params }, res, next) => {
      const bookShelf = await BookShelves.findOne({ book: params.id });
      if (!bookShelf) {
        return res.send({ message: "Can't find book shelf" });
      }
      const book = bookShelf.Books.find(oldBook => oldBook.id == params.id);
      if (!book) {
        return res.send({ message: "Can't find this book" });
      }
      if (bookUrl) deleteFile(book.FileUrl);
      bookShelf.Books = bookShelf.Books.map(oldBook => {
        if (oldBook.id == params.id) return book;
        return oldBook;
      });
      await bookShelf.save();
      res.send({ _id: params.id });
    })
  );

  return router;
};

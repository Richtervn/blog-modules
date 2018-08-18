import _ from 'underscore';

export default mangas => {
  mangas.forEach((manga, i) => {
    let grade = 0;
    if (manga.Status) {
      if (manga.Status == 'Stone') {
        grade -= 100;
      }
      if (manga.Status == 'HasNew') {
        grade = grade + mangas.length + (parseFloat(manga.NewChapter) - parseFloat(manga.Chapter)) * 50;
      }
    }
    grade += mangas.length - i;
    manga.grade = grade;
  });
  return _.sortBy(mangas, 'grade').reverse();
};

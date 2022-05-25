import MangaManager from './MangaManager';

import crawler from './crawlers/crawler';
import puppeteer from './crawlers/puppeteer';
import { sliceToIndex, stripLastPath } from './urlHandlers';
import { fromElement, fromChilren, replace } from './contentHandlers';
import removeAccents from '../removeAccents';

const CRAWLERS = {
  CRAWLER: 'CRAWLER',
  PUPPETEER: 'PUPPETEER'
};

export const MANGA_MANAGER = {
  CRAWLERS
};

const manager = new MangaManager();

manager.addCrawler(CRAWLERS.CRAWLER, crawler);
manager.addCrawler(CRAWLERS.PUPPETEER, puppeteer);

manager.register('http://www.nettruyenco.com', {
  crawler: CRAWLERS.PUPPETEER,
  getTitleUrl: sliceToIndex(2),
  detailsHandlers: {
    Name: fromElement('.title-detail', ['text']),
    CoverUri: fromElement('.col-image > img', ['src', 'appendUrlProtocol']),
    Aka: fromElement('.othername > .col-xs-8', ['text', replace(/ - /g, ',')]),
    Authors: fromElement('.author > .col-xs-8', [
      'text',
      replace('Đang cập nhật', ''),
      replace(/ - /g, ',')
    ]),
    Genre: fromElement('.kind > .col-xs-8', ['text', replace(/ - /g, ',')]),
    Introduce: fromElement('.detail-content > p', ['text'])
  },
  subscribe: {
    query: 'figure.clearfix',
    handlers: {
      name: fromChilren('.image > a', ['title', replace('Truyện tranh', '')]),
      link: fromChilren('.image > a', ['href']),
      image: fromChilren('.image img', ['src', 'appendUrlProtocol']),
      chapters: fromChilren('ul', [
        ({ content, $ }) => {
          const results = [];
          $(content)
            .find('li > a')
            .each((_, a) => {
              results.push({ name: $(a).attr('title'), link: $(a).attr('href') });
            });

          return results;
        }
      ])
    }
  }
});

export default manager;

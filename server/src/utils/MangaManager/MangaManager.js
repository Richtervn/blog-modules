import Promise from 'bluebird';

class MangaManager {
  constructor() {
    this.crawlers = {};
    this.urlHandlers = {};
    this.sites = {};
  }

  addCrawler(name, func) {
    this.crawlers[name] = func;
  }

  register(url, option) {
    const siteUrl = new URL(url);
    this.sites[siteUrl.origin] = option;
  }

  getSiteInfo(url) {
    const siteUrl = new URL(url);
    const siteInfo = this.sites[siteUrl.origin];
    if (!siteInfo) {
      throw new Error('Site not registered!');
    }
    return siteInfo;
  }

  getTitleUrl(url) {
    const siteInfo = this.getSiteInfo(url);

    let titleUrl;
    if (siteInfo.getTitleUrl) {
      titleUrl = siteInfo.getTitleUrl(url);
    } else {
      throw new Error('Method getTitleUrl is not implemented!');
    }
    return titleUrl;
  }

  getSubscribeUrl(url) {
    const siteInfo = this.getSiteInfo(url);
    if (siteInfo.getSubscribeUrl) {
      return siteInfo.getSubscribeUrl(url);
    }
    const siteUrl = new URL(url);
    return siteUrl.origin;
  }

  async crawl(url) {
    const siteInfo = this.getSiteInfo(url);

    let crawler;
    if (siteInfo.crawler) {
      crawler = this.crawlers[siteInfo.crawler];
    } else {
      throw new Error('Crawler is not implemented!');
    }

    const result = await crawler(url);
    return result;
  }

  async crawlDetails(url) {
    const titleUrl = this.getTitleUrl(url);
    const { $ } = await this.crawl(titleUrl);
    const { detailsHandlers } = this.getSiteInfo(url);
    if (!detailsHandlers) {
      throw new Error('detailsHandlers is not implemented!');
    }

    const result = {};
    const context = { url };
    await Promise.all(
      Object.keys(detailsHandlers).map(async handlerKey => {
        result[handlerKey] = await detailsHandlers[handlerKey]({ $, context });
        return;
      })
    );
    return result;
  }

  async getNewMangas(url) {
    const { subscribe } = this.getSiteInfo(url);
    if (!subscribe) {
      throw new Error('Subscribe method is not implemented!');
    }

    const subscribeUrl = this.getSubscribeUrl(url);
    const { $ } = await this.crawl(subscribeUrl);

    const cards = $(subscribe.query);
    const results = [];
    const context = { url };
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const result = {};
      await Promise.all(
        Object.keys(subscribe.handlers).map(async handlerKey => {
          result[handlerKey] = await subscribe.handlers[handlerKey]({ $, context, parent: card });
          return;
        })
      );
      results.push(result);
    }
    return results;
  }
}

export default MangaManager;

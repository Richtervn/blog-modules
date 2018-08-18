const siteTitle = 'Personal Database';

class TitleScroller {
  constructor(time) {
    this.text = '';
    this.time = time;
    this.isRunning = false;
  }

  setText(text) {
    this.text = ' ♫ ' + text + ' ♫ ';
    this.stop();
  }

  start() {
    this.isRunning = true;
    let playText = this.text.slice(0);
    let i = 0;
    this.process = setInterval(() => {
      if (i >= playText.length) {
        this.restart = setTimeout(() => this.start(), 5000);
        clearInterval(this.process);
        document.title = siteTitle + ' | Music playing';
        return;
      }
      document.title = playText.slice(i, playText.length) + playText.slice(0, i);
      i++;
    }, this.time);
  }

  stop() {
    if (this.restart) {
      clearTimeout(this.restart);
    }
    clearInterval(this.process);
    delete this.process;
    this.isRunning = false;
    document.title = siteTitle;
  }

  getStatus() {
    return this.isRunning;
  }
}

export default TitleScroller;

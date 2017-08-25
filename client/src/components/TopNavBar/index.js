import React from 'react';

export default ({name, quote, author}) =>
  <div className="row blog-top-nav">
    <div className="col">
      <div className="row">
        <i className="fa fa-server fa-2x blog-nav-icon" />
        <a className="blog-nav-name" href="/"><h5>{name}</h5></a>
      </div>
    </div>
    <div className="col">
      <div className="text-center">
        <i className="blog-nav-quote">
          &#10077; {quote}&#10078;
        </i>
        <br />
        <div className="blog-nav-quote-author">{author}</div>
      </div>
    </div>
  </div>;

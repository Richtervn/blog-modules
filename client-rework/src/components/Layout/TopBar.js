import './TopBar.css';
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

// .blog-top-nav {
//   position: fixed;
//   background-color: #000000;
//   height: 45px;
//   align-items: center;
//   width: 100%;
// }
// .blog-nav-name {
//   padding-top: 5px;
//   padding-left: 15px;
//   color: #ffffff;
// }

// .blog-nav-icon {
//   padding-left: 15px;
//   color: #ffffff;
// }

// .blog-nav-quote {
//   color: #ffffff;
// }

// .blog-nav-quote-author {
//   color: #f5ad28;
// }
import React from 'react';

export default () => (
  <div>
    <h2 id="mangas-reading">Mangas Reading</h2>
    <p>This page keep tracking the progress of mangas on reading.</p>
    <div className="sub-heading">
      <h3>I. Model design:</h3>
      <p>One manga can be describle by the following properties</p>
      <ul>
        <li>
          <strong>Name : </strong>The name of the manga
        </li>
        <li>
          <strong>Aka : </strong>&quot;Also know as&quot;. This field is an array which describle names which manga is
          known by various website
        </li>
        <li>
          <strong>Authors : </strong>An array contains authors' name of manga.
        </li>
        <li>
          <strong>Introduce : </strong>Quick overview text of the manga.
        </li>
        <li>
          <strong>Chapter : </strong>The current chapter which you are reading to.
        </li>
        <li>
          <strong>Genre : </strong>An array contains genres of the manga.
        </li>
        <li>
          <strong>Rating : </strong>You give mark to this manga's content. Max by 5 stars.
        </li>
        <li>
          <strong>CoverUri : </strong>The link to Cover Image of manga.
        </li>
        <li>
          <strong>ReadingUrl : </strong>The link to continue read this manga. Automatically inserted by Quick update
          tool.
        </li>
      </ul>
      <h3>II. Services:</h3>
      <div>Provied API to interact with MangasReading model.</div>
      <ul>
        <li><strong>/api/mangas_reading/add_manga : </strong></li>
        <li><strong>/api/mangas_reading/get_all : </strong></li>
        <li><strong>/api/mangas_reading/quick_update : </strong></li>
        <li><strong>/api/mangas_reading/update : </strong></li>
        <li><strong>/api/mangas_reading/remove/:id : </strong></li>
        <li><strong>/api/mangas_reading/search : </strong></li>
        <li><strong>/api/mangas_reading/sort : </strong></li>
      </ul>
      <h3>III. The UI:</h3>
      <img src="/data/documentations/mgrui.jpg" alt="mgrui" style={{width: '100%'}}/>
      <h3>IV. Tools:</h3>
      <h3>V. Special features:</h3>
      <div className="sub-section">
        <h4>1. Quick update tool:</h4>
        <p>
          This tool used url to update the chapter of current reading manga via aka (each website called the manga with
          different name, so must insert more aka)
        </p>
        <div>Currently supported sites:</div>
        <ul>
          <li>http://truyentranh.net (need aka: example name space)</li>
          <li>http://www.nettruyen.com (need aka: example-name-space)</li>
          <li>http://truyentranh8.net (need aka: Example Name Space)</li>
        </ul>
        <h4>2. Global quick update tool:</h4>
        <p>
          This tool work exactly like the quick update tool. You can active it by click on the bolt icon in the top
          right of menu bar
        </p>
        <h4>3. Auto scroll function:</h4>
        <p>
          This function will be called whenever you update a manga chapter, add new manga, edit a manga. The focused
          manga will be automatically scroll into viewport
        </p>
      </div>
    </div>
  </div>
);

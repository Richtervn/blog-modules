import './Guideline.css';
import React, { Component } from 'react';
import PageContainer from 'common/PageContainer';

import ContentMenu from './ContentMenu.component';
import { MangasReading } from './Collections';

class Guideline extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    console.log(this.mgr.offsetTop);
    console.log(this.mgr.getBoundingClientRect().y - 45);

  }

  render() {
    return (
      <PageContainer>
        <div className="row">
          <div className="col-2">
            <div className="row">
              <ContentMenu />
            </div>
          </div>
          <div className="col-10">
            <div className="row guideline-content" onScroll={this.handleScroll}>
              <h1 id="collections">Collections</h1>
              <p>
                The Collections group is the group which store small pieces of data to form a huge collection over time.
                Every member page of this group will form a collection
              </p>
              <div ref={node => (this.mgr = node)}>
                <MangasReading />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }
}

export default Guideline;

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu-center a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu-center ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
// }

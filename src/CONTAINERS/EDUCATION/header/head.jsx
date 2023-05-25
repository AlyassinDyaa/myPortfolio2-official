import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "./head.css";
import JUST from "../../../Assets/edu/just.mp4";
import JUSTB from "../../../Assets/edu/background.png";

const Head = () => {
  const [curPage, setCurPage] = useState(1); // State variable for current page
  const numOfPages = 5; // Total number of pages

  const navigateUp = () => {
    if (curPage > 1) {
      setCurPage(prevPage => prevPage - 1); // Decrease current page by 1
    }
  };

  const navigateDown = () => {
    if (curPage < numOfPages) {
      setCurPage(prevPage => prevPage + 1); // Increase current page by 1
    }
  };

  useEffect(() => {
    $(".skw-page").removeClass("active"); // Remove 'active' class from all pages
    $(`.skw-page-${curPage}`).addClass("active"); // Add 'active' class to the current page
  }, [curPage]);

  useEffect(() => {
    $(document).ready(() => {
      $(document).on("keydown", e => {
        if (e.which === 38) { // Key up arrow
          navigateUp(); // Call navigateUp function
        } else if (e.which === 40) { // Key down arrow
          navigateDown(); // Call navigateDown function
        }
      });
    });
  }, []);

  return (
    <div className="container__education-header">
      <div className="skw-pages">
        {/* Remaining code for pages */}
        {/* Page 1 */}
        <div className={`skw-page skw-page-1 ${curPage === 1 ? 'active' : ''}`}>
          <div class="skw-page skw-page-1 active">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h1 class="skw-page__heading">Jordan University of Science and Technology</h1>
                  <h2>Major: Computer Enegineering</h2>
                  <h2></h2>

                  <div className='education_buttons'>
                    <button className='button-download' style={{margin : 10}}>Diploma</button>
                    <button className='button-download'>Evaluated transcript</button>
                  </div>
                
                  <a href="https://www.just.edu.jo/Pages/Default.aspx"
                   class="skw-page__description"
                   style={{ color: "#3399CC", textDecoration: "underline" }}>More about University</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className={`skw-page skw-page-2 ${curPage === 2 ? 'active' : ''}`}>
          <div class="skw-page skw-page-2">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h2 class="skw-page__heading">Page 2</h2>
                  <p class="skw-page__description">Nothing to do here, continue scrolling.</p>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className={`skw-page skw-page-3 ${curPage === 3 ? 'active' : ''}`}>
          <div class="skw-page skw-page-3">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h2 class="skw-page__heading">Page 3</h2>
                  <p class="skw-page__description">The end is near, I promise!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className={`skw-page skw-page-4 ${curPage === 4 ? 'active' : ''}`}>
          <div class="skw-page skw-page-4">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h2 class="skw-page__heading">Page 4</h2>
                  <p class="skw-page__description">Nothing to do here, continue scrolling.</p>
                </div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div className={`skw-page skw-page-5 ${curPage === 5 ? 'active' : ''}`}>
          <div class="skw-page skw-page-5">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h2 class="skw-page__heading">Page 5</h2>
                  <p class="skw-page__description">The end is near, I promise!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="btn-head" onClick={navigateDown}>Next</button>
      <button className="btn-head" onClick={navigateUp}>Previous</button>
    </div>
  );
};

export default Head;

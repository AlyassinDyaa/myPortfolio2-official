import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "./head.css";
import JUST from "../../../Assets/edu/just.mp4";
import JUSTB from "../../../Assets/edu/background.png";

const Head = () => {
  const [curPage, setCurPage] = useState(1);
  const numOfPages = $(".skw-page").length;

  const navigateUp = () => {
    if (curPage === 1) {
      setCurPage(numOfPages); // Loop to the last page
    } else {
      setCurPage(prevPage => prevPage - 1);
    }
  };

  const navigateDown = () => {
    if (curPage === numOfPages) {
      setCurPage(1); // Loop to the first page
    } else {
      setCurPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    // Your jQuery code here
    $(document).ready(() => {
      $(document).on("keydown", e => {
        if (e.which === 38) {
          navigateUp();
        } else if (e.which === 40) {
          navigateDown();
        }
      });
    });
  }, []);

  useEffect(() => {
    $(".skw-page").removeClass("active");
    $(`.skw-page-${curPage}`).addClass("active");
  }, [curPage]);

  return (
    <div className="container__education-header">
      <div className="skw-pages">
        {/* Remaining code for pages */}
        <div className={`skw-page skw-page-1 ${curPage === 1 ? 'active' : ''}`}>
          {/* Page 1 content */}
          <div class="skw-page skw-page-1 active">
            <div class="skw-page__half skw-page__half--left">
              <div class="skw-page__skewed">
                <div class="skw-page__content"></div>
              </div>
            </div>
            <div class="skw-page__half skw-page__half--right">
              <div class="skw-page__skewed">
                <div class="skw-page__content">
                  <h2 class="skw-page__heading">Skewed One Page Scroll</h2>
                  <p class="skw-page__description">Just scroll down</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`skw-page skw-page-2 ${curPage === 2 ? 'active' : ''}`}>
          {/* Page 2 content */}
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

        <div className={`skw-page skw-page-3 ${curPage === 3 ? 'active' : ''}`}>
          {/* Page 3 content */}
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
      </div>

      <button  className = "btn-head" onClick={navigateUp}>Previous</button>
      <button className = "btn-head" onClick={navigateDown}>Next</button>
    </div>
  );
};

export default Head;

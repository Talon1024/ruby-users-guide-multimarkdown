/*jslint browser: false*/
/*global jQuery: false, $: false */

// Provide keyboard navigation between pages, and set up table CSS classes for Bootstrap

(function () { "use strict";
    // Set up table CSS classes.
    //$("table").addClass("table table-bordered table-hover");
    for (const table of document.querySelectorAll("table")) {
        table.classList.add("table");
        table.classList.add("table-bordered");
        table.classList.add("table-hover");
    }
    // Get the links to next/previous pages
    var prevPage = document.querySelector(".container > a:nth-of-type(1)").href,
        nextPage = document.querySelector(".container > a:nth-of-type(2)").href;
    document.addEventListener("keyup", function (kbdevt) {
        // See this reference for keyCode -> code translations
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        if (kbdevt.code === "ArrowLeft") {
            location.assign(prevPage); // Go to previous page
        } else if (kbdevt.code === "ArrowRight") {
            location.assign(nextPage); // Go to next page
        }
    });
}());

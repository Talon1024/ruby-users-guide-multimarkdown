/*jslint browser: false*/
/*global jQuery: false, $: false */

// Provide keyboard navigation between pages, and set up table CSS classes for Bootstrap

(function () { "use strict";
    // Set up table CSS classes.
    $("table").addClass("table table-bordered table-hover");
    // Get the links to next/previous pages
    var prevPage = $(".container > a:nth-of-type(1)").attr("href"),
        nextPage = $(".container > a:nth-of-type(2)").attr("href");
    $(document).keyup(function (kbdevt) {
        if ((kbdevt.keyCode) === 37) { // Left arrow
            location.assign(prevPage); // Go to previous page
        } else if ((kbdevt.keyCode) === 39) { // Right arrow
            location.assign(nextPage); // Go to next page
        }
    });
    }());

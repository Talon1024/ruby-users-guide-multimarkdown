/*jslint browser: false*/
/*global jQuery: false, $: false */

// Provide keyboard navigation between pages
// Left arrow - Previous page
// Right arrow - Next page

(function () { "use strict";
    $(document).keyup(function (kbdevt) {
        var prevPage = $(".container > a:nth-of-type(1)").attr("href"),
            nextPage = $(".container > a:nth-of-type(2)").attr("href");
        if ((kbdevt.keyCode) === 37) { // Left arrow
            location.assign(prevPage);
        } else if ((kbdevt.keyCode) === 39) { // Right arrow
            location.assign(nextPage);
        }
    });
    }());

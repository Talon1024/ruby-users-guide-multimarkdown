/*jslint node: true */
/*global console: false */

(function () {"use strict";
    var fs = require("fs"),
        path = require("path"),
        child_process = require("child_process"),
        fnames = fs.readdirSync(".");

    fnames.forEach(function (fname) {
        if (path.extname(fname) === ".md") {
            var htmlOutfile = path.basename(fname, ".md") + ".html";
            child_process.exec("multimarkdown --to=html " + fname, function (error, stdout, stderr) {
                if (error) { console.log("Error:" + error + "\nError messages:\n" + stderr); }
                if (stdout) {
                    fs.writeFile(htmlOutfile, stdout, function (err) {
                        if (err) { throw err; }
                        console.log(htmlOutfile + " written.");
                    });
                }
            });
        }
    });
    }());

Ruby User's Guide
=================

This is a [MultiMarkdown](https://github.com/fletcher/MultiMarkdown-4) conversion
of the [Ruby User's Guide](http://www.rubyist.net/~slagell/ruby/) by Mark Slagell.

The original English translation of the Ruby User's Guide was released as a
[bunch of HTML/CSS](http://www.rubyist.net/~slagell/ruby/ruby-uguide-20111216.tar.gz) files under the GNU Free Documentation License.

However, the HTML/CSS version was designed for desktop users, and as such, it
is very hard to read, if not impossible, on mobile phones. This version is
intended to enhance readability on mobile phones and other such devices, as
well as ease conversion to other formats.

How to build the HTML version
-----------------------------

Assuming you have Node.js and MultiMarkdown installed, run tohtml.js to convert
all of the .md files to HTML files.

To build each .md file individually, run `multimarkdown --process-html xxxxx.md`,
where `xxxxx.md` is the markdown file you want to build.

Ebooks
-------

EPUB, MOBI, AZW3, PDF versions are available under the `ebook` directory
in this repository.
These versions are generated from the markdown source.

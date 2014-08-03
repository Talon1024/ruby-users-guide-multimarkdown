Title: Arrays - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="regexp.html" class="btn btn-default">&#9668; Regular Expressions</a>
<!-- Next page -->
<a href="backtoexamples.html" class="btn btn-default">Back to the simple examples &#9658;</a>

Arrays
======

You can create an *array* by listing some items within
square brackets (`[]`) and separating them with
commas. Ruby's arrays can accomodate diverse object types.

    ruby> ary = [1, 2, "3"]
       [1, 2, "3"]

Arrays can be concatenated or repeated just as strings can.

    ruby> ary + ["foo", "bar"]
       [1, 2, "3", "foo", "bar"]
    ruby> ary * 2
       [1, 2, "3", 1, 2, "3"]

We can use index numbers to refer to any part of a array.

    ruby> ary[0]
       1
    ruby> ary[0,2]
       [1, 2]
    ruby> ary[0..1]
       [1, 2]
    ruby> ary[-2]
       2
    ruby> ary[-2,2]
       [2, "3"]
    ruby> ary[-2..-1]
       [2, "3"]

(Negative indices mean offsets from the end of an array, rather than
the beginning.)

Arrays can be converted to and from strings, using `join`
and `split` respecitvely:

    ruby> str = ary.join(":")
       "1:2:3"
    ruby> str.split(":")
       ["1", "2", "3"]

Hashes
------

An associative array has elements that are accessed not by
sequential index numbers, but by *keys* which can have any sort
of value.  Such an array is sometimes called a *hash* or
*dictionary*; in the ruby world, we prefer the term
*hash*.  A hash can be constructed by quoting pairs of items
within curly braces (`{}`).  You use a key to find
something in a hash, much as you use an index to find something in an
array.

    ruby> h = {1 => 2, "2" => "4"}
       {1=>2, "2"=>"4"}
    ruby> h[1]
       2
    ruby> h["2"]
       "4"
    ruby> h[5]
       nil
    ruby> h[5] = 10    # appending an entry
       10
    ruby> h
       {5=>10, 1=>2, "2"=>"4"}
    ruby> h.delete 1   # deleting an entry by key
       2
    ruby> h[1]
       nil
    ruby> h
       {5=>10, "2"=>"4"}

<!-- Previous page -->
<a href="regexp.html" class="btn btn-default">&#9668; Regular Expressions</a>
<!-- Next page -->
<a href="backtoexamples.html" class="btn btn-default">Back to the simple examples &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

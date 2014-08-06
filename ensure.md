Title: Exception Processing: ensure - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="rescue.html" class="btn btn-default">&#9668; Exception processing: rescue</a>
<!-- Next page -->
<a href="accessors.html" class="btn btn-default">Accessors &#9658;</a>

Exception Processing: ensure
============================

There may be cleanup work that is necessary when a method finishes
its work.  Perhaps an open file should be closed, buffered data
should be flushed, etc.  If there were always only one exit point
for each method, we could confidently put our cleanup code in one
place and know that it would be executed; however, a method might
return from several places, or our intended cleanup code might be
unexpectedly skipped because of an exception.

    file = open("/tmp/some_file", "w")
    begin
      # ... write to the file ...
      file.close
    end

In the above, if an exception occurred during the section of code
where we were writing to the file, the file would be left open.
And we don't want to resort to this kind of redundancy:

    file = open("/tmp/some_file", "w")
    begin
      # ... write to the file ...
      file.close
    rescue
      file.close
      fail # raise an exception
    end

It's clumsy, and gets out of hand when the code gets more
complicated because we have to deal with every `return` and
`break`.

For this reason we add another keyword to the
"`begin...rescue...end`" scheme, which is
`ensure`.  The `ensure` code block executes
regardless of the success or failure of the `begin` block.

    file = open("/tmp/some_file", "w")
    begin
      # ... write to the file ...
    rescue
      # ... handle the exceptions ...
    ensure
      file.close   # ... and this always happens.
    end

It is possible to use `ensure` without
`rescue`, or vice versa, but if they are used together in
the same` begin...end `block, the `rescue` must
precede the `ensure`.

<!-- Previous page -->
<a href="rescue.html" class="btn btn-default">&#9668; Exception processing: rescue</a>
<!-- Next page -->
<a href="accessors.html" class="btn btn-default">Accessors &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

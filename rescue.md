Title: Exception Processing: rescue - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="constants.html" class="btn btn-default">&#9668; Class Constants</a>
<!-- Next page -->
<a href="ensure.html" class="btn btn-default">Exception processing: ensure &#9658;</a>

Exception Processing: rescue
============================

An executing program can run into unexpected problems.  A file
that it wants to read might not exist; the disk might be full when
it wants to save some data; the user may provide it with some
unsuitable kind of input.

    ruby> file = open("some_file")
    ERR: (eval):1:in `open': No such file or directory - some_file

A robust program will handle these situations sensibly and
gracefully.  Meeting that expectation can be an exasperating
task.  C programmers are expected to check the result of every
system call that could possibly fail, and immediately decide what is
to be done:

    FILE *file = fopen("some_file", "r");
    if (file == NULL) {
      fprintf( stderr, "File doesn't exist.\n" );
      exit(1);
    }
    bytes_read = fread( buf, 1, bytes_desired, file );
    if (bytes_read != bytes_desired ) {
      /* do more error handling here ... */
    }
    ...

This is such a tiresome practice that programmers can tend to grow
careless and neglect it, and the result is a program that doesn't
handle exceptions well.  On the other hand, doing the job right
can make programs hard to read, because there is so much error
handling cluttering up the meaningful code.

In ruby, as in many modern languages, we can handle exceptions for
blocks of code in a compartmentalized way, thus dealing with surprises
effectively but not unduly burdening either the programmer or anyone
else trying to read the code later.  The block of code marked
with `begin` executes until there is an exception, which causes
control to be transferred to a block of error handling code, which is
marked with `rescue`.  If no exception occurs, the
`rescue` code is not used.  The following method returns
the first line of a text file, or `nil` if there is an
exception:

    def first_line( filename )
      begin
        file = open("some_file")
        info = file.gets
        file.close
        info  # Last thing evaluated is the return value
      rescue
        nil   # Can't read the file? then don't return a string
      end
    end

There will be times when we would like to be able to creatively
work around a problem.  Here, if the file we want is unavailable,
we try to use standard input instead:

    begin
      file = open("some_file")
    rescue
      file = STDIN
    end

    begin
      # ... process the input ...
    rescue
      # ... and deal with any other exceptions here.
    end

`retry` can be used in the `rescue` code to start the
`begin` code over again.  It lets us rewrite the previous
example a little more compactly:

    fname = "some_file"
    begin
      file = open(fname)
      # ... process the input ...
    rescue
      fname = "STDIN"
      retry
    end

However, there is a flaw here.  A nonexistent file will make
this code retry in an infinite loop.  You need to watch out for
such pitfalls when using `retry` for exception processing.

Every ruby library raises an exception if any error occurs, and you
can raise exceptions explicitly in your code too.  To raise an
exception, use `raise`.  It takes one argument, which
should be a string that describes the exception.  The argument is
optional but should not be omitted.  It can be accessed later via
the special global variable `$!`.

    ruby> raise "test error"
       test error
    ruby> begin
        |   raise "test2"
        | rescue
        |   puts "An error occurred: #{$!}"
        | end
    An error occurred: test2
       nil

<!-- Previous page -->
<a href="constants.html" class="btn btn-default">&#9668; Class Constants</a>
<!-- Next page -->
<a href="ensure.html" class="btn btn-default">Exception processing: ensure &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

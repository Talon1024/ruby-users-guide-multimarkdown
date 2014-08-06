Title: Getting Started - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="index.html" class="btn btn-default">&#9668; What is Ruby?</a>
<!-- Next page -->
<a href="examples.html" class="btn btn-default">Simple examples &#9658;</a>

Getting Started
===============

First, you'll want to check whether ruby is installed.  From
the shell prompt (denoted here by "`%`", so don't type the
`%`), type

    % ruby -v

(`-v` tells the interpreter to print the version of ruby),
then press the *Enter* key.  If ruby is installed, you will
see a message something like the following:

    % ruby -v
    ruby 1.8.3 (2005-09-21) [i586-linux]

If ruby is not installed, you can ask your administrator to install
it, or you can do it yourself, since ruby is free software with no
restrictions on its installation or use.

Now, let's play with ruby.  You can place a ruby program
directly on the command line using the `-e` option:

    % ruby -e 'puts "hello world"'
    hello world

More conventionally, a ruby program can be stored in a file.

    % echo "puts 'hello world'" > hello.rb
    % ruby hello.rb
    hello world

When writing more substantial code than this, you will want to use
a real text editor!

Some surprisingly complex and useful things can be done with
miniature programs that fit in a command line.  For example, this
one replaces `foo` with `bar` in all C source
and header files in the current working directory, backing up the
original files with ".bak" appended:

    % ruby -i.bak -pe 'sub "foo", "bar"' *.[ch]

This program works like the UNIX `cat` command (but works
slower than `cat`):

    % ruby -pe 0 file

<!-- Previous page -->
<a href="index.html" class="btn btn-default">&#9668; What is Ruby?</a>
<!-- Next page -->
<a href="examples.html" class="btn btn-default">Simple examples &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

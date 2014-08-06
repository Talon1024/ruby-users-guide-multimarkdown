Title: Procedure Objects - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="modules.html" class="btn btn-default">&#9668; Modules</a>
<!-- Next page -->
<a href="variables.html" class="btn btn-default">Variables &#9658;</a>

Procedure Objects
=================

It is often desirable to be able to specify responses to unexpected
events.  As it turns out, this is most easily done if we can pass
blocks of code as arguments to other methods, which means we want to
be able to treat code as if it were data.

A new *procedure object* is formed using `proc`:

    ruby> quux = proc {
        |   puts "QUUXQUUXQUUX!!!"
        | }
       #<Proc:0x4017357c>

Now what `quux` refers to is an object, and like most
objects, it has behavior that can be invoked.  Specifically, we
can ask it to execute, via its `call` method:

    ruby> quux.call
    QUUXQUUXQUUX!!!
       nil

So, after all that, can `quux` be used as a method
argument? Sure.

    ruby> def run( p )
        |   puts "About to call a procedure..."
        |   p.call
        |   puts "There: finished."
        | end
       nil
    ruby> run quux
    About to call a procedure...
    QUUXQUUXQUUX!!!
    There: finished.
       nil

The `trap` method lets us assign the response of our choice
to any system signal.

    ruby> inthandler = proc{ puts "^C was pressed." }
       #<Proc:0x401730a4>
    ruby> trap "SIGINT", inthandler
       #<Proc:0x401735e0>

Normally pressing *^C* makes the interpreter quit.  Now a
message is printed and the interpreter continues running, so you don't
lose the work you were doing.  (You're not trapped in the
interpreter forever; you can still exit by typing `exit`.)

A final note before we move on to other topics: it's not strictly
necessary to give a procedure object a name before binding it to a
signal.  An equivalent *anonymous* procedure object would
look like:

    ruby> trap "SIGINT", proc{ puts "^C was pressed." }
       nil

or more compactly still,

    ruby> trap "SIGINT", 'puts "^C was pressed."'
       nil

This abbreviated form provides some convenience and readability
when you write small anonymous procedures.

<!-- Previous page -->
<a href="modules.html" class="btn btn-default">&#9668; Modules</a>
<!-- Next page -->
<a href="variables.html" class="btn btn-default">Variables &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

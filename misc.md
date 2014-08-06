Title: Nuts and bolts - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="objinitialization.html" class="btn btn-default">&#9668; Object initialization</a>
<!-- Next page -->
<a href="about.html" class="btn btn-default">About the guide &#9658;</a>

Nuts and bolts
==============

This chapter addresses a few practical issues.

Statement delimiters
--------------------
Some languages require some kind of punctuation, often a semicolon
(`;`), to end each statement in a program.  Ruby
instead follows the convention used in shells like `sh` and
`csh`.  Multiple statements on one line must be
separated by semicolons, but they are not required at the end of a
line; a linefeed is treated like a semicolon.  If a line ends
with a backslash (`\`), the linefeed following it is
ignored; this allows you to have a single logical line that spans
several lines.

Comments
--------

Why write comments?  Although well written code tends to be
self-documenting, it is often helpful to scribble in the margins, and
it can be a mistake to believe that others will be able to look at
your code and immediately see it the way you do. Besides, for
practical purposes, you yourself are a different person within a few
days anyway; which of us hasn't gone back to fix or enhance a program
after the passage of time and said, I know I wrote this, but what in
blazes does it mean?

Some experienced programmers will point out, quite correctly, that
contradictory or outdated comments can be worse than none at all.
Certainly, comments shouldn't be a substitute for readable code; if
your code is unclear, it's probably also buggy.  You may find that you
need to comment more while you are learning ruby, and then less as you
become better at expressing your ideas in simple, elegant, readable
code.

Ruby follows a common scripting convention, which is to use a pound
symbol (`#`) to denote the start of a comment.  Anything
following an unquoted `#`, to the end of the line on which it
appears, is ignored by the interpreter.

Also, to facilitate large comment blocks, the ruby interpreter also
ignores anything between a line starting with "`=begin`" and
another line starting with "`=end`".

    #!/usr/bin/env ruby

    =begin
    **********************************************************************
      This is a comment block, something you write for the benefit of
      human readers (including yourself).  The interpreter ignores it.
      There is no need for a '#' at the start of every line.
    **********************************************************************
    =end

Organizing your code
--------------------

Ruby's unusually high level of dynamism means that classes, modules,
and methods exist only after their defining code runs.  If you're used
to programming in a more static language, this can sometimes lead to
surprises.

    # The below results in an "undefined method" error:

    puts successor(3)

    def successor(x)
      x + 1
    end

Although the interpreter checks over the entire script file for
syntax before executing it, the `def successor ... end` code
has to actually run in order to create the `successor` method.
So the order in which you arrange a script can matter.

This does not, as it might seem at first glance, force you to
organize your code in a strictly bottom-up fashion.  When the
interpreter encounters a method definition, it can safely include
undefined references, as long as you can be sure they will be defined
by the time the method is actually invoked:

    # Conversion of fahrenheit to celsius, broken
    # down into two steps.

    def f_to_c(f)
      scale(f - 32.0)  # This is a forward reference, but it's okay.
    end

    def scale(x)
      x * 5.0 / 9.0
    end

    printf "%.1f is a comfortable temperature.\n", f_to_c(72.3)

So while this may seem less convenient than what you may be used to
in Perl or Java, it is less restrictive than trying to write C without
prototypes (which would require you to always maintain a partial
ordering of what references what).  Putting top-level code at the
bottom of a source file always works.  And even this is less of an
annoyance than it might at first seem.  A sensible and painless way to
enforce the behavior you want is to define a `main` function at
the top of the file, and call it from the bottom.

    #!/usr/bin/env ruby

    def main
      # Express the top level logic here...
    end

    # ... put support code here, organized as you see fit ...

    main # ... and start execution here.

It also helps that ruby provides tools for breaking complicated
programs into readable, reusable, logically related chunks.  We have
already seen the use of `include` for accessing modules.  You
will also find the `load` and `require` facilities useful.
`load` works as if the file it refers to were copied and pasted
in (something like the `#include` preprocessor directive in
C). `require` is somewhat more sophisticated, causing code
to be loaded at most once and only when needed.

That's it...
------------

This tutorial should be enough to get you started writing programs in
Ruby.  As further questions arise, you can get more help from the user
community, and from an always-growing body of printed and online
resources.

Good luck, and happy coding!

<!-- Previous page -->
<a href="objinitialization.html" class="btn btn-default">&#9668; Object initialization</a>
<!-- Next page -->
<a href="about.html" class="btn btn-default">About the guide &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "[GNU Free Documentation License](license.html)."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

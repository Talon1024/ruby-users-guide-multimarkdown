Title: Variables - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="procobjects.html" class="btn btn-default">&#9668; Procedure Objects</a>
<!-- Next page -->
<a href="globalvars.html" class="btn btn-default">Global Variables &#9658;</a>

Variables
=========

Ruby has three kinds of variables, one kind of constant and
exactly two pseudo-variables.  The variables and the constants
have no type.  While untyped variables have some drawbacks, they
have many more advantages and fit well with ruby's *quick and
easy* philosophy.

Variables must be declared in most languages in order to specify
their type, modifiability (i.e., whether they are constants), and
scope; since type is not an issue, and the rest is evident from the
variable name as you are about to see, we do not need variable
declarations in ruby.

The first character of an identifier categorizes it at a glance:

|----------------|-------------------|
| `$`            | global variable   |
| `@`            | instance variable |
| `[a-z]` or `_` | local variable    |
| `[A-Z]`        | constant          |

The only exceptions to the above are ruby's pseudo-variables:
`self`, which always refers to the currently executing
object, and `nil`, which is the meaningless value assigned
to uninitialized variables.  Both are named as if they are local
variables, but `self` is a global variable maintained by
the interpreter, and `nil` is really a constant.  As
these are the only two exceptions, they don't confuse things too
much.

You may not assign values to `self` or `nil`. `main`, as a
value of `self`, refers to the top-level object:

    ruby> self
       main
    ruby> nil
       nil

<!-- Previous page -->
<a href="procobjects.html" class="btn btn-default">&#9668; Procedure Objects</a>
<!-- Next page -->
<a href="globalvars.html" class="btn btn-default">Global Variables &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

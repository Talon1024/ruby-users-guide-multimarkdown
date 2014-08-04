Title: Instance Variables - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="globalvars.html" class="btn btn-default">&#9668; Global Variables</a>
<!-- Next page -->
<a href="localvars.html" class="btn btn-default">Local Variables &#9658;</a>

Instance Variables
==================

An instance variable has a name beginning with `@`, and its
scope is confined to whatever object `self` refers to.
Two different objects, even if they belong to the same class, are
allowed to have different values for their instance variables.
From outside the object, instance variables cannot be altered or even
observed (i.e., ruby's instance variables are never *public*)
except by whatever methods are explicitly provided by the
programmer.  As with globals, instance variables have the
`nil` value until they are initialized.

Instance variables do not need to be declared.  This indicates a flexible
object structure; in fact, each instance variable is dynamically
appended to an object when it is first assigned.

    ruby> class InstTest
        |   def set_foo(n)
        |     @foo = n
        |   end
        |   def set_bar(n)
        |     @bar = n
        |   end
        | end
       nil
    ruby> i = InstTest.new
       #<InstTest:0x83678>
    ruby> i.set_foo(2)
       2
    ruby> i
       #<InstTest:0x83678 @foo=2>
    ruby> i.set_bar(4)
       4
    ruby> i
       #<InstTest:0x83678 @foo=2, @bar=4>

Notice above that `i` does not report a value for
`@bar` until after the `set_bar` method is
invoked.

<!-- Previous page -->
<a href="globalvars.html" class="btn btn-default">&#9668; Global Variables</a>
<!-- Next page -->
<a href="localvars.html" class="btn btn-default">Local Variables &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

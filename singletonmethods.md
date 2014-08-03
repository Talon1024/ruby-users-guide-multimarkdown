Title: Singleton Methods - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="accesscontrol.html" class="btn btn-default">&#9668; Access Control</a>
<!-- Next page -->
<a href="modules.html" class="btn btn-default">Modules &#9658;</a>

Singleton Methods
=================

The behavior of an instance is determined by its class, but there
may be times we know that a particular instance should have special
behavior.  In most languages, we must go to the trouble of
defining another class, which would then only be instantiated
once.  In ruby we can give any object its own methods.

    ruby> class SingletonTest
        |   def size
        |     25
        |   end
        | end
       nil
    ruby> test1 = SingletonTest.new
       #<SingletonTest:0xbc468>
    ruby> test2 = SingletonTest.new
       #<SingletonTest:0xbae20>
    ruby> def test2.size
        |    10
        | end
       nil
    ruby> test1.size
       25
    ruby> test2.size
       10

In this example, `test1` and `test2` belong to
same class, but `test2` has been given a redefined
`size` method and so they behave differently.  A method
given only to a single object is called a *singleton method*.

Singleton methods are often used for elements of a graphic user
interface (GUI), where different actions need to be taken when
different buttons are pressed.

Singleton methods are not unique to ruby, as they appear in CLOS,
Dylan, etc.  Also, some languages, for example, Self and
NewtonScript, have singleton methods only.  These are sometimes
called *prototype-based* languages.

<!-- Previous page -->
<a href="accesscontrol.html" class="btn btn-default">&#9668; Access Control</a>
<!-- Next page -->
<a href="modules.html" class="btn btn-default">Modules &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

Title: Modules - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="singletonmethods.html" class="btn btn-default">&#9668; Singleton Methods</a>
<!-- Next page -->
<a href="procobjects.html" class="btn btn-default">Procedure Objects &#9658;</a>

Modules
=======

Modules in ruby are similar to classes, except:

- A module can have no instances.
- A module can have no subclasses.
- A module is defined by `module ... end`.

Actually... the Module class of module is the superclass of the
Class class of class.  Got that? No? Let's move
on.

There are two typical uses of modules.  One is to collect
related methods and constants in a central location.  The
`Math` module in ruby's standard library plays such a
role:

    ruby> Math.sqrt(2)
       1.41421
    ruby> Math::PI
       3.14159

The `::` operator tells the ruby interpreter which module it
should consult for the value of a constant (conceivably, some module
besides `Math` might mean something else by `PI`).
If we want to refer to the methods or constants of a module directly
without using `::`, we can `include` that module:

    ruby> include Math
       Object
    ruby> sqrt(2)
       1.41421
    ruby> PI
       3.14159

Another use of modules is called *mixin*.  Some OO
programming languages, including C++, allow *multiple
inheritance*, that is, inheritance from more than one
superclass.  A real-world example of multiple inheritance is an
alarm clock; you can think of alarm clocks as belonging to the class
of *clocks* and also the class of *things with
buzzers*.

Ruby purposely does not implement true multiple inheritance, but
the *mixin* technique is a good alternative.  Remember that
modules cannot be instantiated or subclassed; but if we
`include` a module in a class definition, its methods are
effectively appended, or "mixed in", to the class.

Mixin can be thought of as a way of asking for whatever particular
properties we want to have.  For example, if a class has a
working `each` method, mixing in the standard library's
`Enumerable` module gives us `sort` and
`find` methods for free.

This use of modules gives us the basic functionality of multiple
inheritance but allows us to represent class relationships with a
simple tree structure, and so simplifies the language implementation
considerably (a similar choice was made by the designers of Java).

<!-- Previous page -->
<a href="singletonmethods.html" class="btn btn-default">&#9668; Singleton Methods</a>
<!-- Next page -->
<a href="procobjects.html" class="btn btn-default">Procedure Objects &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

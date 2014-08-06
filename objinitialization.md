Title: Object Initialization - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="accessors.html" class="btn btn-default">&#9668; Accessors</a>
<!-- Next page -->
<a href="misc.html" class="btn btn-default">Nuts and bolts &#9658;</a>

Object Initialization
=====================

Our Fruit class from the previous chapter had two instance variables,
one to describe the kind of fruit and another to describe its
condition.  It was only after writing a custom `inspect`
method for the class that we realized it didn't make sense for a piece
of fruit to lack those characteristics.  Fortunately, ruby provides a
way to ensure that instance variables always get initialized.

The `initialize` method
-----------------------

Whenever Ruby creates a new object, it looks for a method named
`initialize` and executes it.  So one simple thing we can
do is use an `initialize` method to put default values into
all the instance variables, so the `inspect` method will
have something to say.

    ruby> class Fruit
        |   def initialize
        |     @kind = "apple"
        |     @condition = "ripe"
        |   end
        | end
       nil
    ruby> f4 = Fruit.new
       "a ripe apple"

Changing assumptions to requirements
------------------------------------

There will be times when a default value doesn't make a lot of sense.
Is there such a thing as a default kind of fruit?  It may be
preferable to require that each piece of fruit have its kind specified
at the time of its creation.  To do this, we would add a formal
argument to the `initialize` method.  For reasons we won't
get into here, arguments you supply to `new` are actually
delivered to `initialize`.

    ruby> class Fruit
        |   def initialize( k )
        |     @kind = k
        |     @condition = "ripe"
        |   end
        | end
       nil
    ruby> f5 = Fruit.new "mango"
       "a ripe mango"
    ruby> f6 = Fruit.new
    ERR: (eval):1:in `initialize': wrong # of arguments(0 for 1)

Flexible initialization
-----------------------

Above we see that once an argument is associated with the
`initialize` method, it can't be left off without
generating an error.  If we want to be more considerate, we can use
the argument if it is given, or fall back to default values otherwise.

    ruby> class Fruit
        |   def initialize( k="apple" )
        |     @kind = k
        |     @condition = "ripe"
        |   end
        | end
       nil
    ruby> f5 = Fruit.new "mango"
       "a ripe mango"
    ruby> f6 = Fruit.new
       "a ripe apple"

You can use default argument values for any method, not just
`initialize`.  The argument list must be arranged so that
those with default values come last.

Sometimes it is useful to provide several ways to initialize an
object.  Although it is outside the scope of this tutorial, ruby
supports object reflection and variable-length argument lists, which
together effectively allow method overloading.

<!-- Previous page -->
<a href="accessors.html" class="btn btn-default">&#9668; Accessors</a>
<!-- Next page -->
<a href="misc.html" class="btn btn-default">Nuts and bolts &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

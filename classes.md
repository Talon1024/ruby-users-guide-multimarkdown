Title: Classes - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="methods.html" class="btn btn-default">&#9668; Methods</a>
<!-- Next page -->
<a href="inheritance.html" class="btn btn-default">Inheritance &#9658;</a>

Classes
=======

The real world is filled by objects, and we can classify
them.  For example, a very small child is likely to say "bow-wow"
when seeing a dog, regardless of the breed; we naturally see the world
in terms of these categories.

In OO programming terminology, a category of objects like "dog" is
called a *class*, and some specific object belonging to a class
is called an *instance* of that class.

Generally, to make an object in ruby or any other OO language,
first one defines the characteristics of a class, then creates an
instance.  To illustrate the process, let's first define a simple
`Dog` class.

    ruby> class Dog
        |   def speak
        |     puts "Bow Wow"
        |   end
        | end
       nil

In ruby, a class definition is a region of code between the keywords
`class` and `end`.  A `def` inside this region begins the
definition of a *method* of the class, which as we discussed in
the previous chapter, corresponds to some specific behavior for
objects of that class.

Now that we have defined a `Dog` class, we can use it to
make a dog:

    ruby> pochi = Dog.new
       #<Dog:0xbcb90>

We have made a new instance of the class `Dog`, and have
given it the name `pochi`.  The `new` method of any class
makes a new instance.  Because `pochi` is a `Dog` according
to our class definition, it has whatever properties we
decided a `Dog` should have.  Since our idea of `Dog`-ness
was very simple, there is just one trick we can ask `pochi`
to do.

    ruby> pochi.speak
    Bow Wow
       nil

Making a new instance of a class is sometimes called
*instantiating* that class.  We need to have a dog before we
can experience the pleasure of its conversation; we can't merely ask
the Dog *class* to bark for us.

    ruby> Dog.speak
    ERR: (eval):1: undefined method `speak' for Dog:class

It makes no more sense than trying to *eat the concept of a sandwich*.

On the other hand, if we want to hear the sound of a dog without
getting emotionally attached, we can create (instantiate) an ephemeral,
temporary dog, and coax a little noise out of it before it
disappears.

    ruby> (Dog.new).speak   # or more commonly, Dog.new.speak
    Bow Wow
       nil

"Wait," you say, "what's all this about the poor fellow
disappearing afterwards?" It's true: if we don't bother to give
it a name (as we did for `pochi`), ruby's automatic garbage
collection decides it is an unwanted stray dog, and mercilessly
disposes of it.  Really it's okay, you know, because we can make
all the dogs we want.

<!-- Previous page -->
<a href="methods.html" class="btn btn-default">&#9668; Methods</a>
<!-- Next page -->
<a href="inheritance.html" class="btn btn-default">Inheritance &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

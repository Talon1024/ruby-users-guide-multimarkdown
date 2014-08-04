Title: Inheritance - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="classes.html" class="btn btn-default">&#9668; Classes</a>
<!-- Next page -->
<a href="redefinemethods.html" class="btn btn-default">Redefinition of methods &#9658;</a>

Inheritance
===========

Our classification of objects in everyday life is naturally
hierarchical.  We know that *all cats are mammals*, and
*all mammals are animals*.  Smaller classes *inherit*
characteristics from the larger classes to which they belong.  If
all mammals breathe, then all cats breathe.

We can express this concept in ruby:

    ruby> class Mammal
        |   def breathe
        |     puts "inhale and exhale"
        |   end
        | end
       nil
    ruby> class Cat<Mammal
        |   def speak
        |     puts "Meow"
        |   end
        | end
       nil

Though we didn't specify how a `Cat` should breathe, every
cat will inherit that behavior from the `Mammal` class since
`Cat` was defined as a subclass of `Mammal`.  (In
OO terminology, the smaller class is a *subclass* and the larger
class is a *superclass*.) Hence from a programmer's
standpoint, cats get the ability to breathe for free; after we add a
`speak` method, our cats can both breathe and speak.

    ruby> tama = Cat.new
       #<Cat:0xbd80e8>
    ruby> tama.breathe
    inhale and exhale
       nil
    ruby> tama.speak
    Meow
       nil

There will be situations where certain properties of the superclass
should not be inherited by a particular subclass.  Though birds
generally know how to fly, penguins are a flightless subclass of
birds.

    ruby> class Bird
        |   def preen
        |     puts "I am cleaning my feathers."
        |   end
        |   def fly
        |     puts "I am flying."
        |   end
        | end
       nil
    ruby> class Penguin<Bird
        |   def fly
        |     fail "Sorry. I'd rather swim."
        |   end
        | end
       nil

Rather than exhaustively define every characteristic of every
new class, we need only to append or to redefine the differences
between each subclass and its superclass.  This use of
inheritance is sometimes called *differential programming*.
It is one of the benefits of object-oriented programming.

<!-- Previous page -->
<a href="classes.html" class="btn btn-default">&#9668; Classes</a>
<!-- Next page -->
<a href="redefinemethods.html" class="btn btn-default">Redefinition of methods &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

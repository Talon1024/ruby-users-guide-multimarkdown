Title: Redefinition of Methods - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="inheritance.html" class="btn btn-default">&#9668; Inheritance</a>
<!-- Next page -->
<a href="accesscontrol.html" class="btn btn-default">Access control &#9658;</a>

Redefinition of Methods
=======================

In a subclass, we can change the behavior of the instances by
redefining superclass methods.

    ruby> class Human
        |   def identify
        |     puts "I'm a person."
        |   end
        |   def train_toll(age)
        |     if age < 12
        |       puts "Reduced fare.";
        |     else
        |       puts "Normal fare.";
        |     end
        |   end
        | end
       nil
    ruby> Human.new.identify
    I'm a person.
       nil
    ruby> class Student1<Human
        |   def identify
        |     puts "I'm a student."
        |   end
        | end
       nil
    ruby> Student1.new.identify
    I'm a student.
       nil

Suppose we would rather enhance the superclass's `identify`
method than entirely replace it.  For this we can use `super`.

    ruby> class Student2<Human
        |   def identify
        |     super
        |     puts "I'm a student too."
        |   end
        | end
       nil
    ruby> Student2.new.identify
    I'm a person.
    I'm a student too.
       nil

`super` lets us pass arguments to the original method.
It is sometimes said that there are two kinds of people...

    ruby> class Dishonest<Human
        |   def train_toll(age)
        |     super(11) # we want a cheap fare.
        |   end
        | end
       nil
    ruby> Dishonest.new.train_toll(25)
    Reduced fare.
       nil

    ruby> class Honest<Human
        |   def train_toll(age)
        |     super(age) # pass the argument we were given
        |   end
        | end
       nil
    ruby> Honest.new.train_toll(25)
    Normal fare.
       nil

<!-- Previous page -->
<a href="inheritance.html" class="btn btn-default">&#9668; Inheritance</a>
<!-- Next page -->
<a href="accesscontrol.html" class="btn btn-default">Access control &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

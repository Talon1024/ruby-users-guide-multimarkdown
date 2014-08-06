Title: Accessors - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="ensure.html" class="btn btn-default">&#9668; Exception processing: ensure</a>
<!-- Next page -->
<a href="objinitialization.html" class="btn btn-default">Object initialization &#9658;</a>

Accessors
=========

What is an accessor?
--------------------

We briefly discussed instance variables in an earlier chapter, but
haven't done much with them yet.  An object's instance variables are
its attributes, the things that distinguish it from other objects of
the same class.  It is important to be able to write and read these
attributes; doing so requires methods called *attribute
accessors*.  We'll see in a moment that we don't always have to
write accessor methods explicitly, but let's go through all the
motions for now.  The two kinds of accessors are *writers* and
*readers*.

    ruby> class Fruit
        |   def set_kind(k)  # a writer
        |     @kind = k
        |   end
        |   def get_kind     # a reader
        |     @kind
        |   end
        | end
       nil
    ruby> f1 = Fruit.new
       #<Fruit:0xfd7e7c8c>
    ruby> f1.set_kind("peach")  # use the writer
       "peach"
    ruby> f1.get_kind           # use the reader
       "peach"
    ruby> f1                    # inspect the object
       #<Fruit:0xfd7e7c8c @kind="peach">

Simple enough; we can store and retrieve information about
what kind of fruit we're looking at.  But our method names are a
little wordy.  The following is more concise, and more
conventional:

    ruby> class Fruit
        |   def kind=(k)
        |     @kind = k
        |   end
        |   def kind
        |     @kind
        |   end
        | end
       nil
    ruby> f2 = Fruit.new
       #<Fruit:0xfd7e7c8c>
    ruby> f2.kind = "banana"
       "banana"
    ruby> f2.kind
       "banana"

The `inspect` method
--------------------

A short digression is in order.  You've noticed by now that when we
try to look at an object directly, we are shown something cryptic like
`#<anObject:0x83678>`.  This is just a default
behavior, and we are free to change it.  All we need to do is add
a method named `inspect`.  It should return a string
that describes the object in some sensible way, including the
states of some or all of its instance variables.

    ruby> class Fruit
        |   def inspect
        |     "a fruit of the #{@kind} variety"
        |   end
        | end
       nil
    ruby> f2
       "a fruit of the banana variety"

A related method is `to_s` (convert to string), which is
used when printing an object.  In general, you can think of
`inspect` as a tool for when you are writing and debugging
programs, and `to_s` as a way of refining program output.
`eval.rb` uses `inspect` whenever it displays
results.  You can use the `p` method to easily get
debugging output from programs.

    # These two lines are equivalent:
    p anObject
    puts anObject.inspect

Making accessors the easy way
-----------------------------

Since many instance variables need accessor methods, Ruby provides
convenient shortcuts for the standard forms.
| Shortcut | Effect |
|--------------------------|--------------------------------------|
| `attr_reader :v`         | `def v; @v; end`                     |
| `attr_writer :v`         | `def v=(value); @v=value; end`       |
| `attr_accessor :v`       | `attr_reader :v; attr_writer :v`     |
| `attr_accessor :v, :w`   | `attr_accessor :v; attr_accessor :w` |

Let's take advantage of this and add freshness information.  First
we ask for an automatically generated reader and writer, and then we
incorporate the new information into `inspect`:

    ruby> class Fruit
        |   attr_accessor :condition
        |   def inspect
        |     "a #{@condition} #{@kind}"
        |   end
        | end
       nil
    ruby> f2.condition = "ripe"
       "ripe"
    ruby> f2
       "a ripe banana"

More fun with fruit
-------------------

If nobody eats our ripe fruit, perhaps we should let time take its
toll.

    ruby> class Fruit
        |   def time_passes
        |     @condition = "rotting"
        |   end
        | end
       nil
    ruby> f2
       "a ripe banana"
    ruby> f2.time_passes
       "rotting"
    ruby> f2
       "a rotting banana"

But while playing around here, we have introduced a small problem.
What happens if we try to create a third piece of fruit now?  Remember
that instance variables don't exist until values are assigned to
them.

    ruby> f3 = Fruit.new
    ERR: failed to convert nil into String

It is the `inspect` method that is complaining here, and
with good reason.  We have asked it to report on the kind and
condition of a piece of fruit, but as yet `f3` has not been
assigned either attribute.  If we wanted to, we could rewrite the
`inspect` method so it tests instance variables using
the` defined? `method and then only reports on them if they
exist, but maybe that's not very useful; since every piece of fruit
has a kind and condition, it seems we should make sure those always
get defined somehow.  That is the topic of the next chapter.

<!-- Previous page -->
<a href="ensure.html" class="btn btn-default">&#9668; Exception processing: ensure</a>
<!-- Next page -->
<a href="objinitialization.html" class="btn btn-default">Object initialization &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

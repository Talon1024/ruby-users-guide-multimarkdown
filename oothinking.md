Title: Object-oriented thinking - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="iterators.html" class="btn btn-default">&#9668; Iterators</a>
<!-- Next page -->
<a href="methods.html" class="btn btn-default">Methods &#9658;</a>

Object-oriented thinking
========================

*Object oriented* is a catchy phrase.  To call anything
object oriented can make you sound pretty smart.  Ruby claims to be
an object oriented scripting language; but what exactly does "object
oriented" mean?

There have been a variety of answers to that question, all of which
probably boil down to about the same thing.  Rather than sum it
too quickly, let's think for a moment about the traditional
programming paradigm.

Traditionally, a programming problem is attacked by coming up with
some kinds of *data representations*, and *procedures*
that operate on that data.  Under this model, data is inert,
passive, and helpless; it sits at the complete mercy of a large
procedural body, which is active, logical, and all-powerful.

The problem with this approach is that programs are written by
programmers, who are only human and can only keep so much detail clear
in their heads at any one time.  As a project gets larger, its
procedural core grows to the point where it is difficult to remember
how the whole thing works.  Minor lapses of thinking and
typographical errors become more likely to result in well-concealed
bugs.  Complex and unintended interactions begin to emerge within
the procedural core, and maintaining it becomes like trying to carry
around an angry squid without letting any tentacles touch your
face.  There are guidelines for programming that can help to
minimize and localize bugs within this traditional paradigm, but there
is a better solution that involves fundamentally changing the way we
work.

What object-oriented programming does is to let us delegate most of
the mundane and repetitive logical work *to the data itself*;
it changes our concept of data from *passive* to
*active*.  Put another way,

- We stop treating each piece of data as a box with an open lid
  that lets us reach in and throw things around.
- We start treating each piece of data as a working machine with
  a closed lid and a few well-marked switches and dials.

What is described above as a "machine" may be very simple or
complex on the inside; we can't tell from the outside, and we don't
allow ourselves to open the machine up (except when we are absolutely
sure something is wrong with its design), so we are required to do
things like flip the switches and read the dials to interact with the
data.  Once the machine is built, we don't want to have to
think about how it operates.

You might think we are just making more work for ourselves, but
this approach tends to do a nice job of preventing all kinds of things
from going wrong.

Let's start with a example that is too simple to be of practical
value, but should illustrate at least part of the concept.  Your
car has a tripmeter.  Its job is to keep track of the distance
the car has travelled since the last time its reset button was
pushed.  How would we model this in a programming language?
In C, the tripmeter would just be a numeric variable, possibly of type
`float`.  The program would manipulate that variable
by increasing its value in small increments, with occasional resets to
zero when appropriate.  What's wrong with that? A bug in
the program could assign a bogus value to the variable, for any number
of unexpected reasons.  Anyone who has programmed in C knows what
it is like to spend hours or days tracking down such a bug whose cause
seems absurdly simple once it has been found.  (The moment of
finding the bug is commonly indicated by the sound of a loud slap to
the forehead.)

The same problem would be attacked from a much different angle in
an object-oriented context.  The first thing a programmer asks
when designing the tripmeter is not "which of the familiar data types
comes closest to resembling this thing?" but "how exactly is this
thing supposed to act?" The difference winds up being a profound
one.  It is necessary to spend a little bit of time deciding
exactly what an odometer is for, and how the outside world expects to
interact with it.  We decide to build a little machine with
controls that allow us to increment it, reset it, read its value, and
nothing else.

We don't provide a way for a tripmeter to be assigned arbitrary
values; why? because we all know tripmeters don't work that way.
There are only a few things you should be able to do with a tripmeter,
and those are all we allow.  Thus, if something else in the
program mistakenly tries to place some other value (say, the target
temperature of the vehicle's climate control) into the tripmeter,
there is an immediate indication of what went wrong.  We are told
when running the program (or possibly while compiling, depending on
the nature of the language) that *we are not allowed to assign
arbitrary values to Tripmeter objects*.  The message might
not be exactly that clear, but it will be reasonably close to
that.  It doesn't prevent the error, does it? But it
quickly points us in the direction of the cause.  This is only
one of several ways in which OO programming can save a lot of wasted
time.

We commonly take one step of abstraction above this, because it
turns out to be as easy to build a factory that makes machines as it
is to make an individual machine.  We aren't likely to build a
single tripmeter directly; rather, we arrange for any number of
tripmeters to be built from a single pattern.  The pattern (or if
you like, the tripmeter factory) corresponds to what we call a
*class*, and an individual tripmeter generated from the pattern
(or made by the factory) corresponds to an *object*.  Most
OO languages require a class to be defined before we can have a new
kind of object, but ruby does not.

It's worth noting here that the use of an OO language will not
*enforce* proper OO design.  Indeed it is possible in any
language to write code that is unclear, sloppy, ill-conceived, buggy,
and wobbly all over.  What ruby does for you (as opposed,
especially, to C++) is to make the practice of OO programming feel
natural enough that even when you are working on a small scale you
don't feel a necessity to resort to ugly code to save effort.  We
will be discussing the ways in which ruby accomplishes that admirable
goal as this guide progresses; the next topic will be the "switches
and dials" (object methods) and from there we'll move on to the
"factories" (classes).  Are you still with us?

<!-- Previous page -->
<a href="iterators.html" class="btn btn-default">&#9668; Iterators</a>
<!-- Next page -->
<a href="methods.html" class="btn btn-default">Methods &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

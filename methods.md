Title: Methods - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="oothinking.html" class="btn btn-default">&#9668; Object-oriented thinking</a>
<!-- Next page -->
<a href="classes.html" class="btn btn-default">Classes &#9658;</a>

Methods
=======

What is a method? In OO programming, we don't think of
operating on data directly from outside an object; rather, objects
have some understanding of how to operate on themselves (when asked
nicely to do so). You might say we pass messages to an object,
and those messages will generally elicit some kind of an action or
meaningful reply. This ought to happen without our necessarily
knowing or caring how the object really works inside. The tasks
we are allowed to ask an object to perform (or equivalently, the
messages it understands) are that object's *methods*.

In ruby, we invoke a method of an object with dot notation (just as
in C++ or Java). The object being talked to is named to the left
of the dot.

    ruby> "abcdef".length
       6

Intuitively, *this string object is being asked how long it
is*.  Technically, we are invoking the `length` method
of the object `"abcdef"`.

Other objects may have a slightly different interpretation of
`length`, or none at all.  Decisions about how to respond
to a message are made on the fly, during program execution, and the
action taken may change depending on what a variable refers to.

    ruby> foo = "abc"
       "abc"
    ruby> foo.length
       3
    ruby> foo = ["abcde", "fghij"]
       ["abcde", "fghij"]
    ruby> foo.length
       2

What we mean by *length* can vary depending on what object
we are talking about.  The first time we ask `foo` for its
length in the above example, it refers to a simple string, and there
can only be one sensible answer.  The second time, `foo`
refers to an array, and we might reasonably think of its length
as either 2, 5, or 10; but the most generally applicable answer is of
course 2 (the other kinds of length can be figured out if wished).

    ruby> foo[0].length
       5
    ruby> foo[0].length + foo[1].length
       10

The thing to notice here is that an array *knows something about
what it means to be an array*.  Pieces of data in ruby carry such
knowledge with them, so that the demands made on them can
automatically be satisfied in the various appropriate ways.  This
relieves the programmer from the burden of memorizing a great many
specific function names, because a relatively small number of method
names, corresponding to concepts that we know how to express in
natural language, can be applied to different kinds of data and the
results will be what we expect.  This feature of OO programming
languages (which, IMHO, Java has done a poor job of exploiting) is
called *polymorphism*.

When an object receives a message that it does not understand, an
error is "raised":

    ruby> foo = 5
       5
    ruby> foo.length
    ERR: (eval):1: undefined method `length' for 5(Fixnum)

So it is necessary to know what methods are acceptable to an object,
though we need not know how the methods are processed.
If arguments are given to a method, they are generally surrounded by
parentheses,

    object.method(arg1, arg2)

but they can be omitted if doing so does not cause ambiguity.

    object.method arg1, arg2

There is a special variable `self` in ruby; it refers to
whatever object calls a method.  This happens so often that for
convenience the "`self.`" may be omitted from method calls from
an object to itself:

    self.method_name(args...)

is the same as

    method_name(args...)

What we would think of traditionally as a *function call* is
just this abbreviated way of writing method invocations by
`self`.  This makes ruby what is called a pure object
oriented language.  Still, functional methods behave quite
similarly to the functions in other programming languages for the
benefit of those who do not grok how function calls are really object
methods in ruby.  We can speak of *functions* as if they
were not really object methods if we want to.

<!-- Previous page -->
<a href="oothinking.html" class="btn btn-default">&#9668; Object-oriented thinking</a>
<!-- Next page -->
<a href="classes.html" class="btn btn-default">Classes &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

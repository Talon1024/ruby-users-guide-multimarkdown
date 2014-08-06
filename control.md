Title: Control Structures - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="backtoexamples.html" class="btn btn-default">&#9668; Back to the Simple Examples</a>
<!-- Next page -->
<a href="iterators.html" class="btn btn-default">Iterators &#9658;</a>

Control Structures
==================

This chapter explores more of ruby's control structures.

`case`
------

We use the `case` statement to test a sequence of
conditions.  This is superficially similar to `switch`
in C and Java but is considerably more powerful, as we shall see.

    ruby> i=8
    ruby> case i
        | when 1, 2..5
        |   puts "1..5"
        | when 6..10
        |   puts "6..10"
        | end
    6..10
       nil

`2..5` is an expression which means the *range*
between 2 and 5, inclusive.  The following expression tests
whether the value of `i` falls within that range:

    (2..5) === i

`case` internally uses the relationship operator `===` to
check for several conditions at a time.  In keeping with ruby's
object oriented nature, `===` is interpreted suitably for the
object that appeared in the `when` condition.  For example,
the following code tests string equality in the first `when`, and
regular expression matching in the second `when`.

    ruby> case 'abcdef'
        | when 'aaa', 'bbb'
        |   puts "aaa or bbb"
        | when /def/
        |   puts "includes /def/"
        | end
    includes /def/
       nil

`while`
-------

Ruby provides convenient ways to construct loops, although you will
find in the next chapter that learning how to use *iterators*
will make it unnecessary to write explicit loops very often.

A `while` is a repeated `if`.  We used it in our
word-guessing puzzle and in the regular expression programs (see the
[previous chapter](regexp.html)); there, it took the form
`while condition ... end` surrounding a block of code to
be repeated while *condition* was true.  But `while`
and `if` can as easily be applied to individual statements:

    ruby> i = 0
       0
    ruby> puts "It's zero." if i==0
    It's zero.
       nil
    ruby> puts "It's negative." if i < 0
       nil
    ruby> puts i+=1 while i < 3
    1
    2
    3
       nil

Sometimes you want to negate a test condition.  An
`unless` is a negated `if`, and an `until` is a negated
`while`.  We'll leave it up to you to experiment with these.

There are four ways to interrupt the progress of a loop from
inside.  First, `break` means, as in C, to escape from the
loop entirely.  Second, `next` skips to the beginning of
the next iteration of the loop (corresponding to C's
`continue`).  Third, ruby has `redo`, which
restarts the current iteration.  The following is C code
illustrating the meanings of `break`, `next,` and
`redo`:

    while (condition) {
     label_redo:
       goto label_next;        /* ruby's "next" */
       goto label_break;       /* ruby's "break" */
       goto label_redo;        /* ruby's "redo" */
       ...
       ...
     label_next:
    }
    label_break:
    ...

The fourth way to get out of a loop from the inside is
`return`.  An evaluation of `return` causes
escape not only from a loop but from the method that contains the
loop.  If an argument is given, it will be returned from the
method call, otherwise `nil` is returned.

`for`
------

C programmers will be wondering by now how to make a "for" loop.
Ruby's `for` can serve the same purpose, but adds some
flexibility.  The loop below runs once for each element in a
*collection* (array, hash, numeric sequence, etc.), but doesn't
make the programmer think about indices:

    for elt in collection
      # ... here, elt refers to an element of the collection
    end

The collection can be a range of values (this is what most people
mean when they talk about a for loop):

    ruby> for num in (4..6)
        |    puts num
        | end
    4
    5
    6
       4..6

In this example we step through some array elements:

    ruby> for elt in [100,-9.6,"pickle"]
        |    puts "#{elt}\t(#{elt.class})"
        | end
    100    (Fixnum)
    -9.6   (Float)
    pickle (String)
       [100, -9.6, "pickle"]

But we're getting ahead of ourselves.  `for` is really
another way of writing `each`, which, it so happens, is our first
example of an iterator.  The following two forms are
equivalent:

    #  If you're used to C or Java, you might prefer this.
    for element in collection
      ...
    end

    #  A Smalltalk programmer might prefer this.
    collection.each {|element|
      ...
    }

Iterators can often be substituted for conventional loops, and once
you get used to them, they are generally easier to deal with.  So
let's move on and learn more about them.

<!-- Previous page -->
<a href="backtoexamples.html" class="btn btn-default">&#9668; Back to the Simple Examples</a>
<!-- Next page -->
<a href="iterators.html" class="btn btn-default">Iterators &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

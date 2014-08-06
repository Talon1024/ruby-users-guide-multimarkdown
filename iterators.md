Title: Iterators - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="control.html" class="btn btn-default">&#9668; Control Structures</a>
<!-- Next page -->
<a href="oothinking.html" class="btn btn-default">Object-oriented thinking &#9658;</a>

Iterators
=========

Iterators are not an original concept with ruby.  They are in
common use in object-oriented languages.  They are also used in
Lisp, though there they are not called iterators.  However the
concept of iterator is an unfamiliar one for many so it should be
explained in more detail.

The verb *iterate* means to do the same thing many times, you know,
so an *iterator* is something that does the same thing many times.

When we write code, we need loops in various situations.  In
C, we code them using `for` or `while`. For example,

    char *str;
    for (str = "abcdefg"; *str != '\0'; str++) {
      /* process a character here */
    }

C's `for(...)` syntax provides an abstraction to help with
the creation of a loop, but the test of `*str` against a
null character requires the programmer to know details about the
internal structure of a string.  This makes C feel like a low-level
language.  Higher level languages are marked by their more flexible
support for iteration.  Consider the following `sh` shell
script:

    #!/bin/sh

    for i in *.[ch]; do
      # ... here would be something to do for each file
    done

All the C source and header files in the current directory are
processed, and the command shell handles the details of picking up and
substituting file names one by one.  I think this is working at a
higher level than C, don't you?

But there is more to consider: while it is fine for a language to
provide iterators for built-in data types, it is a disappointment if
we must go back to writing low level loops to iterate over our own
data types.  In OOP, users often define one data type after
another, so this could be a serious problem.

So every OOP language includes some facilities for iteration.
Some languages provide a special class for this purpose; ruby allows
us to define iterators directly.

Ruby's `String` type has some useful iterators:

    ruby> "abc".each_byte{|c| printf "<%c>", c}; print "\n"
    <a><b><c>
       nil

`each_byte` is an iterator for each character in the
string.  Each character is substituted into the local variable
`c`.  This can be translated into something that looks
a lot like C code ...

    ruby> s="abc";i=0
       0
    ruby> while i<s.length
        |    printf "<%c>", s[i]; i+=1
        | end; print "\n"
    <a><b><c>
       nil

... however, the `each_byte` iterator is both conceptually
simpler and more likely to continue to work even if the
`String` class happens to be radically modified in the
future.  One benefit of iterators is that they tend to be robust
in the face of such changes; indeed that is a characteristic of good
code in general.  (Yes, have patience, we're about to talk about
what *classes* are, too.)

Another iterator of `String` is `each_line`.

    ruby> "a\nb\nc\n".each_line{|l| print l}
    a
    b
    c
       nil

The tasks that would take most of the programming effort in C (finding
line delimiters, generating substrings, etc.) are easily tackled using
iterators.

The `for` statement appearing in the previous chapter does
iteration by way of an `each` iterator. `String`'s `each` works the
same as `each_line`, so let's rewrite the above example with `for`:

    ruby> for l in "a\nb\nc\n"
        |   print l
        | end
    a
    b
    c
       nil

We can use a control structure `retry` in conjunction with
an iterated loop, and it will retry the loop from the beginning.

    ruby> c=0
       0
    ruby> for i in 0..4
        |   print i
        |   if i == 2 and c == 0
        |     c = 1
        |     print "\n"
        |     retry
        |   end
        | end; print "\n"
    012
    01234
       nil

Replacing `retry` in the above example with `redo` causes just
the current iteration of the loop to be redone, with this output:

    012
    234

`yield` occurs sometimes in a definition of an iterator.
`yield` moves control to the block of code that is passed to the
iterator (this will be explored in more detail in the chapter about
[procedure objects](procobjects.html)).  The following example defines
an iterator `repeat`, which repeats a block of code the number of
times specified in an argument.

    ruby> def repeat(num)
        |   while num > 0
        |     yield
        |     num -= 1
        |   end
        | end
       nil
    ruby> repeat(3) { puts "foo" }
    foo
    foo
    foo
       nil

With `retry`, one can define an iterator which works something
like ruby's standard `while`.

    ruby> def WHILE(cond)
        |   return if not cond
        |   yield
        |   retry
        | end
       nil
    ruby> i=0; WHILE(i<3) { print i; i+=1 }
    012   nil

Do you understand what an iterator is? There are a few
restrictions, but you can write your original iterators; and in fact,
whenever you define a new data type, it is often convenient to define
suitable iterators to go with it.  In this sense, the above
examples are not terribly useful.  We can talk about practical
iterators after we have a better understanding of what classes
are.

<!-- Previous page -->
<a href="control.html" class="btn btn-default">&#9668; Control Structures</a>
<!-- Next page -->
<a href="oothinking.html" class="btn btn-default">Object-oriented thinking &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

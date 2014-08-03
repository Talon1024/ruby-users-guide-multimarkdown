Title: Access control - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="redefinemethods.html" class="btn btn-default">&#9668; Redefinition of Methods</a>
<!-- Next page -->
<a href="singletonmethods.html" class="btn btn-default">Singleton methods &#9658;</a>

Access control
==============

Earlier, we said that ruby has no functions, only methods.
However there is more than one kind of method.  In this chapter
we introduce *access controls*.

Consider what happens when we define a method in the "top level",
not inside a class definition.  We can think of such a method as
analogous to a *function* in a more traditional language like C.

    ruby> def square(n)
        |   n * n
        | end
       nil
    ruby> square(5)
       25

Our new method would appear not to belong to any class, but in fact
ruby gives it to the `Object` class, which is a superclass
of every other class.  As a result, any object should now be able
to use that method.  That turns out to be true, but there's a
small catch: it is a *private* method of every class.
We'll discuss some of what this means below, but one consequence is
that it may be invoked only in function style, as here:

    ruby> class Foo
        |   def fourth_power_of(x)
        |     square(x) * square(x)
        |   end
        | end
      nil
    ruby> Foo.new.fourth_power_of 10
      10000

We are not allowed to explicitly apply the method to an object:

    ruby> "fish".square(5)
    ERR: (eval):1: private method `square' called for "fish":String

This rather cleverly preserves ruby's pure-OO nature (functions are
still object methods, but the receiver is `self`
implicitly) while providing functions that can be written just as in a
more traditional language.

A common mental discipline in OO programming, which we have hinted
at in an earlier chapter, concerns the separation of
*specification* and *implementation*, or *what* tasks an
object is supposed to accomplish and *how* it actually
accomplishes them.  The internal workings of an object should be
kept generally hidden from its users; they should only care about what
goes in and what comes out, and trust the object to know what it is
doing internally.  As such it is often helpful for classes to
have methods that the outside world does not see, but which are used
internally (and can be improved by the programmer whenever desired,
without changing the way users see objects of that class).  In
the trivial example below, think of `engine` as the invisible
inner workings of the class.

    ruby> class Test
        |   def times_two(a)
        |     puts "#{a} times two is #{engine(a)}"
        |   end
        |   def engine(b)
        |     b*2
        |   end
        |   private:engine  # this hides engine from users
        | end
       Test
    ruby> test = Test.new
       #<Test:0x4017181c>
    ruby> test.engine(6)
    ERR: (eval):1: private method `engine' called for #<Test:0x4017181c>
    ruby> test.times_two(6)
    6 times two is 12.
       nil

We might have expected `test.engine(6)` to return 12, but
instead we learn that `engine` is inaccessible when we
are acting as a user of a `Test` object.  Only other
`Test` methods, such as `times_two`, are allowed to
use `engine`.  We are required to go through the
public interface, which consists of the `times_two`
method.  The programmer who is in charge of this class can change
`engine` freely (here, perhaps by changing `b*2`
to `b+b`, assuming for the sake of argument that it improved
performance) without affecting how the user interacts with
`Test` objects.  This example is of course much too simple
to be useful; the benefits of access controls become more clear only
when we begin to create more complicated and interesting classes.

<!-- Previous page -->
<a href="redefinemethods.html" class="btn btn-default">&#9668; Redefinition of Methods</a>
<!-- Next page -->
<a href="singletonmethods.html" class="btn btn-default">Singleton methods &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

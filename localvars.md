Title: Local Variables - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="instancevars.html" class="btn btn-default">&#9668; Instance Variables</a>
<!-- Next page -->
<a href="constants.html" class="btn btn-default">Class Constants &#9658;</a>

Local Variables
===============

A local variable has a name starting with a lower case letter or an
underscore character (`_`).  Local variables do
not, like globals and instance variables, have the value
`nil` before initialization:

    ruby> $foo
       nil
    ruby> @foo
       nil
    ruby> foo
    ERR: (eval):1: undefined local variable or method `foo' for main(Object)

The first assignment you make to a local variable acts something like
a declaration.  If you refer to an uninitialized local variable, the
ruby interpreter cannot be sure whether you are referencing a bogus
variable; you might, for example, have misspelled a method name. Hence the
rather nonspecific error message you see above.
Generally, the scope of a local variable is one of

- `proc{` ... `}`
- `loop{` ... `}`
- `def` ... `end`
- `class` ... `end`
- `module` ... `end`
- the entire script (unless one of the above applies)

In the next example, `defined?` is an operator which checks
whether an identifier is defined.  It returns a description of the
identifier if it is defined, or `nil` otherwise.  As you see,
`bar`'s scope is local to the loop; when the loop exits, `bar`
is undefined.

    ruby> foo = 44; puts foo; defined?(foo)
    44
       "local-variable"
    ruby> loop{bar=45; puts bar; break}; defined?(bar)
    45
       nil

Procedure objects that live in the same scope share whatever local
variables also belong to that scope.  Here, the local variable
`bar` is shared by `main` and the procedure objects
`p1` and `p2`:

    ruby> bar=nil
       nil
    ruby> p1 = proc{|n| bar=n}
       #<Proc:0x8deb0>
    ruby> p2 = proc{bar}
       #<Proc:0x8dce8>
    ruby> p1.call(5)
       5
    ruby> bar
       5
    ruby> p2.call
       5

Note that the "`bar=nil`" at the beginning cannot be omitted; it
ensures that the scope of `bar` will encompass `p1` and
`p2`.  Otherwise `p1` and `p2` would each end up with its
own local variable `bar`, and calling `p2` would have resulted
in an "undefined local variable or method" error.  We could have said
`bar=0` instead, but using `nil` is a courtesy to others who
will read your code later. It indicates fairly clearly that you are
only establishing scope, because the value being assigned is not
intended to be meaningful.

A powerful feature of procedure objects follows from their ability
to be passed as arguments: shared local variables remain valid even
when they are passed out of the original scope.

    ruby> def box
        |   contents = nil
        |   get = proc{contents}
        |   set = proc{|n| contents = n}
        |   return get, set
        | end
       nil
    ruby> reader, writer = box
       [#<Proc:0x40170fc0>, #<Proc:0x40170fac>]
    ruby> reader.call
       nil
    ruby> writer.call(2)
       2
    ruby> reader.call
       2

Ruby is particularly smart about scope.  It is evident in our
example that the `contents` variable is being shared between the
`reader` and `writer`.  But we can also manufacture
multiple reader-writer pairs using `box` as defined above; each
pair shares a `contents` variable, and the pairs do not interfere
with each other.

    ruby> reader_1, writer_1 = box
       [#<Proc:0x40172820>, #<Proc:0x4017280c>]
    ruby> reader_2, writer_2 = box
       [#<Proc:0x40172668>, #<Proc:0x40172654>]
    ruby> writer_1.call(99)
       99
    ruby> reader_1.call
       99
    ruby> reader_2.call  # nothing is in this box yet
       nil

This kind of programming could be considered a perverse little
object-oriented framework.  The `box` method acts something like a
class, with `get` and `set` serving as methods (except those
aren't really the method *names*, which could vary with each box
instance) and `contents` being the lone instance variable.  Of
course, using ruby's legitimate class framework leads to much more
readable code.

<!-- Previous page -->
<a href="instancevars.html" class="btn btn-default">&#9668; Instance Variables</a>
<!-- Next page -->
<a href="constants.html" class="btn btn-default">Class Constants &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo  
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.  
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

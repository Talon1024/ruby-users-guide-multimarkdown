Title: Global Variables - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="variables.html" class="btn btn-default">&#9668; Variables</a>
<!-- Next page -->
<a href="instancevars.html" class="btn btn-default">Instance Variables &#9658;</a>

Global Variables
================

A global variable has a name beginning with `$`.  It
can be referred to from anywhere in a program.  Before
initialization, a global variable has the special value
`nil`.

    ruby> $foo
       nil
    ruby> $foo = 5
       5
    ruby> $foo
       5

Global variables should be used sparingly.  They are dangerous
because they can be written to from anywhere.  Overuse of globals
can make isolating bugs difficult; it also tends to indicate that the
design of a program has not been carefully thought out.  Whenever
you do find it necessary to use a global variable, be sure to give it
a descriptive name that is unlikely to be inadvertently used for
something else later (calling it something like `$foo` as
above is probably a bad idea).

One nice feature of a global variable is that it can be traced; you
can specify a procedure which is invoked whenever the value of the
variable is changed.

    ruby> trace_var :$x, proc{puts "$x is now #{$x}"}
       nil
    ruby> $x = 5
    $x is now 5
       5

When a global variable has been rigged to work as a trigger to invoke
a procedure whenever changed, we sometimes call it an *active
variable*.  For instance, it might be useful for keeping a GUI
display up to date.

There is a collection of special variables whose names consist of a
dollar sign (`$`) followed by a single character.  For example,
`$$` contains the process id of the ruby interpreter, and is
read-only.  Here are the major system variables:

| Global variable | Meaning                                                   |
|-----------------|-----------------------------------------------------------|
| `$!` | latest error message                                                 |
| `$@` | location of error                                                    |
| `$_` | string last read by `gets`                                           |
| `$.` | line *number* last read by interpreter                               |
| `$&` | string last matched by regexp                                        |
| `$~` | the last regexp match, as an array of subexpressions                 |
| `$`  | *n*  the *nth* subexpression in the last match (same as `$~[`*n*`]`) |
| `$=` | case-insensitivity flag                                              |
| `$/` | input record separator                                               |
| `$\` | output record separator                                              |
| `$0` | the name of the ruby script file                                     |
| `$*` | the command line arguments                                           |
| `$$` | interpreter's process ID                                             |
| `$?` | exit status of last executed child process                           |

In the above, `$_` and `$~` have local scope.
Their names suggest they should be global, but they are much more
useful this way, and there are historical reasons for using these
names.

<!-- Previous page -->
<a href="variables.html" class="btn btn-default">&#9668; Variables</a>
<!-- Next page -->
<a href="instancevars.html" class="btn btn-default">Instance Variables &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

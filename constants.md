Title: Class Constants - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell

Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="localvars.html" class="btn btn-default">&#9668; Local variables</a>
<!-- Next page -->
<a href="rescue.html" class="btn btn-default">Exception processing: rescue &#9658;</a>

Class Constants
===============

A constant has a name starting with an uppercase character.  It should
be assigned a value at most once. In the current implementation of
ruby, reassignment of a constant generates a warning but not an error
(the non-ANSI version of eval.rb does not report the warning):

    ruby>fluid=30
       30
    ruby>fluid=31
       31
    ruby>Solid=32
       32
    ruby>Solid=33
       (eval):1: warning: already initialized constant Solid
       33

Constants may be defined within classes, but unlike instance
variables, they are accessible outside the class.

    ruby> class ConstClass
        |   C1=101
        |   C2=102
        |   C3=103
        |   def show
        |     puts "#{C1} #{C2} #{C3}"
        |   end
        | end
       nil
    ruby> C1
    ERR: (eval):1: uninitialized constant C1
    ruby> ConstClass::C1
       101
    ruby> ConstClass.new.show
    101 102 103
       nil

Constants can also be defined in modules.

    ruby> module ConstModule
        |   C1=101
        |   C2=102
        |   C3=103
        |   def showConstants
        |     puts "#{C1} #{C2} #{C3}"
        |   end
        | end
       nil
    ruby> C1
    ERR: (eval):1: uninitialized constant C1
    ruby> include ConstModule
       Object
    ruby> C1
       101
    ruby> showConstants
    101 102 103
       nil
    ruby> C1=99  # not really a good idea
       99
    ruby> C1
       99
    ruby> ConstModule::C1
       101
    ruby> ConstModule::C1=99   # .. this was not allowed in earlier versions
       (eval):1: warning: already initialized constant C1
       99
    ruby> ConstModule::C1  # "enough rope to shoot yourself in the foot"
       99

<!-- Previous page -->
<a href="localvars.html" class="btn btn-default">&#9668; Local variables</a>
<!-- Next page -->
<a href="rescue.html" class="btn btn-default">Exception processing: rescue &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

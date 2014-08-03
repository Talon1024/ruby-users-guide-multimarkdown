Title: Simple Examples - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="getstarted.html" class="btn btn-default">&#9668; Getting Started</a>
<!-- Next page -->
<a href="strings.html" class="btn btn-default">Strings &#9658;</a>

Simple Examples
===============

Let's write a function to compute factorials.  The
mathematical definition of `n` factorial is:

    n! = 1                (when n==0)
       = n * (n-1)!       (otherwise)

In ruby, this can be written as:

    def fact(n)
      if n == 0
        1
      else
        n * fact(n-1)
      end
    end

You may notice the repeated occurrence of `end`.  Ruby
has been called "Algol-like" because of this.  (Actually, the
syntax of ruby more closely mimics that of a language named
Eiffel.) You may also notice the lack of a `return`
statement.  It is unneeded because a ruby function returns the
last thing that was evaluated in it.  Use of a `return`
statement here is permissible but unnecessary.
Let's try out our factorial function.  Adding one line of code
gives us a working program:

    # Program to find the factorial of a number
    # Save this as fact.rb

    def fact(n)
      if n == 0
        1
      else
        n * fact(n-1)
      end
    end

    puts fact(ARGV[0].to_i)

Here, `ARGV` is an array which contains the command line
arguments, and `to_i` converts a character string to an
integer.

    % ruby fact.rb 1
    1
    % ruby fact.rb 5
    120

Does it work with an argument of 40? It would make your calculator
overflow...

    % ruby fact.rb 40
    815915283247897734345611269596115894272000000000

It does work.  Indeed, ruby can deal with any integer which is
allowed by your machine's memory. So 400! can be calculated:

    % ruby fact.rb 400
    64034522846623895262347970319503005850702583026002959458684
    44594280239716918683143627847864746326467629435057503585681
    08482981628835174352289619886468029979373416541508381624264
    61942352307046244325015114448670890662773914918117331955996
    44070954967134529047702032243491121079759328079510154537266
    72516278778900093497637657103263503315339653498683868313393
    52024373788157786791506311858702618270169819740062983025308
    59129834616227230455833952075961150530223608681043329725519
    48526744322324386699484224042325998055516106359423769613992
    31917134063858996537970147827206606320217379472010321356624
    61380907794230459736069956759583609615871512991382228657857
    95493616176544804532220078258184008484364155912294542753848
    03558374518022675900061399560145595206127211192918105032491
    00800000000000000000000000000000000000000000000000000000000
    0000000000000000000000000000000000000000000

We cannot check the correctness at a glance, but it must be
right. :-)

The input/evaluation loop
-------------------------

When you invoke ruby with no arguments, it reads commands from
standard input and executes them after the end of input:
    % ruby
    puts "hello world"
    puts "good-bye world"
    ^D
    hello world
    good-bye world

The *^D* above means control-D, a conventional way to signal
end-of-input in a Unix context.  In DOS/Windows, try pressing *F6*
or *^Z* instead.
Ruby also comes with a program called `eval.rb` that allows you to
enter ruby code from the keyboard in an interactive loop, showing you
the results as you go.  It will be used extensively through the rest
of this guide.
If you have an ANSI-compliant terminal (this is almost certainly true
if you are running some flavor of UNIX; under old versions of DOS you
need to have installed `ANSI.SYS` or `ANSI.COM`; Windows XP,
unfortunately, has now made this nearly impossible), you should use
this [enhanced `eval.rb`](eval.txt) that adds visual
indenting assistance, warning reports, and color highlighting.
Otherwise, look in the `sample` subdirectory of the ruby
distribution for the non-ANSI version that works on any terminal.
Here is a short `eval.rb` session:

    % ruby eval.rb
    ruby> puts "Hello, world."
    Hello, world.
       nil
    ruby> exit

`hello world` is produced by `puts`.  The next
line, in this case `nil`, reports on whatever was last
evaluated; ruby does not distinguish between *statements* and
*expressions*, so evaluating a piece of code basically means
the same thing as executing it.  Here, `nil` indicates
that `puts` does not return a meaningful value.  Note
that we can leave this interpreter loop by saying `exit`,
although `^D` still works too.
Throughout this guide, "`ruby>`" denotes the input prompt
for our useful little `eval.rb` program.

<!-- Previous page -->
<a href="getstarted.html" class="btn btn-default">&#9668; Getting Started</a>
<!-- Next page -->
<a href="strings.html" class="btn btn-default">Strings &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

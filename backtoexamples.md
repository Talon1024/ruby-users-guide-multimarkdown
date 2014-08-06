Title: Back to the Simple Examples - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="arrays.html" class="btn btn-default">&#9668; Arrays</a>
<!-- Next page -->
<a href="control.html" class="btn btn-default">Control Structures &#9658;</a>

Back to the Simple Examples
===========================

Now let's take apart the code of some of our previous example
programs.

The following appeared in the [simple examples](examples.html) chapter.

    def fact(n)
      if n == 0
        1
      else
        n * fact(n-1)
      end
    end
    puts fact(ARGV[0].to_i)

Because this is the first explanation, we examine each line
individually.

Factorials
----------

    def fact(n)

In the first line, `def` is a statement to define a function
(or, more precisely, a *method*; we'll talk more about what a
method is in a [later chapter](methods.html)). Here, it
specifies that the function `fact` takes a single argument,
referred to as `n`.

    if n == 0

The `if` is for checking a condition. When the condition
holds, the next bit of code is evaluated; otherwise whatever follows the
`else` is evaluated.

    1

The value of `if` is 1 if the condition holds.

    else

If the condition does not hold, the code from here to `end` is
evaluated.

    n * fact(n-1)

If the condition is not satisfied, the value of `if` is
the result of `n` times `fact(n-1)`.

    end

The first `end` closes the `if` statement.

    end

The second `end` closes the `def` statement.

    puts fact(ARGV[0].to_i)

This invokes our `fact()` function using a value specified
from the command line, and prints the result.

`ARGV` is an array which contains command line arguments.
The members of `ARGV` are strings, so we must convert this into a
integral number by `to_i`.  Ruby does not convert strings into
integers automatically like perl does.

What would happen if we fed this program a negative number? Do you see
the problem? Can you fix it?

Strings
-------

Next we examine the puzzle program from the chapter
on [strings](strings.html).  As this is somewhat longer,
we number the lines for reference.

    01 words = ['foobar', 'baz', 'quux']
    02 secret = words[rand(3)]
    03
    04 print "guess? "
    05 while guess = STDIN.gets
    06   guess.chop!
    07   if guess == secret
    08     puts "You win!"
    09     break
    10   else
    11     puts "Sorry, you lose."
    12   end
    13   print "guess? "
    14 end
    15 puts "the word is ", secret, "."

In this program, a new control structure, `while`, is used.  The
code between `while` and its corresponding `end` will execute
repeatedly as long as some specified condition remains true.  In this
case, `guess=STDIN.gets` is both an active statement (collecting a
line of user input and storing it as `guess`), and a condition (if
there is no input, `guess`, which repesents the value of the whole
`guess=STDIN.gets` expression, has a nil value, causing
`while` to stop looping).

`STDIN` is the standard input object.  Usually,
`guess=gets` does the same thing as `guess=STDIN.gets`.

`rand(3)` in line 2 returns a random number
in the range 0 to 2.  This random number is used to extract one
of the members of the array `words`.

In line 5 we read one line from standard input by the method
`STDIN.gets`.  If *EOF* (end of file) occurs
while getting the line, `gets` returns
`nil`.  So the code associated with this
`while` will repeat until it sees *^D* (try
*^Z* or *F6* under DOS/Windows), signifying the end of input.

`guess.chop!` in line 6 deletes the last character from
`guess`; in this case it will always be a *newline* character,
`gets` includes that character to reflect the user's *Return*
keystroke, but we're not interested in it.

In line 15 we print the secret word.  We have written this as a
`puts` (`put s`tring) statement with two arguments, which
are printed one after the other; but it would have been equally
effective to do it with a single argument, writing `secret` as
`#{secret}` to make it clear that it is a variable to be
evaluated, not a literal word to be printed:

    puts "the word is #{secret}."

Many programmers feel this is a cleaner way to express output; it builds a
single string and presents it as a single argument to `puts`.

Also, we are by now used to the idea of using `puts` for standard
script output, but this script uses `print` instead, in lines 4
and 13.  They are not quite the same thing.  `print` outputs
exactly what it is given; `puts` also ensures that the output line
ends.  Using `print` in lines 4 and 13 leaves the cursor next to
what was just printed, rather than moving it to the beginning of the
next line.  This creates a recognizable prompt for user input.  In
general, the four output calls below are equivalent:

    # newline is implicitly added by puts if there isn't one already:
    puts  "Darwin's wife, Esmerelda, died in a fit of penguins."

    # newline must be explicitly given to the print command:
    print "Darwin's wife, Esmerelda, died in a fit of penguins.\n"

    # you can concatenate output with +:
    print 'Darwin's wife, Esmerelda, died in a fit of penguins.'+"\n"

    # or concatenate by supplying more than one string:
    print 'Darwin's wife, Esmerelda, died in a fit of penguins.', "\n"

One possible gotcha: sometimes a text window is programmed to buffer
output for the sake of speed, collecting individual characters and
displaying them only when it is given a newline character.  So if the
guessing game script misbehaves by not showing the prompt lines until
after the user supplies a guess, buffering is the likely culprit.  To
make sure this doesn't happen, you can `flush` the output as soon
as you have printed the prompt.  It tells the standard output device
(an object named `STDOUT`), "don't wait; display what you have in
your buffer right now."

    04 print "guess? "; STDOUT.flush
      ...
    13 print "guess? "; STDOUT.flush

And in fact, we were more careful with this in the next script.

Regular expressions
-------------------

Finally we examine this program from the chapter on [regular
expressions](regexp.html).

    01 st = "\033[7m"
    02 en = "\033[m"
    03
    04 puts "Enter an empty string at any time to exit."
    05
    06 while true
    07   print "str> "; STDOUT.flush; str=gets.chop
    08   break if str.empty?
    09   print "pat> "; STDOUT.flush; pat=gets.chop
    10   break if pat.empty?
    11   re = Regexp.new(pat)
    12   puts str.gsub(re, "#{st}\\&#{en}")
    13 end

In line 6, the condition for `while` is hardwired to `true`,
so it forms what looks like an infinite loop.  However we put
`break` statements in the 8th and 10th lines to escape the loop.
These two `break`s are also an example of "`if` modifiers."
An `if` modifier executes the statement on its left hand side if
and only if the specified condition is satisfied.  This construction
is unusual in that it operates logically from right to left, but it is
provided because for many people it mimics a similar pattern in
natural speech. It also has the advantage of brevity, as it needs no
`end` statement to tell the interpreter how much of the following
code is supposed to be conditional.  An `if` modifier is
conventionally used in situations where a statement and condition
are short enough to fit comfortably together on one script line.

Note the difference in the user interface compared to the
string-guessing script.  This one lets the user quit by hitting the
*Return* key on an empty line.  We are testing for emptiness of
the input string, not for its nonexistence.

In lines 7 and 9 we have a "non-destructive" chop; again, we're
getting rid of the unwanted newline character we always get from
`gets`.  Add the exclamation point, and we have a "destructive"
chop.  What's the difference?  In ruby, we conventionally attach
'`!`' or '`?`' to the end of certain method names.  The
exclamation point (`!`, sometimes pronounced aloud as "bang!")
indicates something potentially destructive, that is to say, something
that can change the value of what it touches.  `chop!` affects a
string directly, but `chop` gives you a chopped copy without
damaging the original.  Here is an illustration of the difference.

    ruby> s1 = "forth"
      "forth"
    ruby> s1.chop!       # This changes s1.
      "fort"
    ruby> s2 = s1.chop   # This puts a changed copy in s2,
      "for"
    ruby> s1             # ... without disturbing s1.
      "fort"

You'll also sometimes see `chomp` and `chomp!` used.  These
are more selective: the end of a string gets bit off *only if it
happens to be a newline.* So for example, `"XYZ".chomp!` does
nothing.  If you need a trick to remember the difference, think of a
person or animal tasting something before deciding to take a bite, as
opposed to an axe chopping indiscriminately.

The other method naming convention appears in lines 8 and 10.  A
question mark (`?`, sometimes pronounced aloud as "huh?")
indicates a "predicate" method, one that can return either `true`
or `false`.

Line 11 creates a regular expression object out of the string supplied
by the user.  The real work is finally done in line 12, which uses
`gsub` to `g`lobally `sub`stitute each match of that
expression with itself, but surrounded by ansi markups; also the same
line outputs the results.

We could have broken up line 12 into separate lines like this:

    highlighted = str.gsub(re,"#{st}\\&#{en}")
    puts highlighted

or in "destructive" style:

    str.gsub!(re,"#{st}\\&#{en}")
    puts str

Look again at the last part of line 12.  `st` and `en` were
defined in lines 1-2 as the ANSI sequences that make text
color-inverted and normal, respectively.  In line 12 they are enclosed
in `#{}` to ensure that they are actually interpreted as such (and
we do not see the variable *names* printed instead).  Between
these we see `\\&`.  This is a little tricky.  Since the
replacement string is in double quotes, the pair of backslashes will
be interpreted as a single backslash; what `gsub` actually sees
will be `\&`, and that happens to be a special code that refers to
whatever matched the pattern in the first place.  So the new string,
when displayed, looks just like the old one, except that the parts
that matched the given pattern are highlighted in inverse video.

<!-- Previous page -->
<a href="arrays.html" class="btn btn-default">&#9668; Arrays</a>
<!-- Next page -->
<a href="control.html" class="btn btn-default">Control Structures &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

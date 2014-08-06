Title: Regular Expressions - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="strings.html" class="btn btn-default">&#9668; Strings</a>
<!-- Next page -->
<a href="arrays.html" class="btn btn-default">Arrays &#9658;</a>

Regular Expressions
===================

Let's put together a more interesting program.  This time we
test whether a string fits a description, encoded into a concise
*pattern*.

There are some characters and character combinations that have
special meaning in these patterns, including:

| Character Combination | Meaning |
|---------|------------------------------------------------------------------------------|
| `[]`    | Range specification (e.g., `[a-z]` means a letter in the range `a` to `z`)   |
| `\w`    | word character; same as `[0-9A-Za-z_]`                                       |
| `\W`    | non-word character                                                           |
| `\s`    | space character; same as `[ \t\n\r\f]`                                       |
| `\S`    | non-space character                                                          |
| `\d`    | digit character; same as `[0-9]`                                             |
| `\D`    | non-digit character                                                          |
| `\b`    | backspace (0x08) (only if in a range specification)                          |
| `\b`    | word boundary (if not in a range specification)                              |
| `\B`    | non-word boundary                                                            |
| `*`     | zero or more repetitions of the preceding                                    |
| `+`     | one or more repetitions of the preceding                                     |
| `{m,n}` | at least `m` and at most `n` repetitions of the preceding                    |
| `?`     | at most one repetition of the preceding; same as `{0,1}`                     |
| `|`     | either preceding or next expression may match                                |
| `()`    | grouping                                                                     |

The common term for patterns that use this strange vocabulary is
*regular expressions*.  In ruby, as in Perl, they are generally
surrounded by forward slashes rather than double quotes.  If you have
never worked with regular expressions before, they probably look
anything but *regular*, but you would be wise to spend some time
getting familiar with them.  They have an efficient expressive power
that will save you headaches (and many lines of code) whenever you
need to do pattern matching, searching, or other manipulations on text
strings.

For example, suppose we want to test whether a string fits this
description: "Starts with lower case f, which is immediately followed
by exactly one upper case letter, and optionally more junk after that,
as long as there are no more lower case characters."  If you're an
experienced C programmer, you've probably already written about a
dozen lines of code in your head, right?  Admit it; you can hardly
help yourself.  But in ruby you need only request that your string be
tested against the regular expression `/^f[A-Z][^a-z]*$/`.

How about "Contains a hexadecimal number enclosed in angle
brackets"?  No problem.

    ruby> def chab(s)   # "contains hex in angle brackets"
        |    (s =~ /<0(x|X)(\d|[a-f]|[A-F])+>/) != nil
        | end
      nil
    ruby> chab "Not this one."
      false
    ruby> chab "Maybe this? {0x35}"    # wrong kind of brackets
      false
    ruby> chab "Or this? <0x38z7e>"    # bogus hex digit
      false
    ruby> chab "Okay, this: <0xfc0004>."
      true

Though regular expressions can be puzzling at first glance, you
will quickly gain satisfaction in being able to express yourself so
economically.

Here is a little program to help you experiment with regular
expressions.  Store it as `regx.rb` and run it by
typing `"ruby regx.rb"` at the command line.

    # Requires an ANSI terminal!

    st = "\033[7m"
    en = "\033[m"

    puts "Enter an empty string at any time to exit."

    while true
      print "str> "; STDOUT.flush; str = gets.chop
      break if str.empty?
      print "pat> "; STDOUT.flush; pat = gets.chop
      break if pat.empty?
      re = Regexp.new(pat)
      puts str.gsub(re,"#{st}\\&#{en}")
    end

The program requires input twice, once for a string and once for a
regular expression.  The string is tested against the regular
expression, then displayed with all the matching parts highlighted in
reverse video.  Don't mind details now; an analysis of this code
will come soon.

    str> foobar
    pat> ^fo+
    foobar
    ~~~

*What you see above as red text will appear as reverse video in the
program output.  The "~~~" lines are for the benefit of those using
text-based browsers.*

    Let's try several more inputs.
    str> abc012dbcd555
    pat> \d
    abc012dbcd555
       ~~~    ~~~

If that surprised you, refer to the table at the top of this page:
`\d` has no relationship to the character `d`, but
rather matches a single digit.

What if there is more than one way to correctly match the pattern?

    str> foozboozer
    pat> f.*z
    foozboozer
    ~~~~~~~~

`foozbooz` is matched instead of just `fooz`, since a
regular expression matches the longest possible substring.

Here is a pattern to isolate a colon-delimited time field.

    str> Wed Feb  7 08:58:04 JST 1996
    pat> [0-9]+:[0-9]+(:[0-9]+)?
    Wed Feb  7 08:58:04 JST 1996
               ~~~~~~~~

"`=~`" is a matching operator with respect to regular
expressions; it returns the position in a string where a match was
found, or `nil` if the pattern did not match.

    ruby> "abcdef" =~ /d/
       3
    ruby> "aaaaaa" =~ /d/
       nil

<!-- Previous page -->
<a href="strings.html" class="btn btn-default">&#9668; Strings</a>
<!-- Next page -->
<a href="arrays.html" class="btn btn-default">Arrays &#9658;</a>

Copyright (c) 2005-2008 Mark Slagell, (c) 2014 Kevin Caccamo
Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
A copy of the license is included in the section entitled "GNU Free Documentation License."

</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="kbdnav.js"></script>

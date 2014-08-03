Title: Strings - Ruby User's Guide
Keywords: Ruby, Programming, Tutorial, Programming language, Programming tutorial
Copyright: 2005-2008 Mark Slagell
           Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
           A copy of the license is included in the section entitled "GNU Free Documentation License."
Viewport: width=device-width, initial-scale=1
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap.min.css
CSS: lib/bootstrap-3.2.0-dist/css/bootstrap-theme.min.css

<div class="container">
<!-- Previous page -->
<a href="examples.html" class="btn btn-default">&#9668; Simple Examples</a>
<!-- Next page -->
<a href="regexp.html" class="btn btn-default">Regular Expressions &#9658;</a>

Strings
=======

Ruby deals with strings as well as numerical data.  A string
may be double-quoted ("...") or single-quoted ('...').

    ruby> "abc"
       "abc"
    ruby> 'abc'
       "abc"

Double- and single-quoting have different effects in some
cases.  A double-quoted string allows character escapes by a
leading backslash, and the evaluation of embedded expressions using
`#{}`.  A single-quoted string does not do this
interpreting; what you see is what you get.  Examples:

    ruby> puts "a\nb\nc"
    a
    b
    c
       nil
    ruby> puts 'a\nb\n'
    a\nb\nc
       nil
    ruby> "\n"
       "\n"
    ruby> '\n'
       "\\n"
    ruby> "\001"
       "\001"
    ruby> '\001'
       "\\001"
    ruby> "abcd #{5*3} efg"
       "abcd 15 efg"
    ruby> var = " abc "
       " abc "
    ruby> "1234#{var}5678"
       "1234 abc 5678"

Ruby's string handling is smarter and more intuitive than C's.  For
instance, you can concatenate strings with `+`, and repeat a
string many times with `*`:

    ruby> "foo" + "bar"
       "foobar"
    ruby> "foo" * 2
       "foofoo"

Concatenating strings is much more awkward in C because of the need
for explicit memory management:

    char *s = malloc(strlen(s1)+strlen(s2)+1);
    strcpy(s, s1);
    strcat(s, s2);
    /* ... */
    free(s);

But using ruby, we do not have to consider the space occupied by a
string. We are free from all memory management.

Here are some things you can do with strings.

Concatenation:

    ruby> word = "fo" + "o"
       "foo"

Repetition:

    ruby> word = word * 2
       "foofoo"

Extracting characters (note that characters are integers in ruby):

    ruby> word[0]
       102            # 102 is ASCII code of `f'
    ruby> word[-1]
       111            # 111 is ASCII code of `o'

(Negative indices mean offsets from the end of a string, rather
than the beginning.)

Extracting substrings:

    ruby> herb = "parsley"
       "parsley"
    ruby> herb[0,1]
       "p"
    ruby> herb[-2,2]
       "ey"
    ruby> herb[0..3]
       "pars"
    ruby> herb[-5..-2]
       "rsle"

Testing for equality:

    ruby> "foo" == "foo"
       true
    ruby> "foo" == "bar"
       false

Now, let's put some of these features to use.  This puzzle is
"guess the word," but perhaps the word "puzzle" is too dignified
for what is to follow `;-)`

    # save this as guess.rb
    words = ['foobar', 'baz', 'quux']
    secret = words[rand(3)]

    print "guess? "
    while guess = STDIN.gets
      guess.chop!
      if guess == secret
        puts "You win!"
        break
      else
        puts "Sorry, you lose."
      end
      print "guess? "
    end
    puts "The word was ", secret, "."

For now, don't worry too much about the details of this code.
Here is what a run of the puzzle program looks like.

    % ruby guess.rb
    guess? foobar
    Sorry, you lose.
    guess? quux
    Sorry, you lose.
    guess? ^D
    The word was baz.

(I should have done a bit better, considering the 1/3 probability
of success.)

<!-- Previous page -->
<a href="examples.html" class="btn btn-default">&#9668; Simple Examples</a>
<!-- Next page -->
<a href="regexp.html" class="btn btn-default">Regular Expressions &#9658;</a>
</div>
<script src="lib/jquery-1.11.1.min.js"></script>
<script src="lib/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>

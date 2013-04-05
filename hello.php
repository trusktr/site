<!DOCTYPE html>
<html>
  <head>
    <title>Joe Pea - CSc at CSUS</title>
    <script src=" http://code.jquery.com/jquery-1.9.1.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Josefin+Sans:400,700' rel='stylesheet' type='text/css' />
    <meta http-equiv="Expires" content="Tue, 01 Jan 1995 12:12:12 GMT" />
    <meta http-equiv="Pragma" content="no-cache" />
    
    <link href='x.css' rel='stylesheet' type='text/css' />
    
  </head>
  <body>
    <div id="next">
        <span><a href="next">>></a></span>
    </div>
    <div id="page">
        <div id="hello" class="lighterText rotater introOnly">
            <span>hello.</span>
        </div>
        <div id="nameIs" class="lighterText rotater introOnly">
            <span>my name is</span>
        </div>
        <div id="joePea" class="lighterText rotater">
            <span id="name">Joe Pea.</span>
        </div>
        <div id="email" class="lighterText rotater">
            <span>josephpea@csus.edu</span>
        </div>
        <div id="skating" class="lighterText rotater">
            <span>i </span><span id="heart">♥</span><span> skateboarding.</span>
        </div>
        <div id="csc" class="lighterText rotater introOnly">
            <span>and computer science...</span><span id="music"> and music.</span>
        </div>
        <div id="goal" class="lighterText rotater introOnly">
            <span>goal: make the world even better.</span>
        </div>
        <div id="more" class="lighterText">
            <p>
                <span>
                    My favorite language is <a target="_blank" href="http://wikipedia.org/wiki/JavaScript">JavaScript</a>. It's extremely fun for writing <a target="_blank" href="http://mrdoob.com" target="_blank">animations</a>, but it's also
                    powerful for manipulating data (including binary data). I use JavaScript on the server side in the
                    form of <a target="_blank" href="http://nodejs.org">Node.js</a>. With Node.js you can write servers using nothing but JavaScript and all file operations
                    are asynchronous, event driven, and can even be multithreaded! I especially can't wait to find free time between homework
                    assignments to code using Node.js for the serverside
                    backend of my mobile app. The result of my efforts will be the existence of a new centralized machine
                    that can mirror the changes made on one device's user interface to other devices world wide!
                    Want to learn some JavaScript? Visit <a target="_blank" href="http://codeacademy.com">codeacademy.com</a> and learn with their interactive tutorials!
                </span>
            </p>
            <p>
                <span>
                    I'm also familiar with <a target="_blank" href="http://wikipedia.org/wiki/C%2B%2B">C++</a>, <a target="_blank" href="http://wikipedia.org/wiki/Java_(programming_language)">Java</a>, and <a target="_blank" href="http://php.net">PHP</a> and
                    have some experience with <a target="_blank" href="http://perl.org">Perl</a> and <a target="_blank" href="http://python.org">Python</a>. I'm looking forward to learning how to write network 
                    apps using python in CSC 138 this semester because I will understand the basics of inter-machine
                    communcation. My operating system of choice has been <a target="_blank" href="http://wikipedia.org/wiki/Linux">Linux</a> 
                    for the past 3 years (<a target="_blank" href="http://archlinux.org">Arch Linux</a> to be precise), but even so, I'm only moderately
                    familiar with the command line and <a target="_blank" href="http://gnu.org/software/bash/manual/bashref.html">Bash</a> <a target="_blank" href="http://wikipedia.org/wiki/Shell_script">shell scripting</a> compared to the gurus out there. 
                    I learn <a target="_blank" href="http://wiki.archlinux.org/index.php/Bash">new tricks</a> often
                    and write an occasional script to make things faster when the opportunity arises.
                </span>
            </p>
            <p>
                <span>
                    I want to learn how to write animations with C++. I'm currently learning the <a target="_blank" href="http://qt-project.org">Qt 
                    framework</a>, which is a stepping stone towards learning how to program
                    interactive applications in C++. Qt has a library of C++ functions for writing animations,
                    and studying them is a good source for insight. Qt also has a scripted markup language called QML
                    (<a target="_blank" href="http://qt-project.org/doc/qt-4.8/qdeclarativeintroduction.html">the Qt Markup Language</a>).
                    QML is interesting because it's a language for
                    designing user interfaces and animations in a fashion similar to HTML,
                    but with the benefit of full (100%) hardware GPU acceleration (rendered by the computer's video card).
                    QML elements and their data (similar to HTML elements)
                    are manipulated with JavaScript, so if you know techniques for animating HTML and manipulating data
                     using JavaScript,
                    you can also apply similar techniques for your QML interfaces!
                </span>
            </p>
            <p>
                <h2><span>PL Assignment 1 Definitions:</span></h2>
                <dl id="pl1-defs">
                    <dt><dfn><h3>syntax</h3></h3></dfn></dt>
                        <dd>Those aspects of a programming language that can be modeled by a context-free grammar.<br />
                        <span class="source">Source: Formal Languages and Automata, 5th Edition, by Peter Linz, Page 147.</span>
                        </dd>
                    <dt><dfn><h3>semantics</h3></dfn></dt>
                        <dd>Semantics are the rules of a language that cannot be described by a context-free grammar.
                            For example, the BNF for the C language allows things like <span class="inlinecode">char x,y,z; z=4.3</span>
                            but a compiler would not let that pass.<br />
                        <span class="source">Source: Formal Languages and Automata, 5th Edition, by Peter Linz, Page 147.</span>
                        </dd>
                    <dt><dfn><h3>lexical scanning</h3></dfn></dt>
                        <dd>A lexical scanner allows one to use multi-character terminal symbols in a parser. Without a
                        lexical scanner, only single character terminals are effective in a parser. 
                        Lexical scanning is the process of scanning the stream of input characters and 
                        separating it into strings called tokens.<br />
                        <span class="source">Source: <a target="_blank" href="http://pp4s.co.uk/main/tu-trans-comp-jc-07.html">pp4s.co.uk/main/tu-trans-comp-jc-07.html</a></span>
                        </dd>
                    <dt><dfn><h3>parsing</h3></dfn></dt>
                        <dd> The term parsing means finding a sequence of productions (belonging to a grammer G)
                        by which a string <span class="inlinecode"><i>ω</i> ϵ <i>L(G)</i></span> is derived.<br />
                        <span class="source">Source: Formal Languages and Automata, 5th Edition, by Peter Linz, Page 136.</span>
                        </dd>
                    <dt><dfn><h3>parser</h3></dfn></dt>
                        <dd>A parser is a program that can read a human-like, english-like programming language and 
                        convert it into a language that the computer can understand and execute.<br />
                        <span class="source">Source: <a target="_blank" href="http://goldparser.org/articles/parser.htm">goldparser.org/articles/parser.htm</a></span>
                        </dd>
                    <dt><dfn><h3>parser generator</h3></dfn></dt>
                        <dd>A generator reads information from a source grammar and then generates the token tables 
                        that a parser can use to parse a string.<br />
                        <span class="source">Source: <a target="_blank" href="http://goldparser.org/articles/parser.htm">goldparser.org/articles/parser.htm</a></span>
                        </dd>
                </dl>
            </p>
        </div>
    </div>
    
    
    <script src="x.js"></script>
  </body>
</html>

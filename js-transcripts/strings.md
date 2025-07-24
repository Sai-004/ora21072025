C:\Users\mindf\Desktop\current-training\oracle-training\website-sim>
C:\Users\mindf\Desktop\current-training\oracle-training\website-sim>node
Welcome to Node.js v20.14.0.
Type ".help" for more information.
> var x = 5
undefined
> typeof(x)
'number'
> var y = "computer"
undefined
> typeof(y)
'string'
> var s = new String("computer")\
var s = new String("computer")\
                              ^

Uncaught SyntaxError: Invalid or unexpected token
> var s = new String("computer")
undefined
> s
[String: 'computer']
> y
'computer'
> s == y
true
> s === y
false
> s[0]
'c'
> s[5]
't'
> s[2] = "e"
'e'
> s
[String: 'computer']
> var t = "mary had a little lamb'
var t = "mary had a little lamb'
        ^^^^^^^^^^^^^^^^^^^^^^^^

Uncaught SyntaxError: Invalid or unexpected token
> var t = "mary had a little lamb"
undefined
> t.length
22
> m.indexOf("little")
Uncaught ReferenceError: m is not defined
> t.indexOf("little")
11
> t.lastIndexOf("little")
11
> t.search("little")
11
> t.search("good")
-1
> t.substring(11, 16)
'littl'
> t.substring(11, 17)
'little'
> t.substr(11, 10)
'little lam'
> t.replace('lsmb', 'kitten')
'mary had a little lamb'
> t.replace('lamb', 'kitten')
'mary had a little kitten'
> t.toUpperCase()
'MARY HAD A LITTLE LAMB'
> t.toLowerCase()
'mary had a little lamb'
> var x = "    19  "
undefined
> x.trim()
'19'
> t.split(' ')
[ 'mary', 'had', 'a', 'little', 'lamb' ]
> var k = ['sky', 'is', 'blue')
var k = ['sky', 'is', 'blue')
                            ^

Uncaught SyntaxError: Unexpected token ')'
> var k = ['sky', 'is', 'blue']
undefined
> k.join('-')
'sky-is-blue'
>
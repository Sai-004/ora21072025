C:\Users\mindf\Desktop\current-training\oracle-training\website-sim>node
Welcome to Node.js v20.14.0.
Type ".help" for more information.
> var L = ['red', 'green', 'blue']
undefined
> typeof(L)
'object'
> // ------------------ Adding Elements
undefined
> L
[ 'red', 'green', 'blue' ]
> L.push("golden")
4
> L
[ 'red', 'green', 'blue', 'golden' ]
> L.shift("brown")
'red'
> L
[ 'green', 'blue', 'golden' ]
> L.unshift("red")
4
> L
[ 'red', 'green', 'blue', 'golden' ]
> L.pop()
'golden'
> L.splice(1, 0, "yellow")
[]
> L
[ 'red', 'yellow', 'green', 'blue' ]
> L.splice(1, 2, "golden")
[ 'yellow', 'green' ]
> L
[ 'red', 'golden', 'blue' ]
> // -------------------- Finding the elements
undefined
> L
[ 'red', 'golden', 'blue' ]
> L.indexOf("golden")
1
> L.findIndex(e => e == "golden")
1
> L.filter(e => e == "golden")
[ 'golden' ]
> l.find("golden")
Uncaught ReferenceError: l is not defined
> L.find("golden")
Uncaught TypeError: golden is not a function
    at Array.find (<anonymous>)
> L.find(e => e == "golden")
'golden'
> L.includes("golden")
true
> // ------------------------ re-arranging -> sorting and reversing
undefined
>
> L.sort()
[ 'blue', 'golden', 'red' ]
> L.reverse()
[ 'red', 'golden', 'blue' ]
> L = [10, 3, 4, 1, 67, 100]
[ 10, 3, 4, 1, 67, 100 ]
> L.sort()
[ 1, 10, 100, 3, 4, 67 ]
> L.sort(function(a, b){ return (a - b) })
[ 1, 3, 4, 10, 67, 100 ]
> L.sort(function(a, b){ return (b - a) })
[ 100, 67, 10, 4, 3, 1 ]
>
> // ------------------------ iterate on the array
undefined
>
> L
[ 100, 67, 10, 4, 3, 1 ]
> for(item of L) { console.log(item) }
100
67
10
4
3
1
undefined
>

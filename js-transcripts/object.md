['Anil', '34', 'Oracle', 'DB Architect']
0 -> name
1 -> age
2 -> Organization
3 -> Role

SW v1.0


5 Months later ->
['Anil', '12-07-1988', 'Hyderabad', 'Oracle', 'DB Architect', 'Salary']


['name':'Anil', 'age':'34', 'company':'Oracle', 'role:'DB Architect']

SW v1.0
['name':'Anil', 'dob':'12-07-1988', 'age':'34', 'company':'Oracle', 'role:'DB Architect']

Key Value Pairs in Javascript:

C:\Users\mindf\Desktop\current-training\oracle-training\website-sim>node
Welcome to Node.js v20.14.0.
Type ".help" for more information.
> var person = { 'name':'Anil', 'age': 50}
undefined
> person
{ name: 'Anil', age: 50 }
> person.name
'Anil'
> person.name = 'Sunil'
'Sunil'
> person
{ name: 'Sunil', age: 50 }
> person.company = 'Oracle'
'Oracle'
> person
{ name: 'Sunil', age: 50, company: 'Oracle' }
> Object.keys(person)
[ 'name', 'age', 'company' ]
> Object.values(person)
[ 'Sunil', 50, 'Oracle' ]
> delete person.age
true
> person
{ name: 'Sunil', company: 'Oracle' }
> delete person
false
> person
{ name: 'Sunil', company: 'Oracle' }
>
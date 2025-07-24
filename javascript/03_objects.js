rec = ["Anil", 35, "Oracle", "Admin", "15-09-1988", 1400000];
empname -> 0
empage -> 1
empcompany -> 2

rec[4] 

rec = {"name":"Anil", "age":35, "company":"Oracle", "role":"Admin", "doc":"15-09-1988", "salary":1400000};

rec["salary"]

> let rec = {"name":"Anil", "age":35, "company":"Oracle", "role":"Admin", "doc":"15-09-1988", "salary":1400000};
undefined
> typeof rec
'object'
>
>
>
> rec
{
  name: 'Anil',
  age: 35,
  company: 'Oracle',
  role: 'Admin',
  doc: '15-09-1988',
  salary: 1400000
}
> rec['name']
'Anil'
> rec['addr'] = 'Hyderabad'
'Hyderabad'
> rec
{
  name: 'Anil',
  age: 35,
  company: 'Oracle',
  role: 'Admin',
  doc: '15-09-1988',
  salary: 1400000,
  addr: 'Hyderabad'
}
> delete rec.doc
true
> rec
{
  name: 'Anil',
  age: 35,
  company: 'Oracle',
  role: 'Admin',
  salary: 1400000,
  addr: 'Hyderabad'
}
> rec.role = 'test engineer'
'test engineer'
> rec
{
  name: 'Anil',
  age: 35,
  company: 'Oracle',
  role: 'test engineer',
  salary: 1400000,
  addr: 'Hyderabad'
}
> Object.keys(rec)
[ 'name', 'age', 'company', 'role', 'salary', 'addr' ]
> Object.values(rec)
[ 'Anil', 35, 'Oracle', 'test engineer', 1400000, 'Hyderabad' ]
>
> function person(name, age, gender){
... this.name = name;
... this.age = age;
... this.gender = gender;
... };
undefined
>
> person
[Function: person]
> var p1 = new person('Anil', 35, 'male');
undefined
> var p2 = new person('smitha', 30, 'female');
undefined
> p1
person { name: 'Anil', age: 35, gender: 'male' }
> p2
person { name: 'smitha', age: 30, gender: 'female' }
>
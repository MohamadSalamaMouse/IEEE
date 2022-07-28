//////////////////////////////////////////////////first assign
//////////////التكليف 2
//document.write('<h1 style="color:blue;font-size:80px; font-weight:bold;">Elzero</h2>')
/////////التكليف 3
//%c darective %c
//console.log("%cElzero %cWeb %cSchool",'color:red;font-size:40px','color:green;font-size:40px','color:blue;font-size:40px;font-weight:bold;');
///////////////التكليف 4
// console.group('Group1');
// console.log('message one');
// console.log('message two');
// console.group('child Group');
// console.log('message one');
// console.log('message two');
// console.group('grand child Group');
// console.log('message one');
// console.log('message two');
// console.groupEnd('grand child Group');
// console.groupEnd('child Group')
// console.groupEnd('Group1');
// console.group('Group2');
// console.log('message one');
// console.log('message two');
// console.groupEnd('Group2');
/////////////////////التكليف الخامس
//console.table(['ELZERO','AHMED','SAMEH','GAMAL','AYA']);
//////////////////////////////////////////////////////////////////////////////second assign
// console.log(100_00);
// console.log(1e4);
//javescript run with double presicion;
//tostring()
//number()
//tofixed()
//parseint()
//parsefloat()
//isinterger()
//isNaN()
/*///////////////////math object
round()
ceil()
floor()
min()
max()
pow()
random()
trunc()
*/
////////////////////string method
/*
access with index
access with charAt()
length
trim()
touppercase()
tolowercase()
chain methods
indexof(value,start)
lastindexof(value,start)
slice(start,end)
repeat(times)
split(separator,limit)
substring(start,end)
*/
//////////////////Array
/*
array method
push()
pop()
sort()
reverse()
unshift()
shift()
length>>attribute
includes()>>search
indexof()//search
lastindexof()//search
splice()//add. delete
join
*/
/*example 
let arr=[1,2,3,4];
console.log(arr.length);
arr.unshift([1,2,4,5])//add start
console.log(arr);
arr.shift()//remove from start
console.log(arr);
arr.push('mohamed')//add end
console.log(arr);
arr.pop()//remove end
console.log(arr);
console.log(arr.sort());
console.log(arr.reverse());
let arr1=['mohamed','salama',1,3,5,6,'ahamed'];
*/
/* ////////////////////////////////////////////////////elzero array challenge
let zero=0;
let counter=3;
let my=['Ahmed','Mazero','Elham','Osama','Gamel','Ameer'];

//console.log(my.reverse().slice(--counter));

//console.log(my.reverse().slice(counter,--zero));
//console.log(my[1].slice(++counter));
*/
/////////////////////for loop
/*
for(let i=0;i<3;i++){
 let name=window.prompt(`enter ${i==0?'Fname':i==1?'Sname':'Lname'}`);
 document.write(`<h1>${name}</h1>`);

}
*/
/////////////////////////////////////////////products practice
/*
let products=['keyboard','mouse','pen','mointor','iphone'];
let colors=['red','green','blue'];
let count=5;
document.write(`<h1>show data</h1>`);
document.write(`<div>`);
for(let i=0;i<count;i++){
    document.write(`<h3>[${i+1}]${products[i]}</h3> `)
    for(let j=0;j<colors.length;j++){
        document.write(`<p>${colors[j]}</p>`);
    }

}
document.write(`</div>`);
*/
////////////////////////////////////////////////////for loop challenge
/*
let myAdmins =['ahmed','osama','sayed','stop','samera'];
let myEmployees=['amged','samah','ammer','omer','othman','amany','samia'];
document.write(`<div>we have x admin </div>`);
let x=window.prompt('enter x value');
x=Number(x);
let count=x;
document.write(`<div>we have ${count} admin </div>`);
document.write(`<hr>`);
for(let i=0;i<count;i++){
    document.write(`<div> The admin for team ${(i+1)} is ${myAdmins[i]}`);
    document.write(`<h3>team members :</h3>`);
    let num=1;
    for(let j=0;j<myEmployees.length;j++){
        if(myAdmins[i].slice(0,1)==myEmployees[j].slice(0,1)){ 
            document.write(`<p>- ${num} ${myEmployees[j]}`);
            num++;
        }
    }
    num=1;
    document.write(`<div>`);
    document.write(`<hr>`);


}
*/
//rest parms
/*
function sum(...numbers){
    let res=0;
    for(let i=0;i<numbers.length;i++){
        res+=numbers[i];
    }
    return res;
}
console.log(sum(10,20,30,40,50));
*/
/////////////////          random argumment function challenge
/*
function showDeteails(...info){
    let name,age ,status;
    for(let i=0;i<info.length;i++){
    if(typeof info[i]=='string')
    {
        name=info[i];
    }

    else if(typeof info[i]=='boolean')
    {
        status=info[i];
    }
    else if(typeof info[i]=='number')
    {
        age=info[i];
    }
    
    }
   document.write(`<div>`)
   if(status==true)
   document.write(`<h3>Hello ${name}, your age is ${age},you are Available for hire`);
   else
   document.write(`<h3>Hello ${name}, your age is ${age},you are not Available for hire`);
   document.write(`</div>`)
}


showDeteails('mohamed',21,false);

showDeteails('mohamed',21,true);

showDeteails('salama',55,false);

showDeteails('salama',55,true);
*/
//دالة من غير اسم
//setTimeout(function(){console.log('good')},2000)
/*
let x=10;
function s(){
    x=20
    console.log(x);
}

console.log(x);
s();
*/
/////////////////////////////////////////DOM
/*
document object model
dom selectors
getelementbyid
getelementbyclass
getelementby>>tag name
getelementby >>collection
getelementby css selectors
document.forms[].one.value
document.title
document.body
document.links

*/
//let x=document.getElementById('div_name');
//let x=document.getElementsByTagName('div')
//let x=document.getElementsByClassName('class_name');
//console.log(x[1]);
//
/*
let get_class=document.getElementsByClassName('class_name');
console.log(get_class[1])
let get_forms=document.forms;
console.log(get_forms[0])
console.log(get_forms[1].name2)
console.log(document.body)
console.log(document.links)
let q=document.querySelectorAll('.class_name')
console.log(q);
*/
//////////////////////////////////dom {get/set elements content and attributes}
/*
--innerhtml
--textcontent
--change attributes directly
change attributes with methods
--set attribute
--get attribute
*/
/*
let x=document.getElementsByClassName('class_name')
console.log(x[0].innerHTML)
console.log(x[0].textContent)
document.links[0].href='http//';
let y=document.querySelector('a')
console.log( y.getAttribute('href'));
y.setAttribute('href','http//google.com')

*/
////////////////check attributes
/*
---------elemnt.atrributes
---------element.hasattribute
---------element.hasattributes
---------element.removeatrribute
*/
/*
let myp=document.getElementsByTagName('p');
console.log(myp[0].attributes);
console.log(myp[0].hasAttribute('class'));
//myp[0].removeAttribute('class')
*/
/////////////////////create elements
/*
creat element
create comment
create textnode
create attribute
appendchild
*/
/*
let myelement=document.createElement('div');
let mycomment=document.createComment('this div');
let mytext=document.createTextNode('data :mohamed slama');
let attr=document.createAttribute('data-cudtom');
myelement.className='product';
myelement.setAttributeNode(attr);
myelement.appendChild(mycomment);
myelement.appendChild(mytext);
document.body.appendChild(myelement);
*/
/*

let mydiv=document.createElement('div');
let myparg=document.createElement('p');
let myheading=document.createElement('h1')
mydiv.className='product'
myheading.textContent='Name';
myparg.textContent='mailk';
*/
/////////////////////deal with childerns
/*
--children
--childnodes
--firstchild
--lastchild
--firstElementchild
--lastElementchild
*/















var Book1={
    name:"Satranc",
    status:"Sale",
    Preis:"15 CHF"
}
var Book2={
    name:"Amok Koşucusu",
    status:"Sold",
    Preis:"20 CHF"
}
var Book3={
    name:"Korku",
    status:"Sale",
    Preis:"25 CHF"
}
var Booklist =[];
Booklist.push(Book1);
Booklist.push(Book2);
Booklist.push(Book3);
console.log(Booklist);

function add(a,b,c){
  
  var addbook = document.getElementById("book").value;
  Booklist.push(addbook);
  document.getElementById("demo").innerHTML = Booklist;
  Booklist.sort();
}
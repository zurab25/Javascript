//string length

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

txt.length;

//findindg string in the string 
var str = "Please locate where 'locate' occurs!";

var pos = str.indexOf("locate");
alert(pos);

var pos1 = str.lastIndexOf("locate");
alert(pos1);


//search for a string in a string

var str = "Please locate where 'locate' occurs!";
var pos2 = str.search("locate");

//The slice() method 

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,14);


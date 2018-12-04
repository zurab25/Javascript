function MultiVariables(){
    var person = "Zurab Meskhidze", carName="BMW", price="200";

    document.getElementById("demos").innerHTML = carName;
}

function Arithmetics(){
    var x = 2+5+9;

    document.getElementById("aritmetics").innerHTML = x;
}


function toCelsius(f){
    return (5/9) * (f-32);

    document.getElementById("demo").innerHTML = toCelsius(77);
}

function MultiPly(p1,p2){
    return p1*p2;
}
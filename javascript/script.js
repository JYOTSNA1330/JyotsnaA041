function getData(){
    var a = parseInt(document.getElementById("n1").value, 10);
    var b = parseInt(document.getElementById("n2").value, 10);
    var opt = document.getElementById("operator").value;
    if (opt == "+") {
        sum(a,b);
    }else if(opt == "-"){
        diff(a,b);
    }else if(opt == "*"){
        product(a,b);
    }else if(opt == "/"){
        quotient(a,b);
    }
}
function sum(a,b) 
{   var result, display; 
    result = (a+b);
    display =  "<h4> The result is: " + result + "</h4>"; 
    document.getElementById("demo2").innerHTML = display; 
}

function diff(a,b) 
{   var result, display; 
    result =  (a-b); 
    display =  "<h4> The result is: " + result + "</h4>"; 
    document.getElementById("demo2").innerHTML = display; 
}

function product(a,b) 
{   var result,display; 
    result =  (a*b); 
    display =  "<h4> The result is: " + result + "</h4>"; 
    document.getElementById("demo2").innerHTML = display; 
}

function quotient(a,b) 
{   var result,display;
    result =  (a/b); 
    display =  "<h4> The result is: " + result + "</h4>"; 
    document.getElementById("demo2").innerHTML = display; 
}

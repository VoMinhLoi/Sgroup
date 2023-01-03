function LargestEven(){
    var number1 = document.getElementById("number1").value;
    let Array = [];
    let result = -1;
    for(let i = 1; i <= number1; i++){
        let n = prompt("Nhập số",'');
        Array.push(parseInt(n));
    }
    for(let i = 0; i < Array.length; i ++){
        t = Array[i];
        if(t % 2 == 0)
            if(t > result)
                result = t;
    }
    if(result != -1)
       alert("Trong dảy số vừa nhập: "+ Array + " thì số chẵn lớn nhất là: " + result);
    else
        alert("không có số nào chia hết cho 2 nên return "+ result);
}

function Fibonance(){
    var number2 = document.getElementById("number2").value;
    let tg = 0;
    let tr = 1;
    let sau = 1;
    for(let i = 1; i < number2; i++){
        tg = tr + sau;
        tr = sau;
        sau = tg;
    }
    alert(tg);
}
var Cong = function() {
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

var RepeatLetter1 = function (str){
    var Array1 = str.split("");
    var Array = []
    let String = "";
    for(let i = 0 ; i < str.length; i++){
        // Array.push(Array1[i].concat(Array1[i]));
        String += Array1[i] + Array1[i];
    }
    console.log(String);
}

RepeatLetter1("Hello World");

var RepeatLetter2 = function (str){
    var Array1 = str.split("");
    var Array = []
    let String = "";

    for(let i = 0 ; i < str.length; i++){
        Array.push(Array1[i].concat(Array1[i]));
        String += Array[i];
    }
    console.log(String);
}
RepeatLetter2("Hello W");
let student = {
    name: "onkeydown ",
    tele: 2
}


console.log(student["name"] + student.name);

let freeShipping = {
    Shampoo: 44.02,
    RubberDucks: 5.99
}


function Free(object){
    var result = 0;
    for(var value in object){
        result += object[value];
        console.log(result)
    }
    if(result > 50)
        console.log("Free Ship")
    else
        console.log("Not free Ship")
}

Free(freeShipping);

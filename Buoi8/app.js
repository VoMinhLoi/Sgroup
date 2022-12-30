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

    alert("Trong dảy số vừa nhập: "+ Array + " thì số lớn nhất là: " + result);
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

LargestEven(11);
Fibonance(7);
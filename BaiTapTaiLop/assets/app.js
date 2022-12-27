function Tinh(){
    let number = document.getElementById("number").value;
    let result = 0;
    for(let i = 1; i <= number; i++){
        result += i;
    }
    alert(result);
}

function FizzBuzz(n){
    let Array = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 !=0 && i % 5 != 0)
            Array.push(i);
        else
            if(i % 3)
                Array.push("Fizz");
            else
                if (i % 5)
                    Array.push("Buzz");
    }
    console.log(Array);
}

function FizzBuzz2(n){
    let Array = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 !=0 && i % 5 != 0)
            Array[i-1] = i;
        else
            if(i % 3)
                Array[i-1] = "Fizz";
            else
                if (i % 5)
                    Array[i-1] = "Buzz";
    }
    console.log(Array);
}

FizzBuzz2(11);
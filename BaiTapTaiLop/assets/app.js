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
    // console.log(Array);
}

FizzBuzz2(11);

var array = [
    { 
        id: 1,
        name: "Minh Loi",
        age: 20
    },
    {
        id: 2,
        name: "Minh Than",
        age: 22
    },
    {
        id: 3,
        name: "Minh Than",
        age: 22
    },
    {
        id: 4,
        name: "Minh Than",
        age: 22
    }
]

var button1 = document.getElementById("button");
button1.addEventListener("click", 
    () => {
        var input0 = document.querySelector("#id").value;
        var input1 = document.querySelector("#name").value;
        var input2 = document.querySelector("#age").value;
        var object = {
            id: input0,
            name: input1,
            age: input2
        }
        array.push(object);
        var list = document.querySelector(".list");
        list.innerHTML = ""

        array.forEach(
            (item) => {
                list.innerHTML += 
                `
                    <li>${item.id} + ${item.name} + ${item.age}<li>
                    <button style="width: 100%; height: 50px;" onclick="DeleteItem(${item.id})"Delete</button>
                `;
            }
        )
    }
)

// var array = [1,2,3,4,5]
// button1.addEventListener("click", 
//     () => {
//         var input1 = document.querySelector("#number").value;
//         array.push(input1);
//         var list = document.querySelector(".list");
//         list.innerHTML = ""
//         array.forEach(
//             (item) => {
//                 list.innerHTML += 
//                 `
//                     <li>${item}<li>
//                     <button onclick="DeleteItem(${item})"</button>
//                 `;
//             }
//         )
//     }
// )
function DeleteItem(item1){
    
    var newArray = array.filter(
        (item) => {
            return item.id !== item1;
        }
    )
    var list = document.querySelector(".list");
    list.innerHTML = ""
    array = newArray
    console.log(array)
    array.forEach( (item) => {
        list.innerHTML += 
        `
            <li>${item.id} + ${item.name} +${item.age} </li>
            <button style="width: 100%; height: 50px;" onclick="DeleteItem(${item.id})"Delete</button>
        `
    })
}
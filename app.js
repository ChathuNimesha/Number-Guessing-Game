// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name){
//         this.name=name;
//     }

//     getName(name){
//         return this.name;
//     }


// }

// let customer01 = new Customer("saman",12,"gampaha");
// console.log(customer01.getName());t

let randomNumber = Math.floor((Math.random()*10)+1);

console.log(randomNumber);



function showNumber(){
    let lblDisplay = document.getElementById("display");
    let number = document.getElementById("number").value;
    console.log(number);
    lblDisplay.innerHTML=randomNumber;

    if(number==randomNumber){
        alert("Yeah You won this game!!! Congragulationsss!!!!!");
    }else{
        alert("Incorrect & Try Again!!!!!");
    }


}
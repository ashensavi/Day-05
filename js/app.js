
// function login() {
//    const userName = "Ashensavi";
//    const password = "12345";

//    let txtUserNameValue = document.getElementById("txtUserName").value;
//    let txtpasswordValue = document.getElementById("txtPassword").value;

//     if(txtUserNameValue==userName && txtpasswordValue==password){
//         alert("Login succeed! :)")
//     }else{
//         alert("Login Failed! :(")
//     }

// }

// let numbers = [10,20,30,40,50,60,70,80,90,100];

// let sum = 0;

// for(let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
//     sum+=numbers[i];
// }

// console.log("SUM is  : "+sum);
// console.log(numbers);

//-----------------------------------------------------------------------------------

// let numbersArray=[10,20,30,40,50,60,70,80,90,100];

// for(let number of numbersArray){
//     console.log(number);
    
// }

// numbersArray.forEach((number) => {
//     console.log(number);
// });


// numbers.forEach((number) => {
//     document.write(`<h1>${number}</h1>`)
// });

// let isTrue = 10 == "10";

// console.log(isTrue); //true because == only checks for data not data  type

// isTrue = 10 === "10";

// console.log(isTrue);//false because === checks for datatype also


function handleClick(value){

    console.log(value);
    let displayValue = document.getElementById("displayValue");
    if (displayValue.innerHTML === "0") {
        displayValue.innerHTML = value;
    } else {
        displayValue.innerHTML += value; 
    }
}

function calc(value){
     
    if(value=="+" || value == "-" || value == "*" || value == "/"){

        let firstNum = 
    }

}
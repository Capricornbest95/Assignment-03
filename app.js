// var pets = ["Cat" , "Dog" , "Goat" , "Fish"]
// console.log(pets);

// pets.unshift("Cat2" , "Cat3");
// console.log(pets);

// pets.splice(1, 0 ,"Cat2" , "Cat3");
// console.log(pets);

// var nopets = pets.slice(1, 3);
// console.log("slice Results" , nopets);

// for Loop
// var citiesToCheck = ["Karachi", "Peshawar", "Multan", "Islamabad", "Rawalpindi"];
// var cityFound = "no";
// var cleanCity = prompt("Ender Your City Name");
// for (var i = 0; i <= citiesToCheck.length; i++ ) {
//     if(cleanCity === citiesToCheck[i]) {
//         cityFound = "yes";
//         alert("Your city is in the list");
//     }
// }
// if (cityFound = "no") {
//     alert("your city is not in the list");
// }


//DOM (Document object model)
// var paragraph = document.getElementById("my-para").innerText;
// var paragraph1 = document.getElementById("my-para").innerHTML;

// console.log(paragraph);
// console.log(paragraph1);

// function getMyData(name, lname) {
//     var firstName = document.getElementById("firstName").value;
//     console.log(firstName);
//     console.log(name);
//     console.log(lname);
// }
// getMyData();


// var eligibleCountries = ["Pakistan", "UAE", "Saudi Arabia", "Canada", "USA"]
// var eligCountry = prompt("Check country if you are eligible to travel");
// var countryFound = "false";
// for (i = 0; i <= eligibleCountries.length; i++ ) {
//     if (eligCountry === eligibleCountries[i]) {
//         countryFound = "true";
//         alert("Yes you are eligible to visit this Country");
//         break;
//     }
// }
// if (countryFound === "false") {
//     alert("Sorry! you are not eligible.")
// }

// var firstName = ["Mohammed", "Fakhar", "Babar", "Kamran"];
// var lastName = ["Rizwan", "Zaman", "Azam", "Akmal"];
// var fullName;

// function getMyData(){
//     for (i = 0; i <= firstName.length; i++) {
//         for (j = 0; j <= lastName.length; j++) {
//             if (firstName[i] + lastName[j]) {
//                 fullName.push(firstName[i] + lastName[j]);
//                 console.log(fullName);
//             }
//         }
//     }
// }


// var firstName = ["Mohammed", "Fakhar", "Babar", "Kamran"];
// var lastName = ["Rizwan", "Zaman", "Azam", "Akmal"];
// var fullName = [];
// var isFound = 'false';
// function getMyData(){
//     for (var i = 0; i < firstName.length; i++) {
//         fullName.push(firstName[i] +  " " + lastName[i])
//         // for (j = 0; j < lastName.length; j++) {
//         //     fullName.push(firstName[i] + lastName[j]);
//         // }
//     }
//     console.log(fullName);
// }

// Task 01

var num1 = prompt("Enter Number 1");
var num2 = prompt("Enter Number 2");
var num3 = prompt("Enter Number 3");


  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1 + ", " +  num2 + ", " +  num3);
    } else {
        console.log(num1 + ", " +  num3 + ", " +  num2);
    }

  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2 + ", " +  num1 + ", " +  num3);
    } else {
        console.log(num2 + ", " +  num3 + ", " +  num1);
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(num3 + ", " + num1 + ", " + num2);
    } else {
        console.log(num3 + ", " + num2 + ", " +  num1);
    }
  }



// Task 02

var lNum1 = prompt("Enter Number 1");
var lNum2 = prompt("Enter Number 2");
var lNum3 = prompt("Enter Number 3");
var lNum4 = prompt("Enter Number 4");
var lNum5 = prompt("Enter Number 5");

if (lNum1 > lNum2 && lNum1 > lNum3 && lNum1 > lNum4 && lNum1 > lNum5 ) {
  console.log("Number 1 is largest number. Value is: " , lNum1);
} else if (lNum2 > lNum1 && lNum2 > lNum3 && lNum2 > lNum4 && lNum2 > lNum5 ) {
  console.log("Number 2 is largest number. Value is: " , lNum2);
} else if (lNum3 > lNum1 && lNum3 > lNum2 && lNum3 > lNum4 && lNum2 > lNum5 ) {
  console.log("Number 3 is largest number. Value is: " , lNum3);
} else if (lNum4 > lNum1 && lNum4 > lNum2 && lNum4 > lNum3 && lNum4 > lNum5 ) {
  console.log("Number 4 is largest number. Value is: " , lNum4);
} else if (lNum5 > lNum1 && lNum5 > lNum2 && lNum5 > lNum3 && lNum5 > lNum4 ) {
  console.log("Number 5 is largest number. Value is: " , lNum5);
}


// Task 03

for (i = 0; i < 15; i++) {
  if (i % 2 === 0) {
    console.log (i + " this is even");
  } else {
    console.log (i + " this is odd");
  } 
} 

// Task 04

for (i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}


// Task 05

var star = "";

for (var i = 0; i <= 5; i++) {
  for (j = 0; j < i; j++) {
    star += "*";
  } star += "\n"
}

console.log(star);


// Task 06

for(let i=1; i<1000; i++) {
    if(i % 3 === 0 && i % 5 === 0){
      console.log ("Multiples of 3 & 5 is: " + i);
    }
}

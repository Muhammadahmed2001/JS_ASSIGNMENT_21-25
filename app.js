//..question 1..//


// firstName = prompt("Enter your first Name");
// secoundName = prompt("Enter your secound Name");

// fullName = [firstName," ",secoundName];
// document.write("Hello ! MR"+" "+fullName.join(""));


//..question 2..//


// mobile = (prompt("Your favorite mobile phone model"));
// strLength = mobile.length;
// document.write("My favourite phone is : "+ mobile + "<br />");
// document.write("Length of string : "+strLength);



// //..question 3..//
//  var str = "pakistani";
//  var letter = prompt("choose a letter do you want");
//  document.write("String :" +" "+ str + "<br />");
//  document.write("Index of '"+letter+"' :"+ " "+str.indexOf(letter));



//..question 4..//
// var str = "Hello world";
// letter = prompt("choose a letter do you want");
// document.write("String : " +str +"<br />");
// document.write("Last Index off '"+letter+"' : " + str.lastIndexOf(letter));



//..question 5..//
// var str = "pakistani";
// num = prompt("put the index number do you want");
// document.write("string : "+ str + "<br />");
// document.write("character at index " + num +": " + str.charAt(num));


//..question 6..//
// var firstName = prompt("Enter your first name");
// var secoundName = prompt("Enter your secound name");
// document.write("Hello Mr ! "+ firstName.concat(" ",secoundName));




//..question 7..//
// var city = "Hyderabad";
// document.write("City : "+ city + "<br />");
// for (var i = 0; i < city.length; i++){
//     if(city.slice(i , i + 5) == "Hyder"){
//         city = "Islam"+city.slice(5);
//         break;
//     }
// }
// document.write("After replacement : " + city);



// var country = "Pakistan";
// for (var i = 0; i < country.length; i++) {
//     if(country.slice(i , i + 3) == "Pak"){
//         country = "Afghan" + country.slice(3);
//         break;
//     }
// }
// console.log(country);




//..question 8..//
// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// document.write(message+"<br /><br /><br />");
// document.write("<h4>After replacement</h4>"+
// message.replaceAll("and","&")

// );




//..question 9..//
// var num = "472"
// var convert = Number(num);
// document.write("Value : " + num + "<br />");
// document.write("Type : "+ typeof(num)+ "<br />");
// document.write("Value : " + Number(num)+ "<br />");
// document.write("Type : "+ typeof(convert)+ "<br />");



// //..question 10..//
// var user = prompt("Type any thing");
// document.write("User input : " + user +"<br />");
// document.write("Upper case : "+ user.toUpperCase());




//..question 11..//
// var user = prompt("Type any thing");
// document.write("User input : " + user +"<br />");
// document.write("Title case : " + user[0].toUpperCase()+user.slice(1));

//..question 12..//

// var num = 35.36;
// var str = num.toString();
// console.log(str.replace(".",""));


//..question 13..//


// var userName = prompt("Enter your name");
// for (var i = 0; i < userName.length; i++) {
//     if ((userName.charCodeAt() == "33") || (userName.charCodeAt() == "44") || (userName.charCodeAt() == "46") || (userName.charCodeAt() == "64")){
//         console.log(alert("Please Enter a valid username"));
//         break;
//     }else{
//         document.write("Hello ! MR " + userName);
//         break;
//     }
// }


//..question 14..//


// var userInput = prompt("Wellcome to Karachi Bakery. What do you want to order Sir/Ma'am ?");
// var insensitive = userInput.toLowerCase();
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var stock = [];
// for (var i = 0; i < items.length; i++) {
//     if(insensitive == items[i]){
//         stock = items[i];     
//     }
// }
// // console.log(stock);
// if (insensitive == stock) {
//     document.write(userInput + " is <b>available</b> at index " + items.indexOf(insensitive) + " in our bakery")
// }
// else{
//     document.write( "We are sorry. " + userInput + " is <b> not available</b> in our bakery")
// }




//..question 16..//

// var str = prompt("Write any thing");
// for(var i = 0 ; i < str.length ; i++){
//     document.write(str[i].split("")+"<br />");
// }


//..question 17..//

// var str = prompt("Enter the word");
// var lastCharacter = str.split("").pop();
// document.write("User input : "+ str +"<br />");
// document.write("Last Character : "+ lastCharacter);






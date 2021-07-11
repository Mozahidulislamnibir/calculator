// function print(name, roll, clas){
//     console.log(name);
//     console.log(roll);
//     console.log(clas);
// }
// print("bangla, 78, five");
// print("english, 75, ffor");
// print("tarkish, 45, five");
// print("chid, 99, five");
// print("parent, 33, five");

//  let names, roll, year;
// names = "abdul uhhab";
// roll = "99";
// year = "2021";

function print_s(names, roll, year) {
    console.log("my name is" + names);
    console.log("my roll is" + roll);
    console.log("my year is" + year);
// }
// print_s(names, roll, year)

// names = "_abdul";
// roll = "9888";
// year = "202101";

// print_s(names, roll, year)

// names = "_luky";
// roll = "040i5";
// year = "2948941";

// print_s(names, roll, year)
// function goto_bazar(tk, rice_pacaked) {
//     return "ji vai ami cal paichi. amer massage hocche" + rice_pacaked + (tk-85)
// }

// let daroan = goto_bazar(100, "ei nen apner cla ar baki taka__=")

// // console.log(daroan);
// let main_money= 500;
// let after_exchange=0;

function calculatorsd (number1,number2){
    console.log(`sum = (number1 + number2)`);
    console.log(`sub = ${number1 - number2}`);
    console.log(`mul = ${number1 * number2}`);
    console.log(`div = ${number1 / number2}`);
    console.log(`modulas = ${number1 % number2}`);

    document.getElementById("myList").innerHTML="";

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sum =${number1 - number2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sub = ${number1 - number2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`mul = ${number1 * number2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`div = ${number1 / number2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`modulas = ${number1 % number2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
}
}

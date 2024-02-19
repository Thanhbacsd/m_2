// STEP 1: Create a new repo in GitHub called Assignment01.
// STEP 2: Open the new repo / folder on your computer and proceed through the process of connecting Visual Studio Code to your remote repo.
// STEP 3: Create a new HTML5 document and save it as index.html.
function question_4() {
    // 4. Declare (but do not assign) 9 variables for the following identifiers: 
    // First Name, Last Name, Address, City, State, Zip Code, Your Age, 
    // Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation 
    // when naming your identifiers.

    let firstName, lastName, address, city, state, zipCode, yourAge //Camel Case
    let strRefferralSource, strMayWeContactYou //Hungarian Notation
}
function question_5() {

    // 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways 
    // for declaring and assigning values to those variables.
    let firstName = "Thanh"
    let lastName = input("Enter last name: ")
    let address
    address = {street: "Arragon Dr.", city: "San Diego"}
}
//Question 6:
function nullUndefinedVariable() {
    let nullVariable = null
    let undefinedVariable
    console.log(nullVariable, undefinedVariable)
}
//Question 8:
function prt_1() {
    let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
    console.log(someString)
}
//Question 7:
function prt_2() {
    let firstVariable
    firstVariable = 25 + "It will be a string"
    console.log(typeof firstVariable)
}
//Question 8, 9, 10
function prt_3() {
    let x = 5
    console.log(typeof x++)
}

function prt_4() {
    let y = true + "string"
    let x = 10 + false
    console.log(typeof y)
    console.log(typeof x)
}

//Question 11, 12, 13

function alf() {
    let hisName = "Zak Ruvalcaba"
    let myName = "Thanh Bac"
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = ", welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + hisName + " and " + myName + welcome + course + cl)

}
//Question 14
function alf_2() {
    let hisName = "Zak Ruvalcaba"
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + hisName + ".\n" + welcome + course + cl)
    
}
//Question 15
function alf_3() {
    let theirName = prompt("Enter your name: ")
    let gr = "Hello"
    let course = "JavaScript"
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + theirName + ".\n" + welcome + course + cl)
    
}
//Question 16
function alf_4() {
    let myName = "Thanh Bac"
    let gr = "Hello"
    let course = prompt("Enter you class: ")
    let welcome = "Welcome to the "
    let cl = " class!"

    window.alert(gr + ' ' + myName + ".\n" + welcome + course + cl)
    
}
//Question 17
function sumxy() {
    let x = 10
    let y = 20
    console.log("x + y = ", x + y)
}
//Question 18
function xadd() {
    let x = 20
    x += 20
    console.log(x)
}
//Question 19
function xmultip() {
    let x = 20
    x *= 5
    console.log(x)
}
//Question 20
function xremainder() {
    let x = 20
    x %= 3
    console.log(x++)
}
//Question 21
function coparisonTrue() {
    let x = 10
    let y = 20
    let z = 15
    console.log(x < y && y > z)
}
//Question 22
function coparisonFalse() {
    let x = 10
    let y = 20
    let z = 15
    console.log(x < y && y < z)
}
const accountID = 421412  // by using the const keyword the values cannot be changed if we want to change it

var accoutNaem =  "Pradyuman sharma"

let accountEmail = " Pradyuman@gmail.com"
accountcity = "Rakkar"

let AccountState; // if we gonna try to print this variable we gonna get return the not defined 

/* 
prefer not to use the var 

use the let as theere is problem of scope

which is basically -> 
{
 the stuff between this curlt braces gonna be variables under this scope
}

*/


console.log(accoutNaem) // it shows one Variable  at a time

console.table([accountEmail,accoutNaem,accountID]) // it shows all the records in the tabular format having index starting from 0
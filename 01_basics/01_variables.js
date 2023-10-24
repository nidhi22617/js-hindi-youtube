const accountId = 144553
let accountEmail = "nidhi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

console.table([accountId,accountEmail, accountPassword, accountCity])

// accountId = 2 // not allowed
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "guddu@gmail.com"
accountPassword = "21212121"
accountCity = "Benglutu"



console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
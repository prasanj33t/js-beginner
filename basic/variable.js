const accountId = 144553
let accountEmail = "pj@gmail.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"

// accountId = 2 // not allowed
accountEmail = "rj@gmail.com"
accountPassword = "6789"
accountCity = "Tatanagar"

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
*/
const accountId = 105847;
let accountEmail = "ishan.108@gmail.com";
var accountPassword = "12345";
accountCity = "Winfield";
let accountState;
//accountId = 2 // Not allowed

/**
 * Prefer not to use var 
 * because of block scope and functional scope issues
 */

accountEmail = "ishan.trivedi@americaneagle.com";
accountPassword = "asdfasdf";
accountCity = "Chicago"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
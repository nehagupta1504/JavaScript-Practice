console.log("Error Handling in JS");
//User defined Exception
function userExecption(message) {
  this.message = message;
  this.name = "User Error";
}

try {
  var a = 10;
  if (a > 5) {
    throw new userExecption("Value is greater than 5");
  }
} catch (error) {
  console.log(error.name);
}

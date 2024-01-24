
function isAuthenticated() {
    return Math.random() > 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });

console.log("\nPromise location example")
function isLocationValid(loc)
{
   var v = "coimbatore"
   if(v===loc)
   return true
   else
   return false
}
function location()
{
  return new Promise(function(response,errormsg)
  {
    setTimeout(function(){
      loc="coimbatore"
      if(isLocationValid(loc))
      response()
      else
      errormsg()
    },2000)
  })
}
location()
.then(function (response){
  console.log("Location Found !!!")
})
.catch(function (errormsg){
  console.log("Location not found !!!")
})
console.log("Demo callback\n")
function ramusomu(welcomeMessage,callback)
{
    setTimeout(function(){
        console.log(welcomeMessage)
        callback()
    },2000)
}
function miniani()  
{
    console.log("odi poiru da kai pullaaa!!!!")
}
ramusomu("adeiiii ramu somu ",miniani)

function submitform(button,db)
{
    setTimeout(function(){
        console.log("\nWorking of form using callback\n")
        console.log(button)
        database()
    },2000)
}
function database(){
    console.log("Form submitted succesfully!!")
}
submitform("Click the submit button",database)

// document.querySelector("#DarkModetext").addEventListener("click", function darkMode() {
//     console.log("Dark Mode On")
//     var element = document.body;
//     var content = document.getElementById("DarkModetext");
//     element.className = "dark-mode";
//     content.innerText = "Dark Mode is ON";
//   });


//jS code reference: https://www.geeksforgeeks.org/how-to-make-dark-mode-for-websites-using-html-css-javascript/


function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    // content.innerText = "Dark Mode is ON";
  }

function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    // content.innerText = "Dark Mode is OFF";
}
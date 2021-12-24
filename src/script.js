console.log("HELLOOOOOO");

//How do we get the image?
let darkMode = false
let themeBtn = document.getElementById("mode")
let background = document.body.style
//let darkMode1=false

// How do I make my image clickable?

//   console.log(darkMode)
themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
    console.log(darkMode1)
    } else {
        // Change to light
        lightModeProperties()
    }

})

function darkModeProperties () {       // console.log("GOOD NIGHT SLEEP TIGHT") 
    themeBtn.src = "./images/icon-sun.svg"
    // How do we get the background color of the WHOLE HTML page
    //background.backgroundColor = 'rgb(20,29,47)'
    background.backgroundColor = "purple";
    darkMode = true
   }
   
function lightModeProperties() {        // console.log("LET BE THERE LIGHT")
    themeBtn.src = "./images/icon-moon.svg"
   // themeBtn.src = "./images/icon-sun.svg"
    //background.backgroundColor = "hsl(185, 41%, 84%)";
    background.backgroundColor = "green";
    darkMode = false
   }
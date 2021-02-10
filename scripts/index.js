//Sign Up model
var signupmodal = document.getElementById("signupModal");

// Get the button that opens the modal
var btnsu = document.getElementById("su");

// Get the <span> element that closes the modal
var signupspan = document.getElementsByClassName("closesignup")[0];

// When the user clicks on the button, open the modal
btnsu.onclick = function () {
    signupmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupspan.onclick = function () {
    signupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == signupmodal) {
        signupmodal.style.display = "none";
    }
}


// Sign In model
var singinmodal = document.getElementById("signinModal");
// Get the button that opens the modal
var btnsi = document.getElementById("si");
// Get the <span> element that closes the modal
var signinspan = document.getElementsByClassName("closesignin")[0];
// When the user clicks on the button, open the modal
btnsi.onclick = function () {
    signinModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
signinspan.onclick = function () {
    signinModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == signinModal) {
        signinModal.style.display = "none";
    }
}

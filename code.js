   // Mia Goodwin, mission contol operator login, 2/6/22

   // login code connection
function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    // results
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
        //result + new webpage
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("indexpage2.html");
    }
}
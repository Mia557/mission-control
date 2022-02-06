   // add another else 

   //login code
function checkCreds()  {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

//allow or decline user code

    if (fullName.length > 20 || fullName.length < 2) {
    document.getElementById("loginstatus").innerHTML = "Full name has invalid number of characters";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
            document.getElementById("loginstatus").innerHTML = "Badge ID is an invalid number";

// moving to next page
    } else {
            alert ("You're here! :D" + fullName + "!");
            location.replace("indexw4.html");
    }
}

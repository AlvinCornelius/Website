function validate()
{
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var copies = document.getElementById("copies").value;
    var type = document.getElementById("type").value;

    if(username == "")
    {
        alert("Username must be filled");
        return false;
    }

    if(email == "" )
    {
        alert("Email must be filled");
        return false;
    }

    if(password == "")
    {
        alert("Password must be filled");
        return false;
    }
    if(password.length < 5)
    {
        alert("Password must at least 6 characters");
        return false;
    }

    if(address == "")
    {
        alert("Address must be filled");
        return false;
    }

    if(copies == "")
    {
        alert("Number of copies must be filled");
        return false;
    }

    if(type == "Please")
    {
        alert("Type of game must be chosen");
        return false;
    }

    if(document.form.check.checked == false)
    {
        alert("You must Agree to terms and services");
        return false;
    }
}


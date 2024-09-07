let pwd = document.getElementById("txtpwd");
let cpwd = document.getElementById("txtcpwd");
let label = document.getElementById("cpwd_label");
let unm = document.getElementById("txtunm");
let flag = -1;

cpwd.addEventListener('input', function () {
    if (pwd.value != cpwd.value) {
        label.style.color = 'red';
        label.innerText = "Password not Matched";
        flag = 0;
    }
    else {
        label.innerText = "";
        flag = 1;
    }
});

function validate() {
    // E-Mail Validation
    var x = document.getElementById("txteid").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please Enter a Valid E-Mail Address");
        return false;
    }
    // Password
    if (pwd.value.length < 8) {
        alert("Password Must Contain at least 8 Characters");
        return false;
    }
    else if (!flag) {
        alert("Password Doesn't Matches");
        return false;
    }
    else {
        setCookie(unm.value, pwd.value, 30);
        alert("Registration Successfully");
        return true;
    }
}

function setCookie(name, value, time) {
    const date = new Date();
    date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

    const cookie = name + "=" + value + ";" + expires + ";path=/";

    document.cookie = cookie;
}


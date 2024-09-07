function validate() {
    let name = document.getElementById("txtunm").value;
    let pwd = document.getElementById("txtpwd").value;
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const cookieParts = cookie.trim().split('=');
        const cookieName = decodeURIComponent(cookieParts[0]);
        const cookieValue = decodeURIComponent(cookieParts[1]);
        if (cookieName === name) {
            if (cookieValue === pwd) {
                alert("Login Successfully");
                return true;
            }
            alert("Wrong Password");
            return false;
        }
    }
    alert("No records found");
    return false;
}
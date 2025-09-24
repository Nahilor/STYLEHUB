document.getElementById("signupBtn").addEventListener("click", async (e) => {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let password2 = document.getElementById("confirmPassword").value;
    let fname = document.getElementById("signupFullname").value;

    console.log(fname);
    console.log(password);

    if (password !== password2) {
        alert("Passwords don't match");
        return; // stop execution
    }

    try {
        const response = await fetch(`http://192.168.1.5:3000/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: fname, email, password }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            window.location.href = "/login";
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.log(error);
    }
});

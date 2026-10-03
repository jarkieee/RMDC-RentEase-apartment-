const params = new URLSearchParams(window.location.search);

const role = params.get("role");


// Ipakita kung anong role ang pinili
const roleText = document.getElementById("roleText");

if (role === "admin") {

    roleText.textContent = "Admin Login";

} else if (role === "current-tenant") {

    roleText.textContent = "Current Tenant Login";

}


// Login
function login(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;
    }


    // ADMIN → ADMIN DASHBOARD
    if (role === "admin") {

        window.location.href = "dashboard.html";

    }


    // CURRENT TENANT → CURRENT TENANT DASHBOARD
    else if (role === "current-tenant") {

        window.location.href =
            "Current-tenant/tenant-dashboard.html";

    }


    // Walang role
    else {

        alert("Please select a role first.");

        window.location.href = "index.html";

    }

}


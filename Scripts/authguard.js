"use strict";
(function()
{
    // Check if user is logged in
    if(!sessionStorage.getItem("user"))
    {
        // Redirect to login
        location.href = "login.html";
    }
})();
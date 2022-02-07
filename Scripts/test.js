(function()
{

    let MainNav = document.getElementById("MainNav");
    let HRLink = document.createElement("a");
    HRLink.innerHTML =`<li class="nav-item">
    class="nav-link" id="HRLink" href="humanResources.html"><i class="fas fa-user-circle"></i>Human Resources
    </li>`;
    
    MainNav.appendChild(HRLink)



})();

/**
 * 
 * app.js file, used to inject site content to the various html pages within our site
 * home to js functions required by documentation
 * 
 * @author Mitchell Grubb + Mateen Hamed
 * @since 2/3/2022
 * @
 */

"use strict";


(function()
{
    /**
     * Display Bottom Nav Function / Cleans Code Clutter rather than having in each switch case
     */
    function DisplayBottomNav()
    {
        // Inserting Bottom Copyright NavBar through the DOM
        let bottomNav = document.createElement('nav');
        bottomNav.setAttribute("id", "BottomNav");
        bottomNav.innerHTML = `<nav class="navbar fixed-bottom navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">&copy CopyRight Feb 6, 2022</a>
        </div>
        </nav>`;
        document.body.appendChild(bottomNav);
    }

     
    function ProjectNav()
    {
        // Alters content of the productNav element to display Projects
        let productNav = document.getElementById("productNav");
        productNav.innerHTML = 
        `<li class="nav-item">
        <a class="nav-link" id="productNav" href="products.html"><i class="fas fa-project-diagram"> </i>Projects</a>
        </li>`;
       
    }

    // Function to Position HR Nav Option to the Nav Bar in between About Us and Contact Us
    function HRNavOption()
    {
        const createElementWithOptions = (type, options = {}) => Object.assign(document.createElement(type), options);

        const navItem = createElementWithOptions("li", {className: "nav-item"});
        const navLink = createElementWithOptions("a", {className: "nav-link", href: "humanResources.html"});

        navLink.append(
          createElementWithOptions("i", {className: "fas fa-user-circle"}),
          createElementWithOptions("span", {textContent: " Human Resources"}),
        );
        navItem.append(navLink);
        
        // jQuery Function to add HR link within the 4th index of the NavBar
        $('#NavOptions li:eq(4)').after(navItem);
    }


    function DisplayHome()
    {

        // Call to Project Nav Function
        ProjectNav();

        // Call to Bottom Nav Function
        DisplayBottomNav();

        // Call to HR Nav Function
        HRNavOption();



        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
         
        let MainParagraph = document.createElement("p");

        // Step 3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let WelcomeMessage = "Welcome to our WEBD6201-Lab 1 Website!";
        MainParagraph.textContent = WelcomeMessage;


        // Step 4 - perform insertion / deletion
        MainContent.appendChild(MainParagraph);


    }

    /**
     * Display About Page, depends on switch case, contains all DOM manip + more display functions
     */
    function DisplayAboutPage()
    {

        // Call to Project Nav Function
        ProjectNav();

        // Call to Bottom Nav Function
        DisplayBottomNav();

        // Call to HR Nav Function
        HRNavOption();


        // Creating references to multiple entry points within the document
        // Project 1 elements
        let partnerOneHeader = document.getElementById("mitchellHeader");
        let partnerOneParagraph = document.getElementById("mitchellDesc");
        let partnerOneEmail = document.getElementById("mitchellEmail");

        // Project 2 elements
        let partnerTwoHeader = document.getElementById("mateenHeader");
        let partnerTwoParagraph = document.getElementById("mateenDesc");
        let partnerTwoEmail = document.getElementById("mateenEmail");

        // Element Configurations
        // Partner 1 Config
        let headerContentOne = "Mitchell Grubb";
        let paragraphContentOne = "Enjoys developing software and working through the problems that come with it! Currently in 2nd year CPA at Durham College";
        let emailContentOne = "mitchell.grubb@dcmail.ca";

        // Partner 2 Config
        let headerContentTwo = "Mateen Hamed";
        let paragraphContentTwo = "Hello, My name is Mateen and I'm highly passionate about Crypto/Blockchain technologies" + 
        "\n If you know me, you know I love NFT's and am a huge advocate for them being able to change the world!" +
        "\n#NFTeen";
        let emailContentTwo = "mateen.hamed@dcmail.ca";

        // Element Insertion
        // Partner 1
        partnerOneHeader.innerHTML = headerContentOne;
        partnerOneParagraph.innerHTML = paragraphContentOne;
        partnerOneEmail.innerHTML = emailContentOne;

        // Partner 2
        partnerTwoHeader.innerHTML = headerContentTwo;
        partnerTwoParagraph.innerHTML = paragraphContentTwo;
        partnerTwoEmail.innerHTML = emailContentTwo;
    }

    /**
     * Displays Project page information using DOM manipulation as the page is loaded
     */
    function DisplayProductsPage()
    {
        console.log("Our Products Page");
    
        // Call to Project Nav Function
        ProjectNav();

        // Call to Bottom Nav Function
        DisplayBottomNav();

        // Call to HR Nav Function
        HRNavOption();

        // Creating references to multiple entry points within the document
        // Project 1 elements
        let projectOneHeader = document.getElementById("project-1-header");
        let projectOneParagraph = document.getElementById("project-1-p");

        // Project 2 elements
        let projectTwoHeader = document.getElementById("project-2-header");
        let projectTwoParagraph = document.getElementById("project-2-p");

        // Project 3 elements
        let projectThreeHeader = document.getElementById("project-3-header");
        let projectThreeParagraph = document.getElementById("project-3-p");

        // Element Configurations
        // Project 1 Config
        let headerContentOne = "C# Entity Framework Project";
        let paragraphContentOne = "This project was the first time that we used Entity Frameworks to interface with .NET objects within a database!"

        // Project 2 Config
        let headerContentTwo = "Python Discord Bot";
        let paragraphContentTwo = "This was the first time I worked with the Discord API alongside python," 
        + "I used Replit to host/write the bot, it did simple things like add movies to a list, choose movies from the list," +
        "remove movies from the list, all through Discords API commands.";

        // Project 3 Config
        let headerContentThree = "C# Text Editor";
        let paragraphContentThree = "This was a project from early last semester, this project really helped me understand how reading and writing to files works,"+
        " which has proved extremely valuable as we move forward.";

        // Element Insertion
        // Project 1
        projectOneHeader.innerHTML = headerContentOne;
        projectOneParagraph.innerHTML = paragraphContentOne;

        //Project 2
        projectTwoHeader.innerHTML = headerContentTwo;
        projectTwoParagraph.innerHTML = paragraphContentTwo;

        //Project 3
        projectThreeHeader.innerHTML = headerContentThree;
        projectThreeParagraph.innerHTML = paragraphContentThree;
    }

    /**
     * Displays Services using DOM manipulation as the Services page is loaded.
     */
    function DisplayServicesPage()
    {
        console.log("Our Services Page");

        // Call to Project Nav Function
        ProjectNav();

        // Call to Bottom Nav Function
        DisplayBottomNav();

        // Call to HR Nav Function
        HRNavOption();

        // Creating references to multiple entry points within the document
        // Service 1 elements
        let serviceOneHeader = document.getElementById("service-1-header");
        let serviceOneParagraph = document.getElementById("service-1-p");

        // Service 2 elements
        let serviceTwoHeader = document.getElementById("service-2-header");
        let serviceTwoParagraph = document.getElementById("service-2-p");

        // Service 3 elements
        let serviceThreeHeader = document.getElementById("service-3-header");
        let serviceThreeParagraph = document.getElementById("service-3-p");

        // Element Configurations
        // Service 1 Config
        let headerContentOne = "Python Development";
        let paragraphContentOne = "Python is the langauage we have worked with the most, and are able to use it in more complex scenarios when comparing to our other services. " +
         "Whether it be UnitTesting, Algorithms or Automation.";

        // Service 2 Config
        let headerContentTwo = "C# and .NET Development";
        let paragraphContentTwo = "Having worked with C++ and C# we have a decent understanding of OOP principles and .NET Core and its documentation." + 
        "We have developed console, .NET, Entity Framework programs within C# while using MVC (Model, View, Controller) Principles";

        // Service 3 Config
        let headerContentThree = "JavaScript Development";
        let paragraphContentThree = "Having just begun JS our understanding does not compete with the other services listed here but hopefully by" + 
        " the end of the Semester we will be well on our way!";


        // Element Insertion
        // Service 1
        serviceOneHeader.innerHTML = headerContentOne;
        serviceOneParagraph.innerHTML = paragraphContentOne;

        // Service 2
        serviceTwoHeader.innerHTML = headerContentTwo;
        serviceTwoParagraph.innerHTML = paragraphContentTwo;

        // Service 3
        serviceThreeHeader.innerHTML = headerContentThree;
        serviceThreeParagraph.innerHTML = paragraphContentThree;
        
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let HomeUrl = "https://mickgrubb.github.io/index.html";


        document.getElementById("sendButton").onclick = function()
        {
            let fullName = document.getElementById("fullName").value;
            let contactNumber = document.getElementById("contactNumber").value;
            let emailAddress = document.getElementById("emailAddress").value;
        
            console.log(fullName,contactNumber,emailAddress);

            setTimeout(function()
            {
                window.location.replace(HomeUrl);
            }, 3000);

        }
    }

    /**
     * Display HumanResources function based on switch case
     */
    function DisplayHumanResourcesPage()
    {
        // Call to Project Nav Function
        ProjectNav();

        // Call to Bottom Nav Function
        DisplayBottomNav();

        // Call to HR Nav Function
        HRNavOption();

    }


    /**
     * Start Function that makes use of a Switch case which allows for different page functions to run
     * as the pages are opened
     * 
     * Taken from ICE Excercises
     */
    function Start()
    {
        console.log("App Started!!");

        switch (document.title) {
          case "Home":
            DisplayHome();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Human Resources":
            DisplayHumanResourcesPage();
            break;  
        }
    }
    

    window.addEventListener("load", Start);


})();
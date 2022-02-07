
/**
 * 
 * app.js file, used to inject site content to the various html pages within our site
 * home to js functions required by documentation
 * 
 * @author Mitchell Grubb + Mateen Hamed
 * @since 2/3/2022
 */

"use strict";
(function()
{

    function DisplayHome()
    {
        console.log("Home Page");

        // Alters content of the productNav element to display Projects
        let productNav = document.getElementById("productNav");
        productNav.innerHTML = 
        `<li class="nav-item">
        <a class="nav-link" id="productNav" href="products.html"><i class="fas fa-project-diagram"> </i>Projects</a>
        </li>`;

        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        let humanResourceNav = document.getElementsByTagName("")
        
        // Step 2 - Create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">Welcome to our site</p>`;

        // Step 3 - Configure new Element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        Article.setAttribute("class", "container");


        // Step 4 - perform insertion / deletion

        // example of insert after (append)
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProductsPage()
    {
        console.log("Our Products Page");

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

        let headerContentTwo = "Python Discord Bot";
        let paragraphContentTwo = "This was the first time I worked with the Discord API alongside python," 
        + "I used Replit to host/write the bot, it did simple things like add movies to a list, choose movies from the list," +
        "remove movies from the list, all through Discords API commands.";

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

    function DisplayServicesPage()
    {
        console.log("Our Services Page");

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

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            { 
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add deserialized data from the localStorage

            let keys = Object.keys(localStorage); // returns a string array of keys

            let index = 1; // counts how many keys

            // for every key in the keys array (collection), loop
            for (const key of keys) 
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                // inject a repeatable row into the contactList
                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
    }


    // named function
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
        }
    }
    

    window.addEventListener("load", Start);


})();
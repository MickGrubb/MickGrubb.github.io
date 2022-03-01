// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function


class User
{

    // getters and setters
    get FirstName()
    {
        return this.m_firstName;
    }
    
    set FirstName(name1)
    {
        this.m_firstName = name1;
    }

    get LastName()
    {
        return this.m_lastName;
    }
    
    set LastName(name2)
    {
        this.m_lastName = name2;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(email_address)
    {
        this.m_emailAddress = email_address;
    }


    get Password()
    {
        return this.m_password;
    }

    set Password(password)
    {
        this.m_password = password;
    }


    // Constructor Function
    constructor(firstName = "" ,lastName = "" , emailAddress = "",  password = "")
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.Password = password;
    }

    // Overidden Methods
    toString()
    {
        return `First Name: ${this.FirstName}\nLast Name: ${this.LastName}\nEmail Address: ${this.EmailAddress}\nPassword: ${this.Password}`;
    }

}

(function()
{

    /**
     * This function uses Ajax to open a connection to the server and returns the data payload
     * to the callback function
     * 
     * 
     * @param {string} method 
     * @param {string} url 
     * @param {function} callback 
     */
    function AjaxRequest(method, url, callback)
    {
       // AJAX Steps
        // Step 1. Instantiate an XHR object
        let XHR = new XMLHttpRequest();

        // Step 2 - add an event listener for readystatechange
        XHR.addEventListener("readystatechange", () =>
        {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
                if(typeof callback === "function")
                {
                    callback(XHR.responseText);
                }
                else
                {
                    console.error("ERROR: Callback not a function");
                }
            }
        });

        // Step 3 - Open a connection to the server
        XHR.open(method, url);

        // Step 4 - Send the request to the server
        XHR.send();
    }

    /**
     * This function loads the header.hmtl content into the page
     * 
     * @param {string} html_data
     */
    function LoadHeader(html_data)
    {
        $("header").html(html_data);
        $(`li>a:contains(${document.title})`).addClass("active");
        CheckLogin();
    }

    function DisplayHome()
    {
        // Debugging tool
        console.log("Home Page");

        // jQuery Examples
        $("#AboutUsButton").on("click", () => 
        {
            location.href = "about.html";
        });

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);

        $("body").append(`
        <article class="container">
            <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
            </article>`);

    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }


    /**
     * This method validates input text fields within the form and displays
     * an error in the message area appropriately
     * 
     * @param {string} input_field_ID 
     * @param {RegExp} regular_expression 
     * @param {string} error_message 
     */
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let messageArea = $("#ErrorMessage").hide();

        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText = $(this).val();
            if(!regular_expression.test(inputFieldText))
            {
                // Doesnt pass ReghEx test
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }
            else
            {
                // Does pass
                messageArea.removeAttr("class").hide();
            }
        });

    }

    /**
     * Register Form Regex validation
     */
    function RegisterFormValidation()
    {
        ValidateField("FirstName", /([A-Z][a-z]{1,})/, "Please enter a valid First Name! (Minimum 2 Characters");
        ValidateField("lastName", /([A-Z][a-z]{1,})/, "Please enter a valid Last Name! (Minimum 2 Characters");
        ValidateField("emailAddress", /[_a-zA-Z0-9-]{7,}@[a-zA-Z0-9.-]+\.[a-zA-Z]+/, "Please enter a valid Email Address!");
        ValidateField("password", /^.{6,}$/,"Please enter a valid password (6 Character minimum)");
        ValidateField("confirmPassword",/^.{6,}$/,"Please enter a valid password (6 Character minimum)")


    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            { 
                AddContact(fullName.value, contactNumber.value, emailAddress.value)
            }
        });
    }

    /**
     * Displays Register page and performs most of the Lab 2 Requirements
     */
    function DisplayRegisterPage()
    {
        console.log("Register Page");

        // Creating error message div
        let ErrorMessage = document.createElement('div');
        ErrorMessage.setAttribute('id','ErrorMessage');
        document.body.append(ErrorMessage);


        // On submit button click compare password fields and move forward accordingly
        $("#submitButton").on("click", (event)=>
        {
            event.preventDefault();

            // If user has passed all prior validation, and passwords match on click,
            // create User object and output to console
            if($('#password').val() == $('#confirmPassword').val())
            {
                FirstName = $('#FirstName').val();
                LastName = $('#lastName').val();
                EmailAddress = $('#emailAddress').val();
                Password = $('#password').val();

                const user = new User(FirstName,LastName,EmailAddress,Password);

                console.log(user.toString());
            }
            // Else Display passwords do not match error
            else
            {

                $('#ErrorMessage').addClass("alert alert-danger").text('Passwords do not match try again').show();
            }
        });

        RegisterFormValidation();
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");

        let messageArea = $("#messageArea");
        messageArea.hide();


        $("#loginButton").on("click", function()
        {
            let success = false;

            // Create new empty user object
            let newUser = new core.User();

            // Use jQuery shortcut to load the users.json file
            $.get("./Data/users.json", function(data)
            {
                for(const user of data.users)
                {
                    // Check if user/pass matches the user data
                    if(username.value == user.Username && password.value == user.Password)
                    {
                       // Get the user data from the file and assign it to our empty user object
                       newUser.fromJSON(user);
                       success = true;
                       break; 
                    }
                }
                if(success)
                {
                    // Add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());
        
                    // hide any error message
                    messageArea.removeAttr("class").hide();
        
                    // Redirect user to the secure are of the site - contact-list.hmtl
                    location.href = "contact-list.html";
                }
                else
                {
                    // Display error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Credentials").show();
                }
            });
        });

        $("#cancelButton").on("click", function ()
        {
            // Clear the login form
            document.forms[0].reset();

            // Return to the home page
            location.href = index.html;
        });
    }

    function CheckLogin()
    {
    
        let loggedUser = sessionStorage.getItem("user");


        // If user is logged in, then...
        if(loggedUser)
        {
            // Const to Store Objects with types and objexts
            const createElementWithOptions = (type, options = {}) => Object.assign(document.createElement(type), options);

            // Creating NavItem Object with a types ("li","a") and options (classname:, href:)
            const navItem = createElementWithOptions("li", {className: "nav-item"});
            const navLink = createElementWithOptions("a", {className: "nav-link", href: "user.html"});

            // Appending types ("i","span") to the navlink with options ("className:, textContent:")
            navLink.append(
              createElementWithOptions("i", {className: "fa-solid fa-user"}),
              createElementWithOptions("span", {textContent: "user"}),
            );
            // Appending NavLink to the NavItem
            navItem.append(navLink);
        
            // jQuery Function to add HR link within the 4th index of the NavBar
            $('#NavOptions li:eq(4)').after(navItem);
            
            // Swap out login link for logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );

            $("#logout").on("click", function ()
            {
                // Perform Logout
                sessionStorage.clear();
                // Redirect to login
                location.href = "login.html";
            });

        }
    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        AjaxRequest("GET","header.html", LoadHeader);

        switch (document.title) {
          case "Home":
            DisplayHome();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProjectsPage();
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
          case "Edit":
              DisplayEditPage();
            break;
          case"Login":
              DisplayLoginPage();
            break;
          case "Register":
              DisplayRegisterPage();
              break;
              
        }
    }
    
    window.addEventListener("load", Start);
})();
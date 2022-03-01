(function(core){

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
            return `Name: ${this.FirstName} ${this.LastName}\nEmail Address: ${this.EmailAddress}`;
        }

        retrieveUsername()
        {
            return `${this.Username}`;
        }

        // Utility Methods
        toJSON()
        {
            return {
                "FirstName": this.FirstName,
                "LastName": this.LastName,
                "EmailAddress": this.EmailAddress,
            }
        }

        fromJSON(data)
        {
            this.FirstName = data.FirstName;
            this.LastName = data.LastName;
            this.EmailAddress = data.EmailAddress;
            this.Password = data.Password;
        }

        serialize()
        {
            if(this.FirstName !== "" && this.LastName !== "" && this.EmailAddress !== "")
            {
                return `${this.FirstName},${this.LastName},${this.EmailAddress}`;
            }
            console.error("One or more properties of the User Object are missing or invalid");
            return null;
        }
    
        deserialize(data) // assume that data is in a comma-separated format (string array of properties)
        {
            let propertyArray = data.split(",");
            this.FirstName = propertyArray[0];
            this.LastName = propertyArray[1]
            this.EmailAddress = propertyArray[2];
        }
    }

    core.User = User;


})(core || (core={}));
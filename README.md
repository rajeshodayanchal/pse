1) Installed Bootstrap
2) Created a component userregistration (#ng g c userregistration)
3) see the files to verify the codes


# PSE
UI Test for Principal Software engineers

Instructions :
    * Don't commit to master branch
    * Create a fork
    * Commit your changes to fork
    * Email us once you are done with test


# UI Assessment Test

Step 1. Create a Dynamic FORM using JSON Object.
Note: Use Bootstrap 4 for design.
Step 2. If the JSON data get updated the form must update dynamically. Keep text input and dropdown is enough, if you add more input types would be great.

Example:
JSON Data:
```json
[
    {
        "form_element": "input",
        "optional": false,
        "type": "text",
        "label": "First name",
        "place_holder": "Enter First Name",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": false,
        "type": "text",
        "label": "Last name",
        "place_holder": "Enter Last Name",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": false,
        "type": "text",
        "label": "Username",
        "place_holder": "UserName",
        "icon": "@"
    },
    {
        "form_element": "input",
        "optional": true,
        "type": "text",
        "label": "Email (Optional)",
        "place_holder": "Enter First Name",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": false,
        "type": "text",
        "label": "Address",
        "place_holder": "1234 Main St",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": true,
        "type": "text",
        "label": "Address 2",
        "place_holder": "1234 Main St",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": true,
        "type": "dropdown",
        "options": [
            {
                "label": "Country A",
                "value": 1
            },
            {
                "label": "Country A",
                "value": 1
            },
            {
                "label": "Country B",
                "value": 1
            },
            {
                "label": "Country C",
                "value": 1
            },
            {
                "label": "Country D",
                "value": 1
            }
        ],
        "label": "Country",
        "place_holder": "Choose...",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": true,
        "type": "dropdown",
        "options": [
            {
                "label": "State A",
                "value": 1
            },
            {
                "label": "State A",
                "value": 1
            },
            {
                "label": "State B",
                "value": 1
            },
            {
                "label": "State C",
                "value": 1
            },
            {
                "label": "State D",
                "value": 1
            }
        ],
        "label": "State",
        "place_holder": "Choose...",
        "icon": ""
    },
    {
        "form_element": "input",
        "optional": true,
        "type": "text",
        "label": "Zip",
        "place_holder": "",
        "icon": ""
    }
]
```

  ![Image of Step-1](https://github.com/ui-test/pse/blob/master/assets/images/input-form.png?raw=true)

Use Form Group and Reactive form for validation.
Note:
1.	Use Angular 2+ any version.
2.	Push the code in github and share the link.
3.	If you publish in Heroku its plus.

# Problems?
Feel free to contact us if something is not clear.

# LAB:Express-REST-API

in this file is the solution for the lab,
the function as you can see is 
├── .github
│   ├── workflows
│   │   └── node.yml
├── config
│   ├── config.json
├── __tests__
│   ├── server.test.js (integration test)
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── models
│   │   ├── index.js
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── routes
│   │   ├── food.js
│   │   └── clothes.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md

## Routes and CRUD:


### Add a Record

    1. Path: /food
    2. REST Method: POST
    3. CRUD Operation: create

### Get All Records

    1. Path: /food
    2. REST Method: GET
    3. CRUD Operation: Read


### Get One Record

    1. Path: /food/1
    2. REST Method: GET
    3. CRUD Operation: Read

    
### Update a Record

    1. Path: /food/1
    2. REST Method: PUT
    3. CRUD Operation: update


### Delete a Record

    1. Path: /food/1
    2. REST Method: DELETE
    3. CRUD Operation: destroy

## Testing
    The test has been applied in __test__ file and all tests have been passed 








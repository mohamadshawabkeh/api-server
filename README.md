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
├── ├──lib
│   │   ├── collection.js
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── models
│   │   ├── index.js
│   │   ├── food.model.js
│   │   ├── clothes.model.js
│   │   ├──cooker.model.js
│   ├── routes
│   │   ├── food.js
│   │   ├── cooker.js
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

### Cooker with foods 
**this path shows the cooker ID with the Food resigned in the same cooker ID**

    1. Path: /cookersfood/1
    2. REST Method: readCookersFood
    3. CRUD Operation: Read


## Testing
    The test has been applied in __test__ file and all tests have been passed 
    ✓ return Home (43 ms)
    ✓ return 404 in an invalid routes (11 ms)
    ✓ return 404 in an invalid method (11 ms)
    ✓ can add a food (39 ms)
    ✓ can read all food (41 ms)
    ✓ can update food (20 ms)
    ✓ can delete food (14 ms)

[tests](./testslab4.jpg)






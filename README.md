# MEANAPP

Created a full-fledged working application with below :
1. FrontEnd – Angular version 14
2. BackEnd –  Node js and Express
3. Database  - MongoDB

Features:
Login – This page will have feature for end user to login with username and password and this credential will be validated with database record. Note: JWT is not implemented as we can’t decode the token using open source. However, add the code for implemented JWT token.
Register new user – Here the end user will be an option to add the user for login with admin privilege 
Dashboard – Login username , role details
Details screen – Here all the records will be displayed in table 

Functionality:
1. Authentication – Username and password will be validated using mangodb record
2. Authorization – In return of login api call response will be returning role of the user either admin or employee
3. Session Management (using JWT or any other open-source token management tool) – JWT token is implemented as decode option is not possible for open source. However, add the code JWT token.
4. Role based access  - Based upon the role, in UI edit and delete will be enabled only for admin user access
5. Include functionality which covers CRUD operation with DB – Yes, able to create a employee , read or list the employee records , update an existing employee record and delete the existing employee record. Note: update and delete employee record only for admin role user.
6. Error Handling – Added proper handling in both UI and backend
7. Write test cases and coverage (for both frontEnd and backEnd code) – Written test cases for most of the components



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8. This project is to showcase MEAN application where the end users can able to the CRUD of employees and save it in MangoDB

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

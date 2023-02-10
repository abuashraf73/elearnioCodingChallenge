### Folder Structure Description

#### Services

1. Helperfunctions = This service is used for common functions or tasks which needs to be done in every page or component, so instead of creating them over and over again, I use this common services to inject what is necessary to the functions dynamically. 

2. Authentication = This service works as a medium or middle man to communicate any http call to the servers or backend APIs. Everything related to user's authentication is written to this service so that the authentication related things are not mixed up with the other services. 

Other services I often liked to use are Crud Services, Global Variable Services, etc etc

#### Pages

1. Login Page = First Page where user gives their credentials.

2. Calculation Page = Second Page where the expression is given. 


### GITHUB Repository Setup

Usually I would divide the project into testing and production branches. But for the simplicity of this project, I have simply put everything into Master branch.

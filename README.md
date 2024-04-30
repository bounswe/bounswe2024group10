# BOUN SWE 2024 Group 10
Hello there! 

# Our Team
![](https://drive.usercontent.google.com/download?id=1P4tUmZa-seWOQXgvEWMwBW0kaPj8Y36Z)
 
**More detailed info can be accessed on our members' personal pages listed below.**
* [Mesut Melih Akpınar](https://github.com/bounswe/bounswe2024group10/wiki/Mesut-Melih-Akpınar)
* [Gülşen Sabak](https://github.com/bounswe/bounswe2024group10/wiki/G%C3%BCl%C5%9Fen-Sabak)
* [Oğuzhan Tuncer](https://github.com/bounswe/bounswe2024group10/wiki/O%C4%9Fuzhan-Tuncer)
* [Onur Kafkas](https://github.com/bounswe/bounswe2024group10/wiki/Onur-Kafkas)
* [Yasin Atlı](https://github.com/bounswe/bounswe2024group10/wiki/Yasin-ATLI)
* [Yusuf Kağan Çiçekdağ](https://github.com/bounswe/bounswe2024group10/wiki/Yusuf-Kağan-Çiçekdağ)
* [Nazlıcan Aka](https://github.com/bounswe/bounswe2024group10/wiki/Nazlıcan-Aka) 
* [Ali Bartu Konca](https://github.com/bounswe/bounswe2024group10/wiki/Ali-Bartu-Konca)
* [Ömer Faruk Erzurumluoğlu](https://github.com/bounswe/bounswe2024group10/wiki/%C3%96mer-Faruk-Erzurumluo%C4%9Flu)
* [Hüseyin Karataş](https://github.com/bounswe/bounswe2024group10/wiki/H%C3%BCseyin%20Karata%C5%9F)

# Our Project
![](https://drive.usercontent.google.com/download?id=1ffmqwvph3Z4nXij6SElahwPEXjl-lG5Q)

Animal Trove is an application in which people can share animals they see all around the world. It is a perfect platform for the animal lovers and zoology community since exciting and rare animals can be shared with location info.

### You can access the project-related documents below.
* [Mockups](https://github.com/bounswe/bounswe2024group10/wiki/mockups)
* [Scenario-1](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-1), [Scenario-2](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-2), [Scenario-3](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-3), [Scenario-4](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-4), [Scenario-5](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-5), [Scenario 6](https://github.com/bounswe/bounswe2024group10/wiki/Scenario-6)
* [Elicitation Questions](https://github.com/bounswe/bounswe2024group10/wiki/Elicitation-Questions)
* [Requirements](https://github.com/bounswe/bounswe2024group10/wiki/Requirements)


  
# Animal Troove

## Getting Started
With the instructions given below, you can successfully build and run the application on your local machine for development and testing purposes.

## Prerequisites
In order to run the application, your machine needs to have
* Docker
* docker-compose

## Installing project
To install the project: go to the desired location in your machine and run ' git clone https://github.com/bounswe/bounswe2024group10.git'. Alternatively, one can download the code zip folder.

## Project Structure
After going to the root level of the project, you can access the src folder there. src folder contains backend,frontend and mobile codes.
#### Running Frontend 
Go to web/animaltrove folder.
Run 'npm i' to install project dependencies.
After installing dependencies, run 'npm start' in order to start development server.
You can access the development server on your browser on localhost:3000

#### Running Mobile App 
Go to mobile/animaltrove folder.
Run 'npm i' to install project dependencies.
After installing dependencies, run 'npm start' in order to start development server.
Metro bundler will return a qr code for expo.
Install expo on your mobile phone and scan the given qr code, then app will be started on your device.

#### Running Backend 
Go to backend/animaltrove folder.
run 'mvn spring-boot:run'
Then you can access the backend api on localhost:8080





## Environment Variables
You need to set up these necessary environment variables to run the application. Go to the root of your project and create .env file to keep environment variables. Fill the .env file with these variable.
#### Spring Boot Settings
```
spring.application.name=animaltrove
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/AnimalTrove?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
```

#### Frontend Environment Variables
```
baseUrl: http://localhost:8080
```

#### Mobile Environment Variables
```
baseUrl: http://10.0.2.2:8080
```

## docker-compose usage
Docker compose file helps us to build and run the backend, frontend and the mysql database through volume and image composition. To run the application, multiple images for the apps should be composed into the docker-compose and run there.

### Building the docker images: 
```
docker-compose build --no-cache
```

### Running docker containers
```
docker-compose up
```

By default, started web application will be running on localhost:3000 and the spring application will be running of localhost:8080 if no other port will specified in the application.properties file.




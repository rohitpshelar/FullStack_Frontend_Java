# FullStack_Java
React, Angular, VueJs Any Frontend can be connected to any Java Backend SpringBoot Or Quarkus
<img width="1920" height="1080" alt="Frontend Java (1)" src="https://github.com/user-attachments/assets/1904cc96-fa8f-4d3f-a356-90d2688e908a" />


Frontend
1. [AngularJs](Frontend/Angular/README.md)
2. [ReactJs](Frontend/React/README.md)
3. [VueJs](Frontend/VueJs/README.md)

Backend
1. [Spring Boot 3](Backend/SpringBoot/README.md)
   1. H2 Database URL : http://localhost:8080/h2-console
   2. H2 Database JDBC URL : jdbc:h2:mem:testdb / jdbc:h2:file:./Backend/SpringBoot/myh2db
   3. MySQL with Docker
      1. Make sure you have Docker installed and running on your machine.
      2. Add dependency in pom.xml
      ```
      developmentOnly("org.springframework.boot:spring-boot-docker-compose:3.4.13")
      ```
        3. Create a docker-compose.yml file in the root directory of your Spring Boot project with the following content: [docker-compose.yml](docker-compose.yml)
2. [Quarkus](Backend/quarkus/README.md)

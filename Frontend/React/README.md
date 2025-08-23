# React Tutorial

From :   [🔥ReactJS + Spring Boot Full-Stack Course [2025]](https://youtube.com/playlist?list=PLGRDMO4rOGcODJeYSY08lIILkqoydQI2k&si=fMDJOgtFb0q36g7Y)

<img width="1011" height="515" alt="image" src="https://github.com/user-attachments/assets/d48103b4-8291-41e7-a649-1cb6343dc37e" />

<img width="1056" height="591" alt="image" src="https://github.com/user-attachments/assets/bbb2fd1d-53e6-4a30-90a4-34d3e434d2f2" />

1. To create new project 
   1. Open desired folder on VS > Open Terminal > Add ```npm create vite@latest ems-react-frontend```
   2. app is created run ```npm run dev```
   3. To add port add in [vite.config.js](ems-react-frontend/vite.config.js)
   ```shell
   server:{
   port: 3000
      }
   ```
   4. Dependency are in [package.json](ems-react-frontend/package.json)
   5. Start Point [index.html](ems-react-frontend/index.html) > [main.jsx](ems-react-frontend/src/main.jsx) > [App.jsx](ems-react-frontend/src/App.jsx)
   6. Add BootStrap to React ``` npm install bootstrap --save ```
   7. Add ```import 'bootstrap/dist/css/bootstrap.min.css'``` in main.jsx
   8. Add ```className="btn btn-info"``` in [WelcomeJs.jsx](ems-react-frontend/src/WelcomeJs.jsx) :  (Ref - https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp)

2. Add list to react
   1. add plugin to VS as - `ES7+ React/Redux/React-Native snippets`
   2. Create new Component [ListEmployeeComponentDummy.jsx](ems-react-frontend/src/components/ListEmployeeComponentDummy.jsx) and type ```rcfe ``` to  auto generate code OR ```rafce``` to auto generate arrow function
   3. add this component [App.jsx](ems-react-frontend/src/App.jsx)

3. Install axios Library - For HTTP call - ```npm install axios --save```
4. Create service [EmployeeService.jsx](ems-react-frontend/src/services/EmployeeService.jsx) and Http call [ListEmployeeComponentRest.jsx](ems-react-frontend/src/components/ListEmployeeComponentRest.jsx)
5. Add ```@CrossOrigin("*")``` to [EmployeeController.java](../../Backend/src/main/java/com/javaguide/fullsatck_backend/controller/EmployeeController.java) to avoid ` has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`
6. 
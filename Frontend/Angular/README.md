# Angular Tutorial

1. Install Angular  - GOTO - https://angular.dev/tools/cli/setup-local
2. Run on terminal on desired folder  ``` npm install -g @angular/cli```
3. Check version ```ng --version```
4. Create project ```ng new my-app```
5. Run project ```ng serve```
6. INFO
   1. [package.json](ems-angular-frontend/package.json) is like build.gradle OR POM.xml
   2. FLow : [main.ts](ems-angular-frontend/src/main.ts) > [app.ts](ems-angular-frontend/src/app/app.ts)
7. Install Bootstrap to project ``` npm install bootstrap --save ```
8. Configure Bootstrap in [styles.css](ems-angular-frontend/src/styles.css) as ```@import "~bootstrap/dist/css/bootstrap.min.css"```
9. Create Employee class ```ng g class employee```
10. Create Component to get employee list ```ng g c employee-list```
11. Create dummy data [employee-list.ts](ems-angular-frontend/src/app/employee-list/employee-list.ts)
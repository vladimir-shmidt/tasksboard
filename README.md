# tasksboard
For project that uses angular 6 for frontend and asp .net core 2.1 for backend.

# start
Project consist of two parts. First angular frontend. You can build it with a help node.js installed on your computer. Simply install node.js then clone repository got to tasksfront folder and run 
```
npm install 
npm run start
```
Second is backend. You will have to obtain any IDE like Visual Studio or Studio Code. Also you have to install .ner core 2.1. For Visual Studio just open tasksapi/TasksAPI.sln and hit F5 for Studio Code 
```
dotnet run --project .\API\TasksAPI.csproj 
```
By default dotnet run will use properties from lunchSettings json where only IISExpress settings specified so you will have to change port for kestrel server. Other way is to go inside tasksfront\src\app\TaskSelectedService.ts and replace port in this.taskUrl to 5000
# AngularPractice

Front-End retrieved from Angular getting started tutorial, and connected to a Express Back-End.

Using Sequelize ORM to connect to a self hosted PostgresSQL database.

Use the command *node server.js* to start the backend, it will now use Sequelize to inject data on startup.

Use the command *ng serve --port 8081* to allow Front-End communication with the server.

Upcoming: there will be a new repository that will conatain a ASP.NET Core back-end that will use the https protocol. Change the baseURL inside the file src/app/services/product.service.ts to use https to consume the .NET web API.

Use the command *docker build -t yourdockerimage .* to use the Dockerfile and create an image of the project.

# TODO

Use Sequelize ORM to add data to table, allowing to have sample data when the Back-End is initialized.  <-- DONE

Search how to use style preprocesor and update the page styles. <-- DONE

Put the Back-End in another folder <-- DONE

Separate the Express server in another project <-- INCOMPLETE
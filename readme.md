### Installation

Requires [Node.js](https://nodejs.org/) v12+ to run.

-   Clone the Repo
-	Open terminal, and go to inside the repo folder then run npm install
    ```sh
    $ cd crudapi
    $ npm install -d
    ```
-	Prepare your mysql database credentials then export it as environment variables
    ```sh
    $ export NODE_DBHOST=localhost NODE_DBNAME=dbname NODE_DBUSER=root NODE_DBPASS=rootpwd
    ```
-   Alternatively you can change the config file in `./config/config.js` in development array
-	Now add tables needed for this app, use command below to add the tables. 
    ```sh
    $ npx sequelize-cli db:migrate
    ```
-   Finally run `npm start` to run the application

## Usage
you can run the API in your machine in port 3000 like `localhost:3000` using Postman, you can explore this [api doc](https://documenter.getpostman.com/view/281256/SzKPWMeT) to try it.

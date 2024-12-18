# Quiz Game Application

A test application made to run on AWS using Quarkus.


## Important Commands

### Run the application in dev mode
Backend runs locally at http://localhost:8080

```shell script
mvn compile quarkus:dev
```

### Deploy to AWS Lambda

Package the application with **Maven**. The AWS Lambda extension is used to generate the SAM template through this command.

```shell script
mvn clean package -DskipTests
```

Deploy the application using the **SAM CLI**. Answer the question about authentication with "**y**". Take the default answer for everything else.

```shell script
sam deploy -t target/sam.jvm.yaml -g
```


## Application setup

### Basic Requirements:
- [Java 17](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://youtu.be/Xatr8AZLOsE?si=4aSqgVlvjE3dsGuU)
- [Node.js](https://nodejs.org/en)
- AWS CLIs:
  - [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
  - [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
  - [Amplify CLI](https://docs.amplify.aws/cli/start/install)

### Extensions used:
- RESTEasy Classic
- RESTEasy Classic Jackson
- Quinoa
- Quarkus Amazon Lambda

More info found in the **pom.xml** file.

Starter code generated from [the Quarkus website](https://code.quarkus.io/).

### Creating a React JS frontend:
- generate React starter code
  - if not already installed: `npm install -g create-react-app`
  - `cd src/main`
  - `npx create-react-app frontend`
  - remove git files from the frontend folder
  - add src/main/frontend/node_modules/ to .gitignore
- install Axios (used to make HTTP requests to the backend)
  - `cd frontend`
  - `npm install axios`
- set up environment variables
  - more info at **frontend/src/config.js**
- enable CORS in the backend
  - more info at **java/resources/application.properties**
- runs locally at http://localhost:3000

### Deploying to AWS Lambda:
- Create an access key on your account in the AWS console
- Configure the AWS CLI with the access key & select a region
  - `aws configure`
- Run the commands in the **Deploy to AWS Lambda** section

### Deploying to AWS Amplify:
- Configure the Amplify CLI
  - `amplify configure`
  - Sign in
  - Select a region
  - Create a new user for Amplify
  - Create a new local AWS profile for Amplify
- Initialize the Amplify project
  - `amplify init`
  - Select 'y' to continue with Gen 1
- Push the project to the cloud
  - `amplify push`
- Configure the Home in AWS
  - Open the **Amplify** service in AWS
  - Find the deployed application
  - Give it permissions to access this GitHub repo
  - Select "My app is a monorepo" & enter the path to the frontend folder
  - Create/include an Amplify service role

Resource: [Building a React Home with Amplify (Gen 1), Cognito, and CI/CD](https://www.youtube.com/watch?v=ma1FA2be8Ac)

### Connecting the frontend to the backend in AWS:
-Open the **API Gateway** service in AWS
- Find the deployed API (created with Lambda)
- Create a new stage (like 'prod')
- Configure CORS with a '*' for:
  - Access-Control-Allow-Origin
  - Access-Control-Allow-Methods
  - Access-Control-Allow-Headers
- Deploy to the new stage

### Configure Cognito
- `amplify add auth`
- `amplify push`
- In the frontend: `npm install aws-amplify @aws-amplify/ui-react`
- Copy **amplifyconfiguration.json** and **aws-exports.js** to the frontend
- Add the following to the frontend **index.js** file:
  ```javascript
  import { Amplify } from 'aws-amplify';
  import config from './amplifyconfiguration.json';
  Amplify.configure(config);
  ```
Authentication details are controlled in the **AuthContext.js** file
Extra Cognito features:
- `npm install @aws-sdk/client-cognito-identity-provider`
- 

## Connecting to an RDS Database
- Open the **RDS** service in AWS
- Create a new database
- Recommended settings:
  - Creation method: Standard create
  - Engine: MySQL
  - Template: Free tier
  - Settings:
    - Change the DB instance identifier
    - Set the master username and password
  - Connectivity:
    - Public access: Yes
    - VPC security group: MySQLPublic
      - Inbound rules:
        - Type: MYSQL/Aurora 
        - Source: Anywhere IPv4
      - Outbound rules:
        - Type: All traffic 
        - Destination: Anywhere IPv4
- Connect to the database using MySQL Workbench (or another client):
  - Hostname: RDS database endpoint
  - Port: 3306
  - Username: from the RDS database (probably 'admin')
  - Password: from the RDS database
  - Create a new schema
- Connecting to Quarkus
  - Add these extensions: `mvn quarkus:add-extension -Dextensions="hibernate-orm-panache,jdbc-mysql"`
  - Add the following to the **application.properties** file:
    ```properties
    quarkus.datasource.db-kind=mysql
    quarkus.datasource.username= #username to RDS instance (probably admin)
    quarkus.datasource.password= #password to RDS instance
    quarkus.datasource.jdbc.url=jdbc:mysql://[RDS endpoint]:3306/[schema name]
    quarkus.hibernate-orm.database.generation=update
    ```


### Misc. Notes:
- **Ctrl + Alt + L**: Formats code in IntelliJ IDEA
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
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions)
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

### Extensions used:
- RESTEasy Classic
- RESTEasy Classic Jackson
- Quinoa
- Quarkus Amazon Lambda

More info found in the **pom.xml** file.

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
- runs locally at http://localhost:3000

### Misc. Notes:
- `aws configure`: Update/check AWS credentials (access key, secret key, region, output format)
- **Ctrl + Alt + L**: Format code in IntelliJ IDEA
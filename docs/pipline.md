

## version: 2.1
This specifies the version of the CircleCI configuration syntax being used.

## orbs: 
This section defines the orbs that will be used in the configuration. Orbs are reusable packages of CircleCI configuration that can be imported and used in multiple projects. In this case, three orbs are imported:
        
### node: 
This orb provides the Node.js environment for running the application.
### eb: 
This orb provides the AWS Elastic Beanstalk environment for deploying the server.
### aws-cli: 
This orb provides the AWS Command Line Interface (CLI) for interacting with AWS services.

## jobs: 
This section defines the jobs that will be executed by CircleCI. In this configuration, there are two jobs:

### frontend: 
This job is responsible for building and deploying the frontend of the application. It specifies the working directory, executor (Node.js), and a series of steps to be executed, such as checking out the code, installing dependencies, building the frontend, and deploying it to an S3 bucket.
### server: 
This job is responsible for deploying the server-side of the application. It specifies the working directory, executor (Node.js), and a series of steps to be executed, such as checking out the code, installing dependencies, setting up AWS CLI, setting up Elastic Beanstalk, and deploying the server.

## workflows: 
This section defines the workflows, which are sequences of jobs that are executed in a specific order. In this configuration, there is one workflow called build_and_deploy. It consists of three jobs:
### hold: 
This job is a manual approval step that holds the workflow until someone manually approves it. It is used to control when the deployment should happen.
### frontend: 
This job is executed after the hold job is approved. It builds and deploys the frontend.
### server: 
This job is also executed after the hold job is approved. It deploys the server-side of the application.

Overall, this config.yml file sets up the necessary environment, defines the steps for building and deploying the frontend and server, and specifies the workflow for executing these steps in the desired order.
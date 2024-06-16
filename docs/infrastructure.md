# Infrastructure Description

## Overview
This document provides an overview of the infrastructure used for hosting the application on AWS. It includes details about the server setup, databases, and other related components.

## AWS Services Used
### 1. Amazon RDS (Relational Database Service)
- **Purpose**: Hosting the application's database.
- **Instance Type**: db.t2.micro
- **Database Engine**: PostgreSQL
- **Endpoint**: http://usernote.clht8dmvrdos.us-east-1.rds.amazonaws.com
- **Status**: Available

### 2. AWS Elastic Beanstalk
- **Purpose**: Hosting the application's backend API.
- **Environment**: Node.js
- **Instance Type**: t2.micro
- **Health**: Healthy
- **Endpoint**: http://udacity-diagram-user-note-api2-dev.us-east-1.elasticbeanstalk.com

### 3. Amazon S3 (Simple Storage Service)
- **Purpose**: Hosting the application's frontend.
- **Bucket Name**: udacity-diagram-usernote
- **Region**: us-east-1
- **Status**: Publicly accessible

## Communication Between Services
- **Frontend (S3)** communicates with **Backend (Elastic Beanstalk)** via HTTP requests.
- **Backend (Elastic Beanstalk)** communicates with **Database (RDS)** using SQL queries.


## Additional Components
- **IAM Roles**: Used to manage permissions for accessing AWS services.
- **VPC (Virtual Private Cloud)**: Ensures secure communication between services.

## Conclusion
This document provides a high-level overview of the infrastructure setup for hosting the application on AWS. For more detailed information, refer to the individual service documentation.
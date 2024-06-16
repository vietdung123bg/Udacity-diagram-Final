import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: 'postgres',
  password: 'postgres',
  database: 'usernote',
  host: 'usernote.clht8dmvrdos.us-east-1.rds.amazonaws.com',
  aws_region: '',
  AWS_DEFAULT_REGION: '',
  aws_profile: '',
  aws_media_bucket: '',
  url: 'http://localhost:8080/',
  jwt: {
    secret: 'process.env.JWT_SECRET',
  },
  accessKeyId : '',
  secretAccessKey : ''
};

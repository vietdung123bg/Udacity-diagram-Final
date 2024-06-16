import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: 'postgres',
  password: 'postgres',
  database: 'usernote',
  host: 'usernote.clht8dmvrdos.us-east-1.rds.amazonaws.com',
  AWS_REGION: 'us-east-1',
  AWS_DEFAULT_REGION: 'AKIA25FZYOZK6O4GZ76J',
  AWS_PROFILE: 'myAdmin',
  aws_media_bucket: '',
  url: 'http://localhost:8080/',
  jwt: {
    secret: 'process.env.JWT_SECRET',
  },
  accessKeyId : '',
  secretAccessKey : ''
};

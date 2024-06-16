# Udacity-diagram-Final

# Hosting Full-Stack Application

### Udagram Application With AWS
* Hosting a Full Stack Application within the requirements for obtaining a Advanced Full Stack Web Development Certificate from Udacity


Go to the project directory

Install dependencies for api and frontend

```bash
  npm install or yarn install
```

Build final code to "www" upto S3

```bash
  npm run build
```


Start the server

```bash
  npm run dev
```

Now, Open Split Your Terminal or Open Another One and let's go to the Front-End
```bash
  cd ..
  cd udacity-diagram-usernote-frontend
```

Install dependencies

```bash
  npm install
```

Build final code to "www" upto S3

```bash
  npm run build
```

Start the server

```bash
  npm run start
```
# Before (for local run)
apiHost: 'http://localhost:8080/api/v0'
# After (when your backend API is hosted on Elastic Beanstalk)
apiHost: 'http://udacity-diagram-user-note-api2-dev.us-east-1.elasticbeanstalk.com/api/v0'



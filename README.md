This is the template for express applications using typescript. The almost necessary packages have been installed and ready to use. The folder structure is non-opiniated but, there will be a folder structure to use in various branches of the repo. Within these folders, barrel exports are used.

## Docker
A Dockerfile is setup for use. It is multistage build and will excluded sensitive files like .env file. This can be configured in .dockerignore file. A docker compose file has also been written to quickly starts up the docker container.

## ENV File
the env file should include
1. SERVICE_PORT
2. SERVICE_NAME


## Folder structure
Path ->  Index => Middlewares => Controllers => Handlers => Services => Models => Database
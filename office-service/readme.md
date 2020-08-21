## A nodejs REST service to return departments

Designed to run in a node:lts-alpine3.10 container

Exposes an http service endpoint on port 80 with the /office/ context path

eg:

http://{host}/office/

docker commands
sudo docker build -t offices .
sudo docker run -it --rm -d -p 8084:80 offices

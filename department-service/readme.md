## A nodejs REST service to return departments

Designed to run in a node:lts-alpine3.10 container

Exposes an http service endpoint on port 80 with the /department/ context path

eg

http://{host}/department/

docker commands:
sudo docker build -t departments .
sudo docker run -it --rm -d -p 8083:80 departments

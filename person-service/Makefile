build:
	sudo docker build -t person_image .

run:
	sudo docker run -it --rm --name person-service -p 8081:80 -d person_image  

debug:
	sudo docker exec -it person-service sh

logs:
	sudo docker logs person-service

follow:
	sudo docker logs -f person-service

stop:
	sudo docker stop person-service

clean:
	sudo docker rm person-service

curl:
	curl -sS localhost:8081/person/ | jq '.' 

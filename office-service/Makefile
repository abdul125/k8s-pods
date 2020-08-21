build:
	sudo docker build -t office_image .

run:
	sudo docker run -it --rm --name office-service -p 8084:80 -d office_image 

debug:
	sudo docker exec -it office-service sh

logs:
	sudo docker logs office-service

follow:
	sudo docker logs -f office-service

stop:
	sudo docker stop office-service

clean:
	sudo docker rm office-service

curl:
	curl -sS localhost:8084/office | jq '.' 


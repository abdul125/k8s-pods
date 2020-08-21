build:
	sudo docker build -t role_image .

run:
	sudo docker run -it --rm --name role-service -p 8082:80 -d role_image 

debug:
	sudo docker exec -it role-service sh

logs:
	sudo docker logs role-service

follow:
	sudo docker logs -f role-service

stop:
	sudo docker stop role-service

clean:
	sudo docker rm role-service

curl:
	curl -sS localhost:8082/role/ | jq '.'

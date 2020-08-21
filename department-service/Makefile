build:
	sudo docker build --tag department_image .

run:
	sudo docker run -t --name department-service -p 8083:80 -d department_image 

debug:
	sudo docker exec -it department-service sh

logs:
	sudo docker logs department-service

follow:
	sudo docker logs -f department-service

stop:
	sudo docker stop department-service

clean:
	sudo docker rm department-service

curl:	
	curl -sS localhost:8083/department | jq '.'
	#curl -sS http://ec2-157-175-62-126.me-south-1.compute.amazonaws.com:8083/department | jq '.' its gonna work only in this instance

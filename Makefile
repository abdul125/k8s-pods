
up:
	docker-compose up -d --build

down:
	docker-compose down

clean:
	docker rm -f $$(docker ps -qa)


build:
	sudo docker build -t project_assessment_image .

run:
	sudo docker run -it --rm --name project-assessment -p 80:80 -d project_assessment_image 

debug:
	sudo docker exec -it project-assessment sh

logs:
	sudo docker logs project-assessment

follow:
	sudo docker logs -f project-assessment

stop:
	sudo docker stop project-assessment

clean:
	sudo docker rm project-assessment

curl:
	curl -sS localhost:80 

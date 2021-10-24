build:
	docker-compose up -d --build

delete:
	docker stop $$(docker ps -aq)
	docker rm $$(docker ps -aq)
	docker images -q |xargs docker rmi
	docker system prune -f

list:
	docker images && docker ps -a

exec:
	docker exec -it web sh

logs:
	docker logs web -f

reset:
	make delete_docker
	make build_docker

run:
	docker exec -it web node dynamodb.js

test:
	curl -i localhost:80
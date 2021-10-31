build_docker:
	docker-compose up -d --build
	cd db/ && sh setup-db.sh

delete_docker:
	docker stop $$(docker ps -aq)
	docker rm $$(docker ps -aq)
	docker images -q |xargs docker rmi
	docker system prune -f
	cd db/ && rm -rf shared*

list_docker:
	docker images && docker ps -a

exec_docker:
	docker exec -it web sh

logs_docker:
	docker logs web -f

test_docker:
	docker exec -it web node dynamodb.js
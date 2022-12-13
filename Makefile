.DEFAULT_GOAL:=build

services=mongodb

env: env
	cp .env.example .env

build: build
	docker-compose --env-file .env build --no-cache ${services}

start: start
	docker-compose -f docker-compose.yml --env-file=.env up --force-recreate -d ${services}

stop: stop
	ocker-compose down

restart:
	make stop && make start

#!/bin/bash

# NOTE: move all variables to env?

CONTAINER_OPTIONS='-d -p 3002:80 --restart=always' # $1
CONTAINER_NAME='passportization-site' # $2
IMAGE_NAME='bargamut/passportization-site:latest' # $3

if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  docker stop $CONTAINER_NAME

  if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
      # cleanup
      docker rm $CONTAINER_NAME
  fi
fi

# run your container
docker run $CONTAINER_OPTIONS --name $CONTAINER_NAME $IMAGE_NAME

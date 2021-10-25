# dynamodb-local-sandbox

A simple local Dockerized sandbox environment to play around with the DynamoDB APIs using the AWS SDK for Javascript, DynamoDB and [Hapi](https://hapi.dev/).

| Service          | Image                                                                          | Container |
| -                | -                                                                              | -         |
| hapi_service     | [node:alpine](https://hub.docker.com/_/node)                                   | web       |
| dynamodb_service | [amazon/dynamodb-local:latest](https://hub.docker.com/r/amazon/dynamodb-local) | data      |

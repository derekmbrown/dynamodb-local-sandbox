# dynamodb-sandbox

A simple Dockerized local sandbox environment to play around with the DynamoDB APIs using the AWS SDK for Javascript and DynamoDB. [Hapi](https://hapi.dev/) is used to keep the Node container running and to build APIs to interact with the AWS SDK.

| Service          | Image                                                                          | Container |
| -                | -                                                                              | -         |
| hapi_service     | [node:alpine](https://hub.docker.com/_/node)                                   | web       |
| dynamodb_service | [amazon/dynamodb-local:latest](https://hub.docker.com/r/amazon/dynamodb-local) | data      |
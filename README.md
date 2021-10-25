# dynamodb-local-sandbox

A simple local Dockerized sandbox environment to practice using the DynamoDB APIs with [AWS SDK for Javascript](https://docs.aws.amazon.com/sdk-for-javascript/index.html), a local version of DynamoDB and [Hapi](https://hapi.dev/).

| Service          | Image                                                                          | Container |
| -                | -                                                                              | -         |
| hapi_service     | [node:alpine](https://hub.docker.com/_/node)                                   | web       |
| dynamodb_service | [amazon/dynamodb-local:latest](https://hub.docker.com/r/amazon/dynamodb-local) | data      |

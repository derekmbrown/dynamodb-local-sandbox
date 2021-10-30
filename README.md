# dynamodb-local-sandbox

A Dockerized local sandbox environment to interact with the DynamoDB APIs using [AWS SDK for Javascript](https://docs.aws.amazon.com/sdk-for-javascript/index.html), a [local version of DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html) and [Hapi](https://hapi.dev/).

| Service          | Image                                                                          | Container |
| -                | -                                                                              | -         |
| hapi_service     | [node:alpine](https://hub.docker.com/_/node)                                   | web       |
| dynamodb_service | [amazon/dynamodb-local:latest](https://hub.docker.com/r/amazon/dynamodb-local) | data      |

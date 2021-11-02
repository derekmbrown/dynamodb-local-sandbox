#!/bin/bash

# Create table
aws dynamodb create-table \
    --table-name TestDB \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url \
        http://localhost:8000 \
    --output \
        text >> /dev/null
echo 'Table created.'

# Load data into table
aws dynamodb batch-write-item \
    --request-items \
        file://data.json \
    --endpoint-url \
        http://localhost:8000 \
    --output \
        text >> /dev/null
echo 'Data loaded.'

sleep 2
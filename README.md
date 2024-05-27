## Star Wars API Fullstack Demo Project

This is a Next.js app using the app router, an Apollo Server backend, and a DynamoDB cache store. 
The Apollo Server is used to fetch data from the SWAPI API and store it in a local DynamoDB instance. 

This searches for Star Wars characters by name. The user can click on a character to view more details about them.

## DynamoDB 

This uses a local DynamoDB instance in Docker container. It treats the database as a cache store for when SWAPI api is not 
available. The main purpose is to demonstrate integrating with a remote API and storing data in a local database.

The table is created with the following command:

```commandline

1. Start DynamoDB locally with the docker-compose.yml file 
2. Setup table
    ```commandline
      aws dynamodb create-table \
        --endpoint-url http://localhost:8000 \
        --table-name 'Characters' \
        --attribute-definitions AttributeName=id,AttributeType=S \
        --key-schema AttributeName=id,KeyType=HASH \
        --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5   
   ```
3. Add the secondary name key
    ```commandline
       aws dynamodb update-table \
         --endpoint-url http://localhost:8000 \
         --table-name 'Characters' \
         --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S \
         --global-secondary-index-updates \
            "[{"Create\":{\"IndexName\": \"NameIndex\",\"KeySchema\":[{\"AttributeName\":\"id\",\"KeyType\":\"HASH\"},{\"AttributeName\":\"name\",\"KeyType\":\"RANGE\"}],\"ProvisionedThroughput\": {\"ReadCapacityUnits\": 5,\"WriteCapacityUnits\": 5},\"Projection\":{\"ProjectionType\":\"ALL\"}}}]"   
   ```

## Challenges

I was not able to get tests to mock modules either through relative or absolute module names. I left the ones I did create in a skipped state. For this branch with 
ApolloServer I also hit some issues with App router and mocking ApolloClient. I have starting to wonder if using the latest of Next.js is part of the issue here.

# Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

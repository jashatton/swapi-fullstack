import {DynamoDBClient} from "@aws-sdk/client-dynamodb"
import {DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand} from "@aws-sdk/lib-dynamodb"
import {Character} from "@/app/clientApi"

export async function findCharacterByName(name: string) {
  const command = new QueryCommand({
    TableName: "Characters",
    IndexName: "NameIndex",
    KeyConditionExpression: "begins_with(#name, :name)",
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ExpressionAttributeValues: {
      ":name": name,
    },
  });

  return await docClient.send(command);
}


const client = new DynamoDBClient({
  region: "us-east-1",
  endpoint: "http://localhost:8000",
})
const docClient = DynamoDBDocumentClient.from(client)

export function saveCharacter(character: Character) {
  return docClient.send(new PutCommand({
    TableName: "Characters",
    Item: character,
  }))
}

export async function getCharacterById(id: string): Promise<Character> {
  const command = new GetCommand({
    TableName: "Characters",
    Key: {
      id,
    },
  })
  const response = await docClient.send(command)
  return response.Item as Character
}


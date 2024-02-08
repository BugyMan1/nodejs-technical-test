import { config, DynamoDB } from 'aws-sdk';

config.update({ region: 'us-east-1' });
const dynamodb = new DynamoDB.DocumentClient();

export default dynamodb;

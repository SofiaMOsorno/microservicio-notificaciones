import { SNSClient } from '@aws-sdk/client-sns';
import * as dotenv from 'dotenv';

dotenv.config();

const awsConfig = {
    region: process.env.AWS_REGION || 'us-east-1'
};

export const snsClient = new SNSClient(awsConfig);

export const config = {
    snsTopicArn: process.env.SNS_TOPIC_ARN || ''
};
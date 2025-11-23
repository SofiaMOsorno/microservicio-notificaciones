import { SNSClient } from '@aws-sdk/client-sns';
import { fromIni } from '@aws-sdk/credential-provider-ini';
import * as dotenv from 'dotenv';

dotenv.config();

const awsConfig = {
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: process.env.AWS_PROFILE 
        ? fromIni({ profile: process.env.AWS_PROFILE })
        : fromIni({ profile: 'default' })
};

export const snsClient = new SNSClient(awsConfig);

export const config = {
    snsTopicArn: process.env.SNS_TOPIC_ARN || ''
};
const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: 'us-east-1' 
  });
const lambda = new AWS.Lambda();

const params = {
FunctionName: 'mySecondFn', 
InvocationType: 'RequestResponse', 
Payload: JSON.stringify({ "cookie": "cookie-value", "iterationTimes": 2 }) 
};

lambda.invoke(params, (err, data) => {
if (err) {
    console.error('Error calling Lambda function:', err);
} else {
    console.log('Lambda function response:', JSON.parse(data.Payload));
}
});

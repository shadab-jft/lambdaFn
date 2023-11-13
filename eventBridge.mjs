import AWS from 'aws-sdk';

export const handler = async (event) => {
  // TODO implement
  const region = 'us-east-1';
  AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: region,
  });

  const eventBridge = new AWS.EventBridge({ region });
  const eventBusName = 'arn:aws:events:us-east-1:115799093397:event-bus/default';
  const eventDetails = {
    source: 'cron-job',
    detailType: 'myCustomEvent',
    detail: JSON.stringify({timeStamp: new Date(), cronjobName: 1, }),
    eventBusName: eventBusName,
  };
  
  // Publish the event
  const params = {
    Entries: [
      {
        Source: eventDetails.source,
        DetailType: eventDetails.detailType,
        Detail: eventDetails.detail,
        EventBusName: eventDetails.eventBusName,
        Time: new Date()
      },
    ],
  };
  eventBridge.putEvents(params, (err, data) => {
  if (err) {
    console.error('Error publishing event:', err);
  } else {
    console.log('Event published successfully:', data);
  }
  });
};

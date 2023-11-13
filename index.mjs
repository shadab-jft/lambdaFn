import { apiCall } from "./apiCall.mjs";
import 'dotenv/config'
export const handler = async (event) => {
  const body = event.detail
  const cronjobName = body.cronjobName;
  const timeStamp = body.timeStamp;
  const apiUrl = `${process.env.apiUrl}${cronjobName}`;
  try {
    const response = await apiCall(apiUrl);
    response.cronjobName = cronjobName;
    response.timeStamp = timeStamp;
    return response;
  } catch (error) {
    error.cronjobName = cronjobName;
    error.timeStamp = timeStamp;
    console.log(error);
    throw error;
  }
};

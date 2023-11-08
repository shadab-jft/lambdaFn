import { apiCall } from "./apiCall.mjs";
import 'dotenv/config'
export const handler = async (event) => {
  const cronjobName = event.cronjobName;
  const timeStamp = event.timeStamp;
  const apiUrl = `${process.env.apiUrl}${cronjobName}`;
  try {
    const response = await apiCall(apiUrl);
    return response;
  } catch (error) {
    error.cronjobName = cronjobName;
    error.timeStamp = timeStamp;
    console.log(error);
    throw error;
  }
};

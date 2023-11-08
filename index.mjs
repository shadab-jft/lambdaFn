import { apiCall } from "./apiCall.mjs";
export const handler = async (event) => {
  const cronjobName = 1;
  const timeStamp = new Date().toISOString();
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

console.log(await handler({}));

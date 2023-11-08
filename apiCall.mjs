import fetch from "node-fetch";
export const apiCall = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const error = {};
      error.message = `API Error: Status ${response.status} Error: ${JSON.stringify(response)}`;
      error.status = response.status;
      throw error;
    } else {
      const responseJson = await response.json();
      return { message: `Message: ${JSON.stringify(responseJson)}` , status:response.status};
    }
  } catch (error) {
    throw error;
  }
};

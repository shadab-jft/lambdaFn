import fetch from 'node-fetch'
export const handler = async (event)=>{
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    const cookie = event.cookie;
    async function makeApiCall() {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers:{
            // 'Cookie':cookie
          }
        });

        const responseJson = await response.json();
        if (!response.ok) 
          return {error: `API Error: Status ${response.status} Error: ${JSON.stringify(responseJson)}`};
        else 
          return {message: `Message: ${JSON.stringify(responseJson)}`};
      } catch (error) {
        return {error: `Error in makeApiCall: ${error}`};
      }
    }
    return makeApiCall();
}
// console.log(await handler({}));
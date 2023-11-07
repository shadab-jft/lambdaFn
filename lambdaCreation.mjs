import fetch from 'node-fetch'
export const handler = async (event)=>{
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    const cookie = event.cookie;
    const iterationTimes = event.iterationTimes;
    let responseJson;
    async function makeApiCall() {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers:{
            // 'Cookie':cookie
          }
        });
        responseJson = await response.json();
        if (!response.ok) {
          console.error(`API Error: Status ${response.status} Error: ${JSON.stringify(responseJson)}`);
        } else {
          console.log(`Message: ${JSON.stringify(responseJson)}`);
        }
      } catch (error) {
        console.error('Error in makeApiCall:', error);
      }
    }
  
    for (let i = 0; i < iterationTimes; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      makeApiCall();
    }
    return {message:"Call Completed"}
}
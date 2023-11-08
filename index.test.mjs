import * as handler from './index.mjs';
import {jest} from '@jest/globals';
describe('handler method',()=>{
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should successfully give 200 for correct url', async() => {
    jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos/');
    let result = await handler.handler({cronjobName:1});
    console.log(result);
    expect(result.status).toBe(200);
  });
  
  it('should give status 404 for wrong route', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos12/');
      let result = await handler.handler({cronjobName:1});
      console.log(result.status);
    }
    catch(e){
      expect(e.status).toBe(404);
    }
  });
  
  it('should give status 404 if resource not found', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos/100000');
      let result = await handler.handler({cronjobName:1});
      console.log(result.status);
    }
    catch(e){
      expect(e.status).toBe(404);
    }
  });
  
  it('should give throw error if error occured while hitting url', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicodeWrong.com/todos12/');
      let result = await handler.handler({cronjobName:1});
      console.log(result.status);
    }
    catch(e){
      expect(e).toBeInstanceOf(Error)
    }
  });
})


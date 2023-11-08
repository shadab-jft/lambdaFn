import * as handler from './index.mjs';

it('should successfully give response', async() => {
  let result = await handler.handler({cronjobName:1});
  console.log(result);
  expect(result).toMatchObject({
    message: 'Message: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}'
  });
});


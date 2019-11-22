# NextPro

```javascript
import request from 'supertest';
import app from 'core';


describe('demo test', () => {
  afterAll((done) => {
    app.close(done);
  });

  it('Test boy', async () => {
    const response = await request(app.callback()).get('/api/test');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
```

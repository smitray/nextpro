---
name: NextPro
menu: Home
route: /
---

# NextPro

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/60f4004b9e174f05bca20f6669d697ec)](https://www.codacy.com/manual/smitray/nextpro?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=smitray/nextpro&amp;utm_campaign=Badge_Grade)

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

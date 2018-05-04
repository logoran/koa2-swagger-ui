const request = require('supertest');

const app = require('../examples/example');

const json = require('../package.json');

describe('logoran-swagger-ui', function() {
  it('should return index file', function() {
    return request(app.callback())
      .get('/docs')
      .expect('Content-Type', /html/)
      .expect(/href="\.\/favicon-16x16\.png" sizes="16x16"/)
      .expect(/href="\.\/favicon-32x32\.png" sizes="32x32"/)
      .expect(200);
  });
  it('should return icon16x16', function() {
    return request(app.callback())
      .get('/favicon-16x16.png')
      .expect('Content-Type', /png/)
      .expect(200);
  });
  it('should return icon32x32', function() {
    return request(app.callback())
      .get('/favicon-32x32.png')
      .expect('Content-Type', /png/)
      .expect(200);
  });
  it('should return index file from logoran router', function() {
    return request(app.callback())
      .get('/moredocs')
      .expect('Content-Type', /html/)
      .expect(/href="\/unexisted16\.png" sizes="16x16"/)
      .expect(/href="\/unexisted32\.png" sizes="32x32"/)
      .expect(200);
  });
  it('should return index file from logoran router', function() {
    return request(app.callback())
      .get('/mountdocs/docs')
      .expect('Content-Type', /html/)
      .expect(/href="\.\/favicon-16x16\.png" sizes="16x16"/)
      .expect(/href="\.\/favicon-32x32\.png" sizes="32x32"/)
      .expect(200);
  });
  it('should return icon16x16', function() {
    return request(app.callback())
      .get('/mountdocs/favicon-16x16.png')
      .expect('Content-Type', /png/)
      .expect(200);
  });
  it('should return icon32x32', function() {
    return request(app.callback())
      .get('/mountdocs/favicon-32x32.png')
      .expect('Content-Type', /png/)
      .expect(200);
  });
  it('should return css', function() {
    const url = `https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/${json.devDependencies['swagger-ui-dist']}`;
    return request(url)
      .get('/swagger-ui.css')
      .expect('Content-Type', 'text/css')
      .expect(200);
  });
});

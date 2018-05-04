const Logoran = require('logoran');
const logoranSwagger = require('../lib/');
const router = require('logoran-router')();

const app = new Logoran();
module.exports = app;

app.use(logoranSwagger());

router.get('/moredocs', logoranSwagger({ routePrefix: false }));

app
  .use(router.routes())
  .use(router.allowedMethods());

/* istanbul ignore if */
if (!module.parent) {
  app.listen(3000);
  console.log('listening on: http://localhost:3000/docs');
}

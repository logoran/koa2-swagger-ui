const Logoran = require('logoran');
const logoranSwagger = require('../lib/');
const router = require('logoran-router')();
const mount = require('logoran-mount');

const app = new Logoran();
module.exports = app;

app.use(logoranSwagger());

router.get('/moredocs', logoranSwagger({ routePrefix: false, favicon16: '/unexisted16.png', favicon32: '/unexisted32.png' }));
app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(mount('/mountdocs', logoranSwagger({ routePrefix: '/mountdocs' })));

/* istanbul ignore if */
if (!module.parent) {
  app.listen(3000);
  console.log('listening on: http://localhost:3000/docs');
}

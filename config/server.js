module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'http://cms.u131499.test-handyhost.ru',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
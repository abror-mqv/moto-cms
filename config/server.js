module.exports = ({ env }) => ({
  host: env('HOST', '192.168.0.107'),
  port: env.int('PORT', 1337),
  // url: 'http://cms.u131499.test-handyhost.ru',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
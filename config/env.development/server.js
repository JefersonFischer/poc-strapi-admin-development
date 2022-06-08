module.exports = ({ env }) => ({
  proxy: true,
  url: env('WEBSITE_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
});
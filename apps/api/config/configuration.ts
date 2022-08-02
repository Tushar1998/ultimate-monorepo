export default () => ({
  log          : { level: process.env.LOG_LEVEL || 'default' },
  microservices: {
    service: {
      host: process.env.IAM_MICROSERVICE_HOST,
      port: process.env.IAM_MICROSERVICE_PORT,
    },
  },
  http_port : process.env.HTTP_PORT ?? '8000',
  http_port2: process.env.HTTP_PORT2 ?? '8001',
  auth0     : {
    domain  : process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
  },
  root: {
    mongo_uri: process.env.ROOT_MONGO_URI,
  },
});

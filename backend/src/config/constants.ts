const config = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL
  || 'postgres://postgres:password@localhost:5432/junctiondb',
  SECRET_KEY: '308Lcik3jGRru*xcTMgAaXw)aSWYKm5!',
};

export default config;

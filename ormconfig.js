var path = require("path");

console.log(path.resolve(__dirname, process.env.DATABASE_ENTITY_DIRECTORY));
console.log(path.resolve(__dirname, "./src/migrations/**/*.ts"));

module.exports = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: process.env.TYPE_ORM_LOGGING,
  entities: [path.resolve(__dirname, process.env.DATABASE_ENTITY_DIRECTORY)],
  migrations: [path.resolve(__dirname, process.env.DATABASE_MIGRATIONS_DIRECTORY)],
  subscribers: [path.resolve(__dirname, process.env.DATABASE_SUBSCRIBERS_DIRECTORY)],
  cli: {
    entitiesDir: process.env.TYPE_ORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPE_ORM_MIGRATIONS_DIR,
    subscribersDir: process.env.TYPE_ORM_SUBSCRIBERS_DIR
  }
};

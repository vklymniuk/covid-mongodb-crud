import { config } from 'dotenv';
config();

export const configs = {
    'covid': {
        mongoUrl: process.env.MONGO_COVID_CONNECTION_URL || 'mongodb://username1:password1@localhost:27017',
        mongoDBName: process.env.MONGODB_COVID_DB_NAME || 'covid',
        mongoCollectionName: process.env.MONGO_COVID_COLLECTION_NAME || 'vaccine',
        mongoSchemaName: process.env.MONGO_COVID_SCHEMA_NAME || 'Vaccine'
    },
    'migrations': {
        mongoUrl: process.env.MONGO_MIGRATIONS_URL || 'mongodb://username1:password1@localhost:60995',
        mongoDBName: process.env.MONGODB_MIGRATIONS_DB_NAME || 'migrations_database',
        mongoCollectionName: process.env.MONGO_MIGRATIONS_COLLECTION_NAME || 'migrations',
        mongoSchemaName: process.env.MONGO_MIGRATIONS_SCHEMA_NAME || 'Migration'
    }
};


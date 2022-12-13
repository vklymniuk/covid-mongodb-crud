import {Db, MongoClient} from 'mongodb';
import { configs } from '../../config/configuration';

const MONGO_URL = configs.covid.mongoUrl;
const MONGO_DATABASE_NAME = configs.covid.mongoDBName;

export const getDb = async (): Promise<Db> => {
    const client: any = await MongoClient.connect(MONGO_URL);
    // const client: any = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true });

    return client.db(MONGO_DATABASE_NAME);
};
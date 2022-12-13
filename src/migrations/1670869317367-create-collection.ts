import { getDb } from '../migrations-utils/db';
import { configs } from '../../config/configuration';
import { Collection, Db } from "mongodb";

export const up = async () => {
    const db: Db = await getDb();
    const config = configs.covid;

    return db.createCollection(config.mongoCollectionName);
};

export const down = async () => {
    const db = await getDb();
    const config = configs.covid;

    return db.dropCollection(config.mongoCollectionName);
};
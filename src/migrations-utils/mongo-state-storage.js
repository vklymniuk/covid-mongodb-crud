'use strict'
const migrate = require('migrate');
const {configs} = require("../../config/configuration");
// const {configs} = require("../../config/configuration");
const MongoClient = require('mongodb').MongoClient;
// const configs = require('../../config/configuration');

class MongoDBStore {

    async up (fn) {
        let client = null;
        let data = null;

        console.info({"asdasd": 3434});

         return fn(null, {});
    };

    async init (fn) {
        let client = null;
        let data = null;

        try {
            const { configs } = require('../../config/configuration');
            const config = configs.migrations;

            client = await MongoClient.connect(config.mongoUrl);
            const db = await client.db(config.mongoDBName);
            await db.createCollection(config.mongoCollectionName);

        } catch (err) {
            console.error(err);

            throw err;
        } finally {
            client.close();

            console.info(`wwqeqwe`);
        }
        // } finally {
        //     client.close();
        // }

        // return fn(null, data[0]);
    }

    async list (fn) {
        let client = null;
        let data = null;

        console.info({"fcvlkfvblm": 3434});

        return fn(null, {});
    };

    async load (fn) {
        let client = null;
        let data = null;

        try {
            const { configs } = require('../../config/configuration');
            const config = configs.migrations;

            client = await MongoClient.connect(config.mongoUrl);
            const db = client.db();
            data = await db.collection(config.mongoCollectionName).find().toArray();

            console.log(data);
            if (data.length !== 1) {
                let msg = 'Cannot read migrations from database. If this is the first time you run migrations, then this is normal.';
                console.info(msg);

                return fn(null, {});
            }

            // client.close();
            // await client.close();
            // return fn(null, data[0]);
        } catch (err) {
            console.error(err);

            throw err;
        } finally {
            client.close();
        }

        return fn(null, data[0]);
    };

    async save (set, fn) {
        let client = null;
        let result = null;

        try {
            const { configs } = require('../../config/configuration');
            const config = configs.migrations;

            client = await MongoClient.connect(config.mongoUrl);
            const db = client.db();
            result = await db.collection(config.mongoCollectionName)
                .update({}, {
                    $set: {
                        lastRun: set.lastRun
                    },
                    $push: {
                        migrations: { $each: set.migrations }
                    }
                }, { upsert: true });

        } catch (err) {
            console.error(err);

            throw err;
        } finally {
            client.close();
        }

        return fn(null, result);
    }
}


migrate.load({
    // Set class as custom stateStore
    stateStore: new MongoDBStore()
}, function (err, set) {
    if (err) {
        throw err;
    }

    // set.
    // set.up((err2) => {
    //     console.log('14123243');
    //
    //     if (err2) {
    //         throw err2;
    //     }
    //
    //     console.info('Migrations successfully run');
    // })
});

// module.exports.uo = migrate;
module.exports = MongoDBStore;


Documentation about launching a application 
to Makefile:
    prepare variables
        launch database docker
            execute migrations
            insert seeddata
            run tests
            generate swagger api
            start web server


[//]: # (TODO): path migrations with remote database store
[//]: # ("migrate:down": "migrate --migrations-dir=\"./src/migrations\" --compiler=\"ts:./src/migrations-utils/ts-compiler.js\" --store=\"./src/migrations-utils/mongo-state-storage.js\" down")
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(JSON.stringify(obj));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('connect to mongodb server sucsessful');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("61be1f7b2999cb47b8746c89")
    // }, {
    //     $set: {
    //         contury: 'WNS',
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("61b818ddc1a865189cc79f73")
    }, {
        $set: {
            name: 'Mohamed'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOrigin: false
    }).then((res) => {
        console.log(res)
    });

});
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(JSON.stringify(obj));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('connect to mongodb server sucsessful');

    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    //         console.log(JSON.stringify(doc, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     })
    db.collection('Users').find({ name: 'Mohamed' }).toArray().then((doc) => {
            console.log('Users');
            console.log(JSON.stringify(doc, undefined, 2))
        }, (err) => {
            console.log("Unable to get users ", err)
        })
        // db.close();
});
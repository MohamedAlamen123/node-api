const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(JSON.stringify(obj));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('connect to mongodb server sucsessful');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // insert new doc into users (name, age, location)
    db.collection('Users').insertOne({
        name: 'Mohamed',
        age: 22,
        location: 'Sudan, Khartom'
    }, (err, data) => {
        if (err) {
            return console.log('Unable to insert Record', err);
        }
        console.log(JSON.stringify(data.ops[0]._id.getTimestamp()))
    })
    db.close();
});
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(JSON.stringify(obj));

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err);
    }
    console.log('connect to mongodb server sucsessful');

    // delete Many 
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((res) => {
    //     console.log(res);
    // });

    // delete One
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((res) => {
    //     console.log(res);
    // })

    ////////////////////////chalange///////////////////////////
    //deleteMany
    db.collection('Users').deleteMany({ name: "Mohamed" }).then((res) => {
        console.log(res);
    });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("61b96d23c2166d40ec8aa44c")
    }).then((res) => {
        console.log(res);
    })
});
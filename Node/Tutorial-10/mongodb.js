// Insert Data in MongoDB Database
// const mongodb = require('mongodb');
// const MongoClient  = mongodb.MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

const id = new ObjectId();
console.log(id.getTimestamp());


const URL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(URL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!');
    } else {
        const db = client.db(databaseName);
        // db.collection ('users').insertOne( {
        //     name: "Rwitesh Bera",
        //     age: 20,
        //     roll: 151,
        //     country: "India"
        // }, (error, result) => {
        //     if (error) {
        //         console.log('Unable to insert user');
        //     } else {
        //         console.log('Connected to database');
        //     }
        // })

        // db.collection('tasks').insertMany ( [
        //     {
        //         name: 'Jen',
        //         age: 28
        //     }, {
        //         name: 'Dale',
        //         age: 30
        //     }
        // ], (error, result) => {
        //         if(error) {
        //             return console.log("Unable to insert");
        //         }

        //         // console.log(result);
        // })

        db.collection('tasks').findOne({name: "Dale"}, (error, user) => {
             if (error) {
                return console.log('Unable to fetch');
             }
             console.log(user.name);
             console.log(user.age);
        })
    }
})
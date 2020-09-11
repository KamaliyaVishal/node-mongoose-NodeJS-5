const mongoose = require('mongoose');
const Dishes = require('./dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

console.log('Connecting to ' + url + ' server');
connect.then(() => {
    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Uthapizza',
        description: 'Test'
    })
        .then((dish) => {
            //console.log('\n' + dish);

            return Dishes.findByIdAndUpdate(dish._id, {
                $set: { description: "Updated Test" }
            }, {
                new: true
            })
        })
        .then((dish) => {
            console.log("\n" + dish);

            dish.comment.push({
                rating: 5,
                comment: 'I\'m getting a sinking feeling!',
                author: 'Leonardo di Carpaccio'
            });

            return dish.save();
        })
        .then((dish) => {
            console.log("\n " + dish);
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

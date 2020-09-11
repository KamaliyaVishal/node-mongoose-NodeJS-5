const mongoose = require('mongoose');
const Dishes = require('./dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

console.log('Connecting to ' + url + ' server');
connect.then(() => {
    console.log('Connected correctly to server');

    var newDish = Dishes({
        name: 'Uthappizza4',
        description: 'test4'
    });

    newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);

            return  .remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

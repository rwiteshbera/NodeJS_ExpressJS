const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rwiteshbera', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model('myUser', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(val) {
            if(val < 0) {
                throw new Error('Age must be a positive number')
            } 
        }
    }
})


const me = new User({
    name: "Rwitesh",
    age: 20
});

me.save()
.then(() => {
    console.log(me);
})
.catch(() => {
    console.log("Error!");
})
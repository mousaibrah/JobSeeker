const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
// Connect MongoDB at default port 27017.
mongoose.connect(`${process.env.DB_URI}`)
.then(() => console.log('The DP Is Up And Running'))
.catch((err) => console.log(err));

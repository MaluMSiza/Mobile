const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/lanchesFESA';
mongoose.connect(url, { useNewUrlParser: true }); // https://mongoosejs.com/docs/5.x/docs/deprecations.html

module.exports = mongoose;

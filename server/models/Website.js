
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var WebsiteSchema = new Schema({
  name: String,
  url: String,
  visable:{
    type: Boolean,
  default: false}
});
module.exports = mongoose.model('Website', WebsiteSchema);

/* example methods
function getAll() {
  Blog.find()
}
function getOne(err, id) {
if(err){throw err}
  Blog.find(id)
}
function findAndDelete(err, id) {
getOne(id).delete()
}
function findAndUpdate(err, id) {

}
*/

// make this available to our users in our Node applications


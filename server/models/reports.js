var mongoose = require('mongoose');
require('dotenv').config()
// mongoose.connect('mongodb://localhost/lamas');
mongoose.connect (`mongodb://${process.env.DUSER}:${process.env.DPASS}@${process.env.DBASS}`)
var Schema = mongoose.Schema;

var reportSchema = new Schema({
  fbID:String,
  name:String,
  email:String,
  imagepostUrl:String,
  imageuserUrl:String,
  postedAt: Date,
  headline:String,
  detail:String,
  votes:[{voterid:String,votername:String,votermail:String,voterimageUrl:String,voteAt:Date}]
});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;

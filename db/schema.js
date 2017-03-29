var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

// added
// var ProjectIdea = Schema.ProjectIdea;
// module.exports = ProjectIdea;
// post / route
var ClientSchema = new Schema({
  first_name: String,
  last_name: String,
  email: Number,
  phone_number: Number,
  notes: String,
});

var CoachSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  created_at: String,
  updated_at: String,
  username: String,
  password: String,
  clients: [ClientSchema]
});

CoachSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

CoachSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

var CoachModel = mongoose.model("Coach", CoachSchema);
var ClientModel = mongoose.model("Client", ClientSchema);

module.exports = {
  Coach: CoachModel,
  Client: ClientModel
};

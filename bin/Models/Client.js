const User = require('./User');

class Client extends User {
  /**
   * Initates the Client object.
   * @param {object} options
   */
  constructor(options) {
    super(options);

    this.problem = options.problem || {
       other: false,
       pref_post: false,
       description: ""
     };
    this.reps = options.reps || [];
    this.state = options.state || "waiting";
  }

  //region State
  setState(state) {this.state = state;}

  getState() {return this.state;}
  //endregion

  //region Reps
  addRep(rep) {this.reps.push(rep);}

  removeRep(rep) {this.reps.splice(this.reps.indexOf(rep), 1);}

  resetReps() {this.reps = [];}

  getReps() {return this.reps;}
  //endregion
}

module.exports = Client;
class Client {
  /**
   * Initates the Client object.
   * @param {object} options
   */
  constructor(options) {
     this.email = options.email || "";
     this.socketId = options.socketId || "";
     this.username = options.username || "";
     this.problem = options.problem || {
       other: false,
       pref_post: false,
       description: ""
     };
     this.reps = options.reps || [];
     this.state = options.state || "waiting";
  }

  /**
   * Sets the client's email
   * @param {String} email
   */
  setEmail(email) {this.email = email;}

  /**
   * Sets the client's socket id
   * @param {String} socketId
   */
  setSocketId(socketId) {this.socketId = socketId;}

  /**
   * Sets the client's username'
   * @param {String} username
   */
  setUsername(username) {this.username = username;}

  /**
   * Sets the client's state
   * @param {String} state
   */
  setState(state) {this.state = state;}

  /**
   * Adds rep that attedning to the client
   * @param {String} rep
   */
  addRep(rep) {this.reps.push(rep);}

  /**
   *
   * @param {String} rep
   */
  removeRep(rep) {this.reps.splice(this.reps.indexOf(rep), 1);}

  /**
   *
   */
  getEmail() {return this.email;}

  getSocketId() {return this.socketId;}

  getUsername() {return this.username;}

  getProblem() {return this.problem;}

  getReps() {return this.reps;}

  getState() {return this.state;}
}

module.exports = Client;
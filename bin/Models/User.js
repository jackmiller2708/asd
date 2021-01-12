class User {
  constructor(options) {
    this.email     = options.email || "";
    this.username  = options.username || "";
    this.socketIds = options.socketIds || [];
  }

  //region  Email
  setEmail(email) {this.email = email;}

  getEmail() {return this.email;}
  //endregion

  //region Username
  setUsername(username) {this.username = username;}

  getUsername() {return this.username;}
  //endregion

  //region  Socket ID
  getSocketIds() {return this.socketIds;}

  addSocketId(socketId) {this.socketIds.push(socketId);}

  removeSocketId(socketId) {this.socketIds.splice(this.socketIds.indexOf(socketId), 1);}
  //endregion
}

module.exports = User;
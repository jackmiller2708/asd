const User = require('./User');

/**
 * Represents an Admin object.
 */
class Admin extends User{
  /**
   * Initialzes the admin object
   * @param {object} options
   */
  constructor(options) {
    super(options);

    this.position = options.position || "";
    this.clients  = options.clients  || [];
  }

  //#region Position
  /**
   * Sets the admin's position.
   * @param {String} position
   */
  setPosition(position) {this.position = position;}

  /**
   * @returns {String} the admin's position.
   */
  getPosition() {return this.position;}
  //#endregion

  //#region Clients
  /**
   * Addes the client id to the active client list.
   * @param {String} client
   */
  addClient(client) {this.clients.push(client);}

  /**
   * Removes client id from the active client list.
   * @param {String} client the client to be removed.
   */
  removeClient(client) {this.clients.splice(this.clients.indexOf(client), 1);}

  /**
   * @returns {Array<String>} the admin's list of active client ids.
   */
  getClients() {return this.clients}

  /**
   * Resets the clients attribute.
   */
  resetClients() {this.clients = [];}
  //#endregion
}

module.exports = Admin;
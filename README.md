# Live Chat

## Table of contents
- [Project Description](#project-description)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Project Setup](#project-setup)
  - [Project Initiation](#project-initiation)


## Project Description
### Note:
* This project utilizes webpack so all front-end scripts, stylesheets and template files are located in the `src` folder.
* All project's common webpack configurations are contained within `webpack.common.js` file. (_please notify or consult me, [Jack](www.linkedin.com/in/jackmillerwebdeveloper), if you wish to modify the settings_).
* Server file is located in the `bin` folder under the name `www`.

### This project contains (potentially) the following objects:
1. Client\
`{email: {socketId, username, problem: {other: false, pref-pos, description}, reps: [], state}}`
2. Admin\
`{email: {socketId, username, position, clients: []}}`
3. Chat Message\
`{from: {text, time}}`
4. Chat Log\
`{meetingRoomId: [...Chat_Message_Object]}`
5. Socket.io Sockets

### Behaviours:

#### Client:
- Provide information and wait for admin to connect. (*saved in session not cookies due to __security issues__*)
  - information: username, email, prefered rep position or other, problem description, etc.
- Send an receive messages.
#### Admin:
- View full list of pending clients.
  - Select a pending client.
    - Send and receive messages.
    - Add other admin(s) to the conversation.
      - View full list of available admin to add.
    - Forward client to another admin
      - View full list of available admin to forward.
  - Forward Client
      - View full list of available admin to forward.
#### Server:
- CRUD a list of clients to cache/db for updating to the admins (when client requests for assistance and when client disconnects).
- CRUD a list of admins to cache/db for updating to the admins (when admin connects and disconnects).
  + Add admins to designated rooms for the position accordingly.
- create meeting rooms for clients and admins.
  + send announcements
    - when admin connects/disconnects. (i.e. admin {admin.username} has connected.)
    - when client connects/disconnects.
  + add admin and client to the room.
    - recieve and forward messages.
  + save meeting room chatlog to cache/db. (only save chatlog to db when the conversation is finished, everyone is disconnected, if db is used)
- send forward client requests.
  + process request accepted.
    - remove old admin from meeting room and add the new admin.
    - send notification to requester.
  + process request denined.
    - send notification back to requester.
- send chat invitation to designated admin
  + process request accepted.
    - add admin to meeting room.
    - send notification to requester.
  + process request denied.
    - send notification back to requester.

## Installation

### Prerequisites
1. [node.js](https://nodejs.org/en/download/)
3. [redis](https://github.com/microsoftarchive/redis/releases) - (windows only)

### Project Setup
1. `git clone` this project to an empty folder.
2. run `npm i` to install all dependencies.

### Project Initiation
1. run `npm run watch` to initiate all source files (JS and views).
2. run `npm start` to start dev server.
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const UserbookingController = require('./controllers/UserbookingController')
const RoomController = require('./controllers/RoomController')
module.exports = (app) => {
    /* RESFUL Api for users management */

    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        UserController.index
    )


    app.post('/login',
        UserAuthenController.login
    )


    // create userbooking
    app.post('/userbooking',
    UserbookingController.create
    )
    // edit userbooking, suspend, active
    app.put('/userbooking/:userbookingId',
    UserbookingController.put
    )
    // delete userbooking
    app.delete('/userbooking/:userbookingId',
    UserbookingController.remove
    )
    // get userbooking by id
    app.get('/userbooking/:userbookingId',
    UserbookingController.show
    )
    // get all userbooking
    app.get('/userbookings',
    UserbookingController.index
    )


    // create room
    app.post('/room',
        RoomController.create
    )
    // edit room, suspend, active
    app.put('/room/:roomId',
    RoomController.put
    )
    // delete room
    app.delete('/room/:roomId',
    RoomController.remove
    )
    // get room by id
    app.get('/room/:roomId',
       RoomController.show
    )
    // get all room
    app.get('/rooms',
      RoomController.index
    )
}
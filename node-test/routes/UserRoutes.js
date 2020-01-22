const userController = require('../controllers/UserController');
module.exports = (app, router) => {

    router.post('/register', userController.userRegistration);

    app.use('/auth', router)

}
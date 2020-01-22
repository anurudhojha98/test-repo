const userController = require('../controllers/UserController');
module.exports = (app, router) => {

    router.get('', userController.user);

    app.use('/api', router)

}
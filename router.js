// module.exports = function (app) {
//     app.get('/', function () {
//         res.send(['waterbottle', 'phone', 'paper']);        
//     })
// }

import passPortService from './services/passport';
import passport from 'passport';
const Authentication = require("./controllers/authentication");
//import Authentication from './controllers/authentication';
// disable cookie based auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', {session:false})

module.exports = app => {
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: "there"});
    })

    app.post('/signin', requireSignin, Authentication.signin)

    app.post('/signup', Authentication.signup);


}
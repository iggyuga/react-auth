// module.exports = function (app) {
//     app.get('/', function () {
//         res.send(['waterbottle', 'phone', 'paper']);        
//     })
// }

const Authentication = require("./controllers/authentication");
//import Authentication from './controllers/authentication';

module.exports = app => {
    app.get('/', (req, res, next) => {
        res.send(['waterbottle', 'phone', 'paper']);
    });

    app.post('/signup', Authentication.signup);
}
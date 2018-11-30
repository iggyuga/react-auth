// module.exports = function (app) {
//     app.get('/', function () {
//         res.send(['waterbottle', 'phone', 'paper']);        
//     })
// }

module.exports = app => {
    app.get('/', (req, res, next) => {
        res.send(['waterbottle', 'phone', 'paper']);
    });
}
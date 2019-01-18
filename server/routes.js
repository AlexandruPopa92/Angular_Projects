const controller = require("./controller");

module.exports = function(app){
    app.get('/task', controller.index);
    app.get('/task/:id', controller.show);
    app.post('/task', controller.add);
    app.put('/task/:id',controller.update);
    app.delete('/task/:id',controller.remove);

}


module.exports = function (app) {

    app.get('/roomSearch/api/static', function (req, res) {
        db.Rooms.find({}).then(function (data) {
            res.json(data);
        })
    })


};
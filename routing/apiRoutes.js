var friends = require('../app/data/friend.js');

module.exports = function (app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friends.forEach(function(obj){
            var total = 0;
            obj.scores.forEach(function(i){
                total += i
            })
        var difference = req.body - total;
        if (difference <= 5) {
            res.send(obj);
        }
        })

        });
    
}


var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var age = process.argv[2];

mongo.connect(url, function(err, db) {
    var parrots;

    if (err) {
        throw err;
    }

    parrots = db.collection("parrots");

    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, docs) {
        if (err) {
            throw err;
        }

        console.log(docs);
        db.close();
    });
});

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var firstName = process.argv[2];
var lastName = process.argv[3];
var doc = {
    firstName: firstName,
    lastName: lastName
};

mongo.connect(url, function(err, db) {
    var collection;

    if (err) {
        throw err;
    }

    collection = db.collection("docs");
    collection.insert(doc, function(err, data) {
        if (err) {
            throw err;
        }

        console.log(JSON.stringify(doc));
        db.close();
    });
});

/**
 * Created by kearney on 3/3/15.
 */

var foot = {
    kick: function() {
        this.yelp = "Ouch!";
        var answer = `${setImmediate( () => console.log(this.yelp))}`;

    }
};

foot.kick();
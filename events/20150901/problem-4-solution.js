"use strict";

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function(obj){ 
    return obj.message;
  }).filter(function(msg){ 
  return msg.length < 50;
});
}

module.exports = getShortMessages;
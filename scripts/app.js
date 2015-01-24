//app.js
function getRecentMeet(data) {
  var nextEventId = data.data && data.data.next_event && data.data.next_event.id;
  var nextEventTxt = data.data && data.data.next_event && data.data.next_event.name;
  var nextEventDiv = document.querySelector('.next-event');
  nextEventDiv.innerHTML = "<a href='http://www.meetup.com/atxnodejs/events/" + nextEventId + "'>" + nextEventTxt + "</a>";
}

(function() {
  var script = document.createElement('script');
  script.src = "https://api.meetup.com/atxnodejs?&sign=true&page=5&api&key=5049797817560b4e5c4594387922&callback=getRecentMeet";
  document.body.appendChild(script);
}());


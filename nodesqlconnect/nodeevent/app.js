const EventEmmiter = require('events');

const emmiter  = new EventEmmiter();

// Add Event Listener
emmiter.addListener("NewEvent",function(earg){
    console.log("Event Occured",earg);
});

// Add Event Listener
//emmiter.addListener("NewEvent",(earg) => {
//    console.log("Event Occured",earg);
//});


// raise an event
emmiter.emit("NewEvent",{eventName: "FistEvent", eventId: 1});


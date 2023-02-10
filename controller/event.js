const Event = require("../models/event");

exports.addEvent = (req, res, next) => {
    const data = req.body.data;
    const id = data.contact + data.category + data.name;
    const event = new Event({
        eventId: id,
        eName: data.name,
        ePoster: data.poster,
        eTags: data.tags,
        eCategory: data.category,
        eDescription: data.description,
        eLocation: data.location,
        eWhoCanJoin: data.whocanjoin,
        eLimit: data.limit,
        eContact: data.contact
    });
    Event.findOne({eventId: id}).then((result) => {
        if(result) {
            res.send("Event already exist");
        } else {
            event.save()
            .then(() => res.send("Successfully Added"))
            .catch((err) => console.log(err))
        }
    })
}
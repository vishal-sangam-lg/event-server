const Event = require("../models/event");

exports.addEvent = (req, res, next) => {
    const name = req.body.name;
    const poster = req.body.poster;
    const tags = req.body.tags;
    const category = req.body.category;
    const description = req.body.description;
    const location = req.body.location;
    const whocanjoin = req.body.whocanjoin;
    const limit = req.body.limit;
    const contact = req.body.contact;
    const id = contact + category + name;
    const event = new Event({
        eventId: id,
        eName: name,
        ePoster: poster,
        eTags: tags,
        eCategory: category,
        eDescription: description,
        eLocation: location,
        eWhoCanJoin: whocanjoin,
        eLimit: limit,
        eContact: contact
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

exports.getAllEvents = async (req, res, next) => {
    const allEvents = await Event.find();
    res.send(allEvents);
}
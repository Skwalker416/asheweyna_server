const { EventOrganizer } = require("../models/eventOrganizer");

exports.getEventOrganizers = async(_, res) => {
    try {

        const eventOrganizers = await EventOrganizer.find().select('name email id isAdmin')

        if (!eventOrganizers) {
            return res.status(404).json({ message: 'Event Organizer not found' })
        }
        return res.json(eventOrganizers);

    } catch (error) {
        return res.status(500).json({ type: error.name, message: error.message });
    }
}

exports.getEventOrganizerById = async(req, res) => {
    try {

        const eventOrganizer = await EventOrganizer.findById(req.params.id).select('-passwordHash -resetPasswordOtp -resetPasswordOtpExpires')
        if (!eventOrganizer) {
            return res.status(404).json({ message: 'Event Organizer not found' })
        }
        return res.json(eventOrganizer);

    } catch (error) {
        return res.status(500).json({ type: error.name, message: error.message });
    }
}


exports.updateEventOrganizer = async(req, res) => {
    try {
        const { eventOrganizerName, email, phone } = req.body;
        const eventOrganizer = await EventOrganizer.findByIdAndUpdate(
            req.params.id, { eventOrganizerName, email, phone }, { new: true } //get new information 
        );
        if (!eventOrganizer) {
            return res.status(500).json({ message: 'Event Organizer not found' });
        }
        eventOrganizer.passwordHash = undefined;
        return res.json(eventOrganizer)

    } catch (error) {
        return res.status(500).json({ type: error.name, message: error.message });
    }

};

exports.addEventOrganizerEvent = async(req, res) => {}
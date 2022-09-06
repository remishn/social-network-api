const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    // use mongoose's objectId data type
    // default value is set to a new objectId
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
});

module.exports = reactionSchema;
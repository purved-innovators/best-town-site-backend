import mongoose from "mongoose";

const BestTownChatBot = new mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    contactNumber:{
        type: String,
    },
    messageOne: {
        type: String,
    },
    messageTwo: {
        type: String,
    },
    messageThree: {
        type: String,
    },
    messageFour: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{ timestamps: true });

export const BestTownChatBotModel = mongoose.model("BestTownChatBot", BestTownChatBot);
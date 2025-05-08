import mongoose from "mongoose";

const BestTownNewsLetter = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{ timestamps: true });

export const BestTownNewsLetterModel = mongoose.model("BestTownNewsLetter", BestTownNewsLetter);
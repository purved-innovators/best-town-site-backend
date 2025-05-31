import mongoose from "mongoose";

const BestTownAdvisory = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
},{ timestamps: true });

export const BestTownAdvisoryModel = mongoose.model("BestTownAdvisory", BestTownAdvisory);
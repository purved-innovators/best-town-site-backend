import mongoose from "mongoose";

const CareerSectionModel = new mongoose.Schema({
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
    cvUrl: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{ timestamps: true });

export const CareerSection = mongoose.model("CareerSection", CareerSectionModel);
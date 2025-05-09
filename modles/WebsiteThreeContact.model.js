import mongoose from "mongoose";

const SobhaThreeContactForm = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: String,
        required: true,
    },
    subject: {
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

export const SobhaThreeContactFormModel = mongoose.model("SobhaThreeContactForm", SobhaThreeContactForm);
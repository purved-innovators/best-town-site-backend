import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},{ timestamps: true });

export const AdminModel = mongoose.model("Admin", LoginSchema);
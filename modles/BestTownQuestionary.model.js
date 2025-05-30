import mongoose from "mongoose";

const bestTownQuestionarySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    QuestionOne:{
        type: String,
        required: true
    },
    QuestionTwo:{
        type: String,
        required: true
    },
    QuestionThree:{
        type: String,
        required: true
    },
    QuestionFour:{
        type: String,
        required: true
    },
    QuestionFive:{
        type: String,
        required: true
    },
    QuestionSix:{
        type: String,
    }
});

export const QuestionarySection = mongoose.model("BestTownQuestionary", bestTownQuestionarySchema);
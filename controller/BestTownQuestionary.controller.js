import { QuestionarySection } from "../modles/BestTownQuestionary.model.js";

const addQuestionary = async (req, res) => {
    try {
        const { name, email, contactNumber, QuestionOne, QuestionTwo, QuestionThree, QuestionFour, QuestionFive, QuestionSix } = req.body;
        console.log(req.body);
        
        if (!name || !email || !contactNumber || !QuestionOne || !QuestionTwo || !QuestionThree || !QuestionFour) {
            return res.status(400).json({isSuccess: false, message: "Please provide all fields" });
        }
        const questionary = new QuestionarySection({
            name,
            email,
            contactNumber,
            QuestionOne,
            QuestionTwo,
            QuestionThree,
            QuestionFour,
            QuestionFive,
            QuestionSix
        });
        console.log(questionary);
        
        await questionary.save();
        res.status(201).json({isSuccess: true, message: "Questionary added successfully" });
    } catch (error) {
        res.status(500).json({isSuccess: false, message: error.message });
    }
};

const getQuestionary = async (req, res) => {
    try {
        const questionary = await QuestionarySection.find();
        res.status(200).json(questionary);
    } catch (error) {
        res.status(500).json({isSuccess: false, message: error.message });
    }
};

const getPaginatedQuestionary = async (req, res) => {
    try {
        const id = req.userId?.id;

        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const [data, totalCount] = await Promise.all([
            QuestionarySection.find()
                .sort({ createdAt: -1 })  
                .skip(skip)
                .limit(limit),
                QuestionarySection.countDocuments()
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        return res.status(200).json({
            isSuccess: true,
            page,
            totalPages,
            totalCount,
            data
        });
    } catch (error) {
        return res.status(500).json({
            isSuccess: false,
            message: error.message,
            error
        });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const {id} = req.params;
        const data = await SobhaFourContactFormModel.findByIdAndDelete(id)
        res.status(200).json({isSuccess: true, message:"Data deleted successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

export { addQuestionary, getQuestionary, getPaginatedQuestionary, deleteRecord };

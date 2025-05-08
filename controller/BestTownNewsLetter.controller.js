import {BestTownNewsLetterModel} from "../modles/BestTownNewsLetter.model.js";

const addNewsLetter = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ isSuccess: false, message: "Please provide email" });
        }
        const newsLetter = await BestTownNewsLetterModel.create({ email });
        return res.status(200).json({ isSuccess: true, message: "NewsLetter Added Successfully" });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};


const getNewsLetter = async (req, res) => {
    try {
        const {id} = req.userId;
        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }
        const newsLetter = await BestTownNewsLetterModel.find();
        return res.status(200).json({ isSuccess: true, newsLetter });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};


const getPaginatedNewsLetter = async (req, res) => {
    try {
        const {id} = req.userId;
        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 30;
        const skip = (page - 1) * limit;

        const [newsLetter, totalCount] = await Promise.all([
            BestTownNewsLetterModel.find().skip(skip).limit(limit),
            BestTownNewsLetterModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        return res.status(200).json({
            isSuccess: true,
            page,
            totalPages,
            totalCount,
            newsLetter
        });
    } catch (error) {
        return res.status(500).json({
            isSuccess: false,
            message: error.message,
            error
        });
    }
};


export { addNewsLetter, getNewsLetter, getPaginatedNewsLetter };
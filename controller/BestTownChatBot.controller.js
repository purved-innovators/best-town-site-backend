import {BestTownChatBotModel} from "../modles/BestTownChatBot.model.js"

const addChatBotData = async (req, res) => {
    try {
        const {name,email,contactNumber,messageOne,messageTwo,messageThree} = req.body
        const data = await BestTownChatBotModel.create({name,email,contactNumber,messageOne,messageTwo,messageThree})
        res.status(200).json({message:"Data added successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

const getChatBotData = async (req, res) => {
    try {
        const {id} = req.userId;
        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }
        const data = await BestTownChatBotModel.find()
        res.status(200).json({message:"data fetched successfully",data,isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

const getPaginatedChatBotData = async (req, res) => {
    try {
        const id = req.userId?.id;

        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const [data, totalCount] = await Promise.all([
            BestTownChatBotModel.find()
                .sort({ createdAt: -1 })  // ✅ Sort by latest
                .skip(skip)
                .limit(limit),
            BestTownChatBotModel.countDocuments()
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
        const data = await BestTownChatBotModel.findByIdAndDelete(id)
        res.status(200).json({message:"Data deleted successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

export {addChatBotData,getChatBotData,getPaginatedChatBotData,deleteRecord}
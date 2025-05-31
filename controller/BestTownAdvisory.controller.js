import {BestTownAdvisoryModel} from "../modles/BestTownAdvisory.model.js";


const addAdvisory = async (req, res) => {
    try {
        const { name, email, contactNumber, type } = req.body;
        if (!email || !name || !contactNumber || !type) {
            return res.status(400).json({ isSuccess: false, message: "Please provide all fields" });
        }
        
        await BestTownAdvisoryModel.create({
            name,
            email,
            contactNumber,
            type,
        });
       
        return res.status(200).json({ isSuccess: true, message: "Advisory Info Added Successfully" });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};


const getAllAdvisory = async (req, res) => {
    try {
        const careerInfo = await BestTownAdvisoryModel.find();
        return res.status(200).json({ isSuccess: true, careerInfo });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};

const getPaginatedAdvisory = async (req, res) => {
    try {
        const id = req.userId?.id;

        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const [data, totalCount] = await Promise.all([
            BestTownAdvisoryModel.find()
                .sort({ createdAt: -1 })  
                .skip(skip)
                .limit(limit),
                BestTownAdvisoryModel.countDocuments()
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
        const data = await BestTownAdvisoryModel.findByIdAndDelete(id)
        res.status(200).json({message:"Data deleted successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

export { addAdvisory, getAllAdvisory, getPaginatedAdvisory, deleteRecord };


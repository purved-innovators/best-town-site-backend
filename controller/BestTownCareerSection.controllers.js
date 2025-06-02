
import { CareerSection } from "../modles/BestTownCareerSection.model.js"
import uploadOnCloud from "../utils/Cloudnary.utils.js";
import fs from "fs";

const addCareerInfo = async (req, res) => {
    try {
        const { name, email, contactNumber, message } = req.body;
        // console.log(req.body);
        
        if (!email || !name || !contactNumber || !message) {
            return res.status(400).json({ isSuccess: false, message: "Please provide all fields" });
        }

        const cvLocalPath = await req.file?.path;

        const uploadedCV = await uploadOnCloud(cvLocalPath);
        
        await CareerSection.create({
            name,
            email,
            contactNumber,
            cvUrl: uploadedCV.url || null,
            message,
        });
        cvLocalPath && fs.unlinkSync(cvLocalPath);
        return res.status(200).json({ isSuccess: true, message: "Career Info Added Successfully" });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    } finally {
        cvLocalPath && fs.unlinkSync(cvLocalPath);
    }
};


const getAllCareerInfo = async (req, res) => {
    try {
        const careerInfo = await CareerSection.find();
        return res.status(200).json({ isSuccess: true, careerInfo });
    } catch (error) {
        return res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};

const getPaginatedCareerData = async (req, res) => {
    try {
        const id = req.userId?.id;

        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const [data, totalCount] = await Promise.all([
            CareerSection.find()
                .sort({ createdAt: -1 })  
                .skip(skip)
                .limit(limit),
                CareerSection.countDocuments()
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
        const data = await CareerSection.findByIdAndDelete(id)
        res.status(200).json({message:"Data deleted successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}

export { addCareerInfo, getAllCareerInfo, getPaginatedCareerData, deleteRecord };
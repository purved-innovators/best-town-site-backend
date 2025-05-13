import { SobhaOneContactFormModel } from "../modles/WebsiteOneContact.model.js";

const addContactForm = async (req, res) => {
    const { name, email, ContactNumber, subject, message } = req.body;
    console.log(req.body);
    
    if (!name || !email || !ContactNumber || !subject || !message) {
        return res.status(400).json({ isSuccess: false, message: "Please provide all fields" });
    }
    try {
        const contactForm = await SobhaOneContactFormModel.create({
            name,
            email,
            ContactNumber,
            subject,
            message,
        });
        res.status(200).json({ isSuccess: true, message:"Form submitted successfully" });
    } catch (error) {
        res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};

const getContactForm = async (req, res) => {
    try {
        const {id} = req.userId;
        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }
        const contactForm = await SobhaOneContactFormModel.find();
        res.status(200).json({ isSuccess: true, contactForm });
    } catch (error) {
        res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};

const getPaginatedContactForm = async (req, res) => {
    try {
        const id = req.userId?.id;

        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const [data, totalCount] = await Promise.all([
            SobhaOneContactFormModel.find()
                .sort({ createdAt: -1 })  // ✅ Sort by latest
                .skip(skip)
                .limit(limit),
                SobhaOneContactFormModel.countDocuments()
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
        const data = await SobhaOneContactFormModel.findByIdAndDelete(id)
        res.status(200).json({message:"Data deleted successfully",isSuccess:true})
    } catch (error) {
        res.status(400).json(error)
    }
}



export { addContactForm, getContactForm, getPaginatedContactForm,deleteRecord };
import { SobhaTwoContactFormModel } from "../modles/WebsiteTwoContact.model.js";

const addContactForm = async (req, res) => {
    const { name, email, ContactNumber, subject, message } = req.body;
    if (!name || !email || !ContactNumber || !subject || !message) {
        return res.status(400).json({ isSuccess: false, message: "Please provide all fields" });
    }
    try {
        const contactForm = await SobhaTwoContactFormModel.create({
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
        const contactForm = await SobhaTwoContactFormModel.find();
        res.status(200).json({ isSuccess: true, contactForm });
    } catch (error) {
        res.status(500).json({ isSuccess: false, message: error.message, error });
    }
};

const getPaginatedContactForm = async (req, res) => {
    try {
        const {id} = req.userId;
        if (!id) {
            return res.status(401).json({ isSuccess: false, message: "Unauthorized access" });
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 10;

        const skip = (page - 1) * limit;

        const [contactForm, totalCount] = await Promise.all([
            SobhaTwoContactFormModel.find().skip(skip).limit(limit),
            SobhaTwoContactFormModel.countDocuments()
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        res.status(200).json({
            isSuccess: true,
            page,
            totalPages,
            totalCount,
            contactForm
        });
    } catch (error) {
        res.status(500).json({
            isSuccess: false,
            message: error.message,
            error
        });
    }
};



export { addContactForm, getContactForm, getPaginatedContactForm };
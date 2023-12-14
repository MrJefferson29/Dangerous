const CustomError = require("../error/CustomError");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const rootDir = path.dirname(require.main.filename);
        const uploadDestination = file.fieldname === "photo" ? "/public/userPhotos" : "/public/storyImages";
        cb(null, path.join(rootDir, uploadDestination));
    },

    filename: function (req, file, cb) {
        if (file.fieldname === "photo") {
            const extension = file.mimetype.split("/")[1];
            req.savedUserPhoto = `photo_user_${req.user.id}.${extension}`;
            cb(null, req.savedUserPhoto);
        } else {
            req.savedStoryImage = `image_${new Date().toISOString().replace(/:/g, '-')}${file.originalname}`;
            cb(null, req.savedStoryImage);
        }
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        cb(new CustomError("Please provide a valid image file", 400), false);
    } else {
        cb(null, true);
    }
};

const imageUpload = multer({ storage, fileFilter });

module.exports = imageUpload;

const CustomError = require("../error/CustomError");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const rootDir = path.dirname(require.main.filename);

        if (file.fieldname === "photo") {
            cb(null, path.join(rootDir, "/public/userPhotos"));
        } else {
            cb(null, path.join(rootDir, "/public/storyImages"));
        }
    },

    filename: function (req, file, cb) {
        if (file.fieldname === "photo") {
            const extensions = file.mimetype.split("/")[1];
            req.savedUserPhoto = "photo_user_" + req.user.id + "." + extensions;
            cb(null, req.savedUserPhoto);
        } else {
            req.savedStoryImage =
                "image_" +
                new Date().toISOString().replace(/:/g, "-") +
                file.originalname;
            cb(null, req.savedStoryImage);
        }
    },
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/heif", "image/heic"];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        // Pass the error as the first argument to the callback
        return cb(new CustomError("Please provide a valid image file", 400), false);
    }

    // If the MIME type is allowed, pass null as the first argument
    cb(null, true);
};

const imageUpload = multer({ storage, fileFilter });

module.exports = imageUpload;

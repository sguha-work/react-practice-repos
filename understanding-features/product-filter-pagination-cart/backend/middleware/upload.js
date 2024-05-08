import multer from "multer";
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        const imageExtendionList = ['jpg', 'jpeg', 'png', 'bmp']
        let originalFileExt = '';
        try {
            originalFileExt = file.originalname.split(".")[1];
        } catch (error) {
            console.log('error')
            callback(new Error('Invalid file type'));
        }
        if (imageExtendionList.indexOf(originalFileExt) != -1) {
            callback(null, true);
        } else {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                callback(null, true);
            } else {
                callback(new Error('Invalid file type'));
            }
        }
    },
});
export default upload;
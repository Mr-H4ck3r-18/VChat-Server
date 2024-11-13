import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

const storage = GridFsStorage({
    url: `mongodb+srv://${user}:${password}@cluster0.uoccm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ['image/png', 'image/jpg', "image/jpeg"];
        if (match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({ storage });
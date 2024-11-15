import e from "express";

import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { newMessage, getMessages } from "../controller/message-controller.js";
import { uploadFile,getFile } from "../controller/file-controller.js";
import upload from '../util/upload.js'

const route = e.Router();

route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessages)

route.post('/file/upload', upload.single("file"), uploadFile)
route.get('/file/:filename',getFile)

export default route
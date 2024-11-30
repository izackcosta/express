const db = require('../db');
const asyncHandler = require("express-async-handler");
const {links} = require('../consts');

const getMessages = asyncHandler(async(req,res) =>{
    const messages = await db.getMessages();
    if(!messages){
        res.status(404).send("There are no messages!!!");
        return;
    }
    res.render('index', {links: links, messages: messages})
});

const postMessage = asyncHandler(async(req,res) =>{
    const {userName, message} = req.body;
    await db.postMessage(userName, message, new Date());
    res.redirect('/');
});

module.exports = {getMessages,postMessage};
const mongoose = require('mongoose');


const songSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    duracion: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    url: {
        type: URL,
        required: true,
    },

});

mongoose.model("Song", songSchema);
const {Schema, model}=require("mongoose");


const ArticleSchema = Schema({
    title: {
        type: String,
        require: true
    },
    content:  {
        type: String,
        require: true
    },
    date:  {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String,
        require: true,
        default: 'default.png'
    },
})
module.exports= model("Articles", ArticleSchema, "articles")
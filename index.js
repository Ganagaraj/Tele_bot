const { default: axios } = require('axios');
const bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true })
);
app.get("/",(req,res)=>{
    res.end("<h1>Telegram bot</h1>")
})

app.get("/new-message",(req,res)=>{
    res.end("<h1>Telegram message bot</h1>")
})

/*app.post("/new-message", (request, response) => {
    const { message } = request.body;
        axios.post("https://api.telegram.org/bot5880824097:AAFm5kqNB_2gv3993pDSN5V6alXnKN4hbSU/sendMessage", {
            chat_id: message.chat.id,
            text: "well he is my boss"
        }).then((res) => {
            console.log(res + " from tele bot");
            response.end('done')
        }).catch((err) => {
            console.log(err);  
            response.end(err);
        })

})*/

app.listen(8080, () => {
    console.log("listening @ 8080");
})
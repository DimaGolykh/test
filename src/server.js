const express        = require('express');
//const MongoClient    = require('mongodb').MongoClient;
const app            = express();
const weather = require('./Moduls/WheatherExtService').weather;

app.get('/weather', async function(req, res){
    const query = req.query; //queryConstructor(req.query);//
    const clientId = query['clientId '];
    const clientX =  query['clientX'];
    const clientY =  query['clientY'];
    console.log("query = " + query);
    const result = await weather(clientX, clientY, clientId);
    res.send(result);
});

const port = 3000;
app.listen(port, () => {
    console.log('I was run on 3000 port');
});

/*  перенести в модуль weather -Start-*/

/* перенести в модуль weather -Finish*/


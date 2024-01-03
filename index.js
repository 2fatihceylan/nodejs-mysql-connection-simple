const express = require('express');
const app = express();
const PORT =5000;

app.use(express.json());

const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '123456',
    database: 'notesdatabase'  
})



app.post('/insert',(request, response)=>{

    const title = request.body.title;
    const note = request.body.note;

    db.query('INSERT INTO notes_tb (title, note) VALUES (?,?)',[title,note],(err,result)=>{
        if(err){
            console.log(err);
        }

        response.send(result);
    })
})



app.listen(PORT,()=>{
    console.log('server started');
})
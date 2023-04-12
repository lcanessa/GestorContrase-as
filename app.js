const express=require('express');
const cors = require('cors')
const app= express();
const port=4001;


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))


app.listen(port,()=>{
    console.log("Escuchando por el puerto " + port)
});
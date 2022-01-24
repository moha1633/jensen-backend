const express = require("express")
 const app = express()

 process.env.PORT = 3000
 app.get("/", (req ,res)=>{
    res.set('WWW-Authenticate','Basic realm="Access to index"')
    res.status(200).send("Unauthorised access")
    })
    

    app.listen(3000 , ()=>{
        console.log('STARTED LISTENING ON PORT ${process.env.PORT}')


});
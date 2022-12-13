const express = require("express");
const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async () => {
     //create a express object
     const app = express();

  
     app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        
     });
}

setupAndStartServer();
const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require('./config/serverConfig');
//const CityRepository = require('./repository/city-repository');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {
     //create a express object
     const app = express();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended: true}));


      app.use('/api', ApiRoutes);

     app.listen(PORT, async () => {
          
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
          db.sequelize.sync({alter: true});
        }
     //    await Airplane.create({
     //      modelNumber : 'Bombardier CRJ'
     //    })




      //Insert
      //   const repo = new CityRepository();
      //   repo.createCity({name:"Pune"});

      //delete
      // const repo = new CityRepository();
      // repo.deleteCity(1);
     });
}

setupAndStartServer();
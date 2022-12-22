const { CityService } = require('../services/index');

const cityService = new CityService();
//post
//data -> req.body
const create =async (req, res ) =>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
// DELETE -> /city/:id
const destory = async (req, res ) =>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
//GET -> city/:id
const get = async (req, res ) =>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Fetch a city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to Get the city',
            err: error
        });
    } 
}

//PATCH-> /city/id-> req.body
const update =async (req, res ) =>{
    try{
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully Update the city',
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to UpdTE the city',
            err: error
        });
    }
}


module.exports ={
    create,
    destory,
    get,
    update

}
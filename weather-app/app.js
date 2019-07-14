const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2];

if(!address) return console.log('Please provide address as the argument');

geocode(address, (error, {latitude,longitude,location}) =>{
    if(error){
        return console.log(error);
    }

    forecast(latitude,longitude,(error,{summary,temperature,rainChance} ) => {
        if(error){
            return console.log( error);
        }
        console.log(
            location+'\n'+summary +
            ' It is currently ' + Math.round(temperature) + ' degress out.\ ' +
            'There is a ' + rainChance + '% chance of rain.'
        )
    });
});

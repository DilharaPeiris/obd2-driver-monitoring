var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    gPS_Time:{ type : any},
    device_Time : { type : any},
    longitude : { type : number},
    latitude : { type : number},
    gPS_Speed :  { type :number },
    horizontal_Dilution_of_Precision : { type : number},
    altitude : { type : number},
    bearing : { type : number},
    gx : { type : number},
    gy : { type : number},
    gz : { type : number},
    gcalibrated : { type : number},
    engine_Coolant_Temperature : { type : number},
    engine_RPM : { type : number},
    intake_Air_Temperature : { type : number},
    engine_Load: { type : number},
    mass_Air_Flow_Rate : { type : number},
    throttle_Position: { type : number}
});

module.exports=mongoose.model('Products',productSchema);
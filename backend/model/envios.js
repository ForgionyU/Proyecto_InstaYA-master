import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const envioSchema = new Schema(
    {
        fecha:{type:String},
        hora:{type:String},
        estado:{type:String},
        largo:{type:Intl},
        alto:{type:Intl},
        ancho:{type:Intl},
        peso:{type:Intl},
        direccion_rec:{type:String},
        ciudad_rec:{type:String},
        nombre_des:{type:String},
        cc_nit_des:{type:Intl},
        direccion_ent:{type:String},
        ciudad_ent:{type:String},
    },
    {collection: 'envios'}

);

export default mongoose.model('envios', envioSchema);
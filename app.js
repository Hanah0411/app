const mongoose = require('mongoose')
const url_bd = 'mongodb://localhost:27017/utma'

mongoose.connect(url_bd)
.then(() => {
    console.log('Conexion exitosa en la base d edatos')
})
.catch((err) => {
    console.log('No jalo')
})


const alumnos_esquema = new mongoose.Schema(
    {
       name:{
        type:String
       }, 
       apepat:{
        type:String
       },
       apemat:{
        type:String
       },
       numerotel:{
        type:Number
       }
    }
)
const alumnos = new mongoose.model('tabla de registro de estudiantes', alumnos_esquema)

alumnos.create(
    {
     name:'Hanah',
     apepat:'Barajas',
     apemat:'Quiroz',
     numerotel:4493854938   
    }
)

require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const { guardarDB } = require('./helpers/guardarArchivo');
const {Tareas} = require('./models/tareas');


const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

   do{
        opt = await inquirerMenu(); //esta funcion i,prime el menu

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                console.log(tareas.listadoArr);
            break;
 
        }

        guardarDB(tareas.listadoArr);


        await pausa();
     
        
   } while(opt !=='0');

}



main();
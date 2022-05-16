var monedas = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];


monedas.forEach((moneda)=>{
    const menu = document.getElementById("monedainicial");    
    const opcion = document.createElement("option");        
    opcion.textContent = moneda;
    menu.appendChild(opcion);
    
    const menu2 = document.getElementById("monedafinal");    
    const opcion2 = document.createElement("option");        
    opcion2.textContent = moneda;
    menu2.appendChild(opcion2);
})




let dolar = 4109.17;
let pmexicano = 204.37;
let pcolombiano = 1;
let euro = 4278.43;
let libra = 5039.36;

function convertir() {
    let valor = parseFloat(document.getElementById("dinero").value);
    let moneda1 = document.getElementById("monedainicial").value;
    let moneda2 = document.getElementById("monedafinal").value;

    if (!valor == 0) {
        //pasar de dolar a pesos mexicanos
        if (moneda1 == 'Dolar' && moneda2 == 'Peso Mexicano') {
            result = (valor * (dolar / pmexicano)).toFixed(2);
            //pasar de dolar a pesos colombianos     
        } else if (moneda1 == 'Dolar' && moneda2 == 'Peso Colombiano') {
            result = (valor * (dolar / pcolombiano)).toFixed(2);
            //pasar de dolar a euros           
        } else if (moneda1 == 'Dolar' && moneda2 == 'Euro') {
            result = (valor * (dolar / euro)).toFixed(2);
            //pasar de dolar a libras       
        } else if (moneda1 == 'Dolar' && moneda2 == 'Libra Esterlina') {
            result = (valor * (dolar / libra)).toFixed(2);
            //pasar de dolar a dolar
        } else if (moneda1 == 'Dolar' && moneda2 == 'Dolar') {
            result = (valor * (dolar / dolar));
            //pasar de pesos mexicanos a dolar       
        } else if (moneda1 == 'Peso Mexicano' && moneda2 == 'Dolar') {
            result = (valor * (pmexicano / dolar)).toFixed(2);
            //pasar de pesos mexicanos a pesos mexicanos  
        } else if (moneda1 == 'Peso Mexicano' && moneda2 == 'Peso Mexicano') {
            result = (valor * (pmexicano / pmexicano));
            //pasar de pesos mexicanos a pesos colombianos  
        } else if (moneda1 == 'Peso Mexicano' && moneda2 == 'Peso Colombiano') {
            result = (valor * (pmexicano / pcolombiano)).toFixed(2);
            //pasar de pesos mexicanos a pesos euro 
        } else if (moneda1 == 'Peso Mexicano' && moneda2 == 'Euro') {
            result = (valor * (pmexicano / euro)).toFixed(2);
            //pasar de pesos mexicanos a pesos libra 
        } else if (moneda1 == 'Peso Mexicano' && moneda2 == 'Libra Esterlina') {
            result = (valor * (pmexicano / libra)).toFixed(2);
            //pasar de pesos colombianos a dolar 
        } else if (moneda1 == 'Peso Colombiano' && moneda2 == 'Dolar') {
            result = (valor * (pcolombiano / dolar)).toFixed(6);
             //pasar de pesos colombianos a pesos mexicanos 
        }else if (moneda1 == 'Peso Colombiano' && moneda2 == 'Peso Mexicano') {
            result = (valor * (pcolombiano / pmexicano)).toFixed(6);
             //pasar de pesos colombianos a pesos colombianos 
        }else if (moneda1 == 'Peso Colombiano' && moneda2 == 'Peso Colombiano') {
            result = (valor * (pcolombiano / pcolombiano));
            //pasar de pesos colombianos a Euro 
        }else if (moneda1 == 'Peso Colombiano' && moneda2 == 'Euro') {
            result = (valor * (pcolombiano / euro)).toFixed(6);
            //pasar de pesos colombianos a libras esterlinas
        }else if (moneda1 == 'Peso Colombiano' && moneda2 == 'Libra Esterlina') {
            result = (valor * (pcolombiano / libra)).toFixed(6);
            //pasar de euros a dolar
        }else if (moneda1 == 'Euro' && moneda2 == 'Dolar') {
            result = (valor * (euro / dolar)).toFixed(2);
            //pasar de euros a pesos mexicano
        }else if (moneda1 == 'Euro' && moneda2 == 'Peso Mexicano') {
            result = (valor * (euro / pmexicano)).toFixed(2);
            //pasar de euros a pesos colombianos
        }else if (moneda1 == 'Euro' && moneda2 == 'Peso Colombiano') {
            result = (valor * (euro / pcolombiano)).toFixed(2);
            //pasar de euros a euro
        }else if (moneda1 == 'Euro' && moneda2 == 'Euro') {
            result = (valor * (euro / euro));
            //pasar de euros a libra esterlina
        }else if (moneda1 == 'Euro' && moneda2 == 'Libra Esterlina') {
            result = (valor * (euro / libra)).toFixed(2);
            //pasar de libra esterlina a dolar
        }else if (moneda1 == 'Libra Esterlina' && moneda2 == 'Dolar') {
            result = (valor * (libra / dolar)).toFixed(2);
            //pasar de libra esterlina a peso mexicano
        }else if (moneda1 == 'Libra Esterlina' && moneda2 == 'Peso Mexicano') {
            result = (valor * (libra / pmexicano)).toFixed(2);
            //pasar de libra esterlina a peso colombiano
        }else if (moneda1 == 'Libra Esterlina' && moneda2 == 'Peso Colombiano') {
            result = (valor * (libra / pcolombiano)).toFixed(2);
            //pasar de libra esterlina a euro
        }else if (moneda1 == 'Libra Esterlina' && moneda2 == 'Euro') {
            result = (valor * (libra / euro)).toFixed(2);
            //pasar de libra esterlina a libra esterlina
        }else if (moneda1 == 'Libra Esterlina' && moneda2 == 'Libra Esterlina') {
            result = (valor * (libra / libra));
        }



        const resultado = document.getElementById("resutlado");
        const respuesta = document.createElement("H1");        
        respuesta.textContent = `${result} ${moneda2}`;
        resultado.prepend(respuesta);
        

    } else {

        const contenedor = document.getElementById("alert");
        const mensaje = document.createElement("div");
        mensaje.setAttribute('class', 'alerta')
        mensaje.textContent = "Ingrese una cantidad a convertir";
        contenedor.appendChild(mensaje);

    }
}





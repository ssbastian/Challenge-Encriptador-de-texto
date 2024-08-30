let valor;
const encriptaciones = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptaciones = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar() {
    valor = document.getElementById('valorUsuario').value;
    if(validarTexto(valor)) {
        valor = valor.split('').map(char =>encriptaciones[char] || char).join('');
        console.log(valor);

        document.getElementById("myDIV").style.display = "none";
    }else  
     console.log('hay mayusculas o numeros');
}

function desencriptar() {
    valor = document.getElementById('valorUsuario').value;
    if(validarTexto(valor)) {
        // Ordenar las claves de manera descendente para evitar reemplazos parciales erróneos
        const clavesOrdenadas = Object.keys(desencriptaciones).sort((a, b) => b.length - a.length);
        // Reemplazar cada secuencia en el texto
        clavesOrdenadas.forEach(clave => {
            const regex = new RegExp(clave, 'g');
            valor = valor.replace(regex, desencriptaciones[clave]);

            document.getElementById("myDIV").style.display = "initial";
        });
        console.log(valor);
    }else
        console.log('hay mayusculas o numeros');
}




function clipboard(){   /* api del portapeles */
        navigator.clipboard.writeText(valor).then( () => {
        alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('error al copiar al portapapeles: ', err);
        });
}

function validarTexto(texto) {
    // Expresión regular que permite solo letras minúsculas y espacios
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
/*         document.querySelector("#warning").style.color = "red";
        document.querySelector("#warning").style.fontSize = "16px"; */
        return false;
    }
    /* document.querySelector("#warning").removeAttribute("style"); */
    return true;
}



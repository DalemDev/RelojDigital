let validar = 'fondo0'
document.body.classList.toggle('fondo0')
function efectoImagen(){
    if(validar === 'fondo0'){
        document.body.classList.toggle('fondo1')
        document.body.classList.remove('fondo0')
        document.body.classList.remove('fondo2')
        validar = 'fondo1'
    }else if(validar === 'fondo1'){
        document.body.classList.toggle('fondo2')
        document.body.classList.remove('fondo0')
        document.body.classList.remove('fondo1')
        validar = 'fondo2'
    }else if(validar === 'fondo2'){
        document.body.classList.toggle('fondo0')
        document.body.classList.remove('fondo1')
        document.body.classList.remove('fondo2')
        validar = 'fondo0'
    }
}

const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = [
        'Ene',
        'Feb',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ];
    const dias = [
        'Dom',
        'Lun',
        'Mar',
        'Mie',
        'Jue',
        'Vie',
        'Sab'
    ];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //toggle funciona como un interruptor si esta aplicado lo quita y si no esta aplicado lo aplica
    document.getElementById('contenedor').classList.toggle('animar');
}   

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);
setInterval(efectoImagen, 5000);
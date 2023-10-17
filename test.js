function calcularEdad(fechaNacimiento) {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();
    const diferenciaTiempo = fechaActual - fechaNacimientoObj;
    const años = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const días = Math.floor(diferenciaTiempo % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor(diferenciaTiempo % (1000 * 60) / 1000);
    const milise = Math.floor(diferenciaTiempo % 1000);
    return {
      años,
      meses,
      días,
      horas,
      minutos,
      segundos,
      milise
    };
  }

function actualizarEdadCadaSegundo(fechaNacimiento) {
    const resultado = document.getElementById('resultado');
    setInterval(() => {
        const edad = calcularEdad(fechaNacimiento);
        resultado.innerHTML = `Tienes ${edad.años} años, ${edad.meses} meses, ${edad.días} días, ${edad.horas} horas, ${edad.minutos} minutos, ${edad.segundos} segundos y ${edad.milise} ms de vida.`;
    }, 1); // Actualiza cada segundo
}

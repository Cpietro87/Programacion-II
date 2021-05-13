class Escuela{
  constructor(nombre,alumno){
    this.nombre = nombre;
    this.alumno = alumno; 
  }
  agregarCursoUno(){
    const CURSOUNO = [];
    CURSOUNO.push(this.alumno);
    console.info("Alumno del Curso N° 1: " + CURSOUNO);
  }
  agregarCursoDos(){
    const CURSODOS = [];
    CURSODOS.push(this.alumno);
    console.info("Alumno del Curso N°2: " + CURSODOS);
  }
}


module.exports = Escuela; 
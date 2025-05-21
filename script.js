const razones = [
  "Tu risa es de las cosas que más me gustan porque me llena de felicidad.",
  "Me encanta cómo, sin darte cuenta, haces que todo se sienta más bonito cuando llegas.",
  "Hay algo en tu forma de ver la vida que me atrapa.",
  "Eres tan sensible que me inspiras a ser mejor cada día.",
  "Contigo me siento en casa, sin que tengas que hacer nada.",
  "Tienes una fuerza que muchas veces ni tú notas, pero yo sí.",
  "Cuando hablas de lo que amas, brillas, y eso me encanta.",
  "Siento que tuve suerte al cruzarme contigo.",
  "Me gusta cómo sabes estar, sin necesidad de decir mucho.",
  "Te fijas en lo pequeño y eso te hace grande.",
  "Tienes claras tus prioridades, y eso me hace admirarte.",
  "Eres tan tú, tan auténtica, que es imposible no sonreír cuando pienso en ti.",
  "No finges ser nadie más, y eso me parece lo más bonito de ti.",
  "Eres más brillante de lo que tú misma te imaginas.",
  "Cada vez que te escucho, descubro algo nuevo que me gusta.",
  "Puedo quedarme viéndote sin decir nada y aún así sentirme completo.",
  "Me das ganas de ser alguien que merezca estar a tu lado.",
  "Estar contigo, incluso en silencio, se siente bien.",
  "Tienes esa paz que tanta gente busca y pocos encuentran.",
  "Lo tuyo se siente más que se dice, y eso vale oro.",
  "Hasta tus rarezas me parecen increíbles.",
  "Tu sonrisa tiene el poder de detenerme el mundo un ratito.",
  "Me gusta que seas tú, sin filtros ni máscaras.",
  "Me recuerdas lo bonito que es simplemente vivir.",
  "Contigo, la vida pesa menos.",
  "Eres buena gente, incluso cuando no todos lo merecen.",
  "Tienes detalles tan tuyos, tan únicos, que yo sí los noto.",
  "Tus abrazos tienen algo que me calma como nada más.",
  "A tu lado, todo parece más fácil.",
  "Tienes una paciencia conmigo que valoro más de lo que imaginas.",
  "Me haces sentir querido sin tener que decirlo.",
  "Tu voz se me queda, incluso cuando no estás.",
  "Siempre estás, sin necesidad de prometerlo.",
  "Tu mirada dice tanto que a veces me deja sin palabras.",
  "Cada día encuentro algo nuevo en ti que me hace admirarte más.",
  "No tienes que demostrar nada, ya eres increíble como eres.",
  "Tienes una luz que muchas veces ni tú notas.",
  "Saber que estás me da una paz que no sé explicar.",
  "Nunca estás por compromiso, siempre por cariño, y eso se nota.",
  "No sé cómo lo haces, pero cuando tú sonríes, todo mejora.",
  "No hay otra como tú, y lo digo con todo el corazón.",
  "A veces no estás cerca, pero te siento igual.",
  "Estás cuando realmente importa, y eso lo valoro mucho.",
  "Me ayudas a ver el mundo con otros ojos.",
  "Tienes carácter, y eso te hace aún más hermosa.",
  "Te respeto por lo que eres y por todo lo que has enfrentado.",
  "No me imagino esta vida sin haberte conocido.",
  "Me inspiras a mejorar, aunque no me lo pidas.",
  "Hay algo en ti que me da calma, incluso en mis días más difíciles.",
  "Si pudiera repetir algo en esta vida, sin duda sería conocerte antes."
];

let indice = 0;

function mostrarRazon() {
  if (navigator.vibrate) navigator.vibrate(100);

  const razonDiv = document.getElementById("razon");
  const boton = document.getElementById("boton");
  const finalDiv = document.getElementById("final");

  razonDiv.style.opacity = 0;

  setTimeout(() => {
    if (indice < razones.length) {
      razonDiv.innerText = razones[indice];
      razonDiv.style.opacity = 1;
      indice++;
    } else {
      razonDiv.style.display = "none";
      boton.style.display = "none";
      finalDiv.style.display = "block";
    }
  }, 200);
}

// 🎬 Importar posters desde /src/assets/
import deadpoolPoster from '../assets/deadpool.jpg';
import jokerPoster from '../assets/joker.jpg';
import dunePoster from '../assets/dune.jpg';
import venomPoster from '../assets/venom.jpg';
import insideOutPoster from '../assets/insideout2.jpg';
import garfieldPoster from '../assets/garfield.jpg';
import alienRomulusPoster from '../assets/alien.jpg';
import godzillaKongPoster from '../assets/godzilla.jpg';
import ifPoster from '../assets/if.jpg';
import planetApesPoster from '../assets/kindom.jpg';
import misionPoster from '../assets/mision.jpg';
import barbiePoster from '../assets/barbie.jpg';
import marioPoster from '../assets/mario.jpg';
import transformersPoster from '../assets/transformers.jpg';
import wonkaPoster from '../assets/wonka.jpg';
import jurassicPoster from '../assets/jurassic.jpg';
import moonGirlPoster from '../assets/moon.jpg';
import animalesPoster from '../assets/animales.jpg';
import mercyPoster from '../assets/mercy.jpg';
import shelterPoster from '../assets/shelter.jpg';
import soulm8tePoster from '../assets/soul8mate.jpg';
import projectHailPoster from '../assets/hailmary.jpg';
import alphaPoster from '../assets/alpha.jpg';
import readyOrNotPoster from '../assets/ready.jpg';


export const peliculasData = [
  { id:"deadpool-wolverine", titulo:"Deadpool & Wolverine", categoria:"acción", año:2024, poster:deadpoolPoster, duracion:"2h 10m", descripcion:"Deadpool se une a Wolverine para enfrentar un nuevo enemigo que amenaza el universo." },
  { id:"joker-folie-a-deux", titulo:"Joker: Folie à Deux", categoria:"drama", año:2024, poster: jokerPoster, duracion:"2h 12m", descripcion:"Arthur Fleck enfrenta nuevas turbulencias mientras Gotham se sumerge en caos y locura." },
  { id:"dune-parte-dos", titulo:"Dune: Parte Dos", categoria:"ciencia ficción", año:2024, poster:dunePoster, duracion:"2h 35m", descripcion:"Paul Atreides continúa su lucha por el control de Arrakis en un épico enfrentamiento intergaláctico." },
  { id:"venom-the-last-dance", titulo:"Venom: The Last Dance", categoria:"acción", año:2024, poster:venomPoster, duracion:"1h 55m", descripcion:"Eddie y Venom deben enfrentarse a un enemigo más poderoso y letal que nunca." },
  { id:"inside-out-2", titulo:"Inside Out 2", categoria:"animación", año:2024, poster: insideOutPoster, duracion:"1h 45m", descripcion:"Riley y sus emociones viven nuevas aventuras mientras enfrenta los desafíos de la adolescencia." },
  { id:"the-garfield-movie", titulo:"The Garfield Movie", categoria:"comedia", año:2024, poster:garfieldPoster, duracion:"1h 40m", descripcion:"Garfield vive nuevas peripecias llenas de humor y travesuras en su mundo animado." },
  { id:"alien-romulus", titulo:"Alien: Romulus", categoria:"terror", año:2024, poster:alienRomulusPoster, duracion:"2h 05m", descripcion:"La tripulación de la nave Romulus se enfrenta a un alien letal y desconocido en un planeta remoto." },
  { id:"godzilla-vs-kong-new-empire", titulo:"Godzilla x Kong: The New Empire", categoria:"acción", año:2024, poster:godzillaKongPoster, duracion:"2h 20m", descripcion:"Los titanes se enfrentan a una amenaza mayor que pondrá en riesgo la existencia humana." },
  { id:"if-2024", titulo:"IF", categoria:"animación", año:2024, poster:ifPoster, duracion:"1h 50m", descripcion:"Una historia de aventuras y fantasía donde los sueños se mezclan con la realidad de un mundo mágico." },
  { id:"kingdom-of-the-planet-of-the-apes", titulo:"Kingdom of the Planet of the Apes", categoria:"ciencia ficción", año:2024, poster:planetApesPoster, duracion:"2h 25m", descripcion:"La lucha por la supremacía entre humanos y simios alcanza un nuevo nivel épico." },
  { id:"mision-imposible-sentencia-final", titulo:"Misión Imposible: Sentencia Final", categoria:"acción", año:2025, poster:misionPoster, duracion:"2h 30m", descripcion:"Ethan Hunt encara su misión más peligrosa hasta ahora, con traiciones y adrenalina sin límite." },
  { id:"barbie-la-pelicula", titulo:"Barbie", categoria:"comedia", año:2024, poster:barbiePoster, duracion:"1h 54m", descripcion:"Barbie vive divertidas aventuras en un mundo de fantasía lleno de color y humor." },
  { id:"super-mario-bros-la-pelicula", titulo:"Super Mario Bros: La Película", categoria:"animación", año:2024, poster:marioPoster, duracion:"1h 48m", descripcion:"Mario y Luigi deben salvar el Reino Champiñón de Bowser en esta épica aventura animada." },
  { id:"transformers-rise-of-the-beasts", titulo:"Transformers: Rise of The Beasts", categoria:"acción", año:2025, poster:transformersPoster, duracion:"2h 20m", descripcion:"Los Autobots y Decepticons regresan con nuevas batallas y héroes en la tierra." },
  { id:"wonka-la-pelicula", titulo:"Wonka: La Película", categoria:"aventura", año:2024, poster:wonkaPoster, duracion:"1h 55m", descripcion:"La historia de Willy Wonka antes de abrir su famosa fábrica de chocolates." },
  { id:"mundo-jurassico-renacer", titulo:"Mundo Jurásico: Renacer", categoria:"acción", año:2025, poster:jurassicPoster, duracion:"2h 20m", descripcion:"Los dinosaurios regresan y los humanos deben luchar por sobrevivir en un mundo peligroso." },
  { id:"marvels-moon-girl-and-devil-dinosaur", titulo:"Marvel’s Moon Girl and Devil Dinosaur", categoria:"animación", año:2025, poster:moonGirlPoster, duracion:"1h 50m", descripcion:"Una joven heroína y su dinosaurio compañero luchan contra el crimen y el caos." },
  { id:"animales-fantasticos-secretos-de-dumbledore", titulo:"Animales Fantásticos: Secretos de Dumbledore ", categoria:"aventura", año:2025, poster:animalesPoster, duracion:"2h 20m", descripcion:"Newt Scamander y aliados enfrentan nuevas amenazas mágicas en un mundo fantástico." },
  
  // Estrenos 2025/2026
  { id:"mercy-2026", titulo:"Mercy", categoria:"ciencia ficción", año:2026, poster:mercyPoster , duracion:"2h 10m", descripcion:"La humanidad debe enfrentar su supervivencia cuando un experimento interestelar falla." },
  { id:"shelter-2026", titulo:"Shelter", categoria:"acción", año:2026, poster:shelterPoster, duracion:"1h 55m", descripcion:"Un héroe aislado debe proteger una ciudad de fuerzas externas que buscan destruirla." },
  { id:"soulm8te-2026", titulo:"SOULM8TE", categoria:"terror", año:2026, poster:soulm8tePoster, duracion:"2h 00m", descripcion:"Un grupo de amigos descubre que la red social que usan está poseída por fuerzas oscuras." },
  { id:"project-hail-mary-2026", titulo:"Project Hail Mary", categoria:"ciencia ficción", año:2026, poster:projectHailPoster, duracion:"2h 20m", descripcion:"Un astronauta debe salvar la Tierra de una catástrofe interplanetaria en solitario." },
  { id:"alpha-2025", titulo:"Alpha", categoria:"acción", año:2026, poster:alphaPoster, duracion:"2h 10m", descripcion:"Un agente de élite femenina se infiltra en una red de espionaje internacional en una misión que cambiará todo." },
  { id:"ready-or-not-2-2026", titulo:"Ready or Not 2", categoria:"terror", año:2026, poster:readyOrNotPoster, duracion:"1h 50m", descripcion:"La secuela del juego mortal: Grace vuelve al terror con nuevos horrores y supervivencia extrema." }
];

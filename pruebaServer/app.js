const express = require("express");

const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

/* ## Episodios ## */

const episodios = [
  {
    id: 1,
    titulo: "Pilot",
    fechaEmision: "December 2, 2013",
    episodio: "S01E01",
    sinopsis:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
  {
    id: 11,
    titulo: "Ricksy Business",
    fechaEmision: "April 14, 2014",
    episodio: "S01E11",
    sinopsis:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
  {
    id: 25,
    titulo: "Vindicators 3: The Return of Worldender",
    fechaEmision: "August 13, 2017",
    episodio: "S03E04",
    sinopsis:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
];
app.get("/episodios", (req, res) => {
  res.json(episodios);
});

// Endpoint para actualizar un episodio existente (PUT)
app.put("/episodios", (req, res) => {
  const episodioActualizado = req.body;

  // Ejemplo de actualización en un array en memoria
  const episodioExistente = episodios.find(
    (episodio) => episodio.id === parseInt(episodioActualizado.id)
  );

  if (episodioExistente) {
    episodioExistente.titulo = episodioActualizado.titulo;
    episodioExistente.sinopsis = episodioActualizado.sinopsis;
    episodioExistente.episodio = episodioActualizado.episodio;
    episodioExistente.fechaEmision = episodioActualizado.fechaEmision;

    res.json({
      message: `Episodio ${episodioActualizado.id} actualizado correctamente`,
      episodio: episodioExistente,
    });
  } else {
    res.status(404).json({
      message: `Episodio ${episodioActualizado.id} no encontrado`,
    });
  }
});

// Endpoint para eliminar un episodio existente (DELETE)

app.delete("/episodios/:id", (req, res) => {
  const episodioId = req.params.id;

  // Ejemplo de eliminación en un array en memoria
  const episodioIndex = episodios.findIndex(
    (episodio) => episodio.id === parseInt(episodioId)
  );

  if (episodioIndex !== -1) {
    episodios.splice(episodioIndex, 1);

    res.json({
      message: `Episodio ${episodioId} eliminado correctamente`,
    });
  } else {
    res.status(404).json({
      message: `Episodio ${episodioId} no encontrado`,
    });
  }
});

// Endpoint para crear un nuevo episodio (POST)
app.post("/episodios", (req, res) => {
  const nuevoEpisodio = req.body; // Suponemos que los datos del nuevo episodio se envían en el cuerpo de la solicitud

  // Ejemplo de guardado en un array en memoria
  episodios.unshift(nuevoEpisodio);

  res.status(201).json({
    message: "Episodio creado correctamente",
    episodio: nuevoEpisodio,
  });
});

const planetas = [
  {
    id: 3,
    nombre: "Citadel of Ricks",
    img: "",
    dimension: "unknown",
    descripcion:
      "La Citadel, conocida originalmente como The Citadel of Ricks, era una ciudadela trans-dimensional ciudad-estado poblada completamente por Ricks y Mortys a lo largo de las infinitas realidades. La Citadel se encontraba originalmente en una dimensión desconocida, pero fue teletranspotada por Rick C-137 directamente a la prisión principal de la Federación Galáctica de la Dimension C-131. Era utilizada como un lugar de ocio, un punto de encuentro o un lugar de protección para muchos Ricks y Mortys.",
  },
  {
    id: 1,
    nombre: "Earth (C-137)",
    img: "https://i.ytimg.com/vi/eMtShnoOvck/maxresdefault.jpg",
    dimension: "Dimension C-137",
    descripcion:
      "Earth es el planeta dónde reside la raza humana y la ubicación principal de los personajes del show. Este planeta tiene sobre 4.6 millones de años, se encuentra en el Sistema Solar y es el tercer planeta hacia el Sol. Solo tiene un satélite natural.",
  },
  {
    id: 67,
    nombre: "Blips and Chitz",
    img: "https://www.eventeny.com/users/pic/22017-business-product-720v7ocarpdc1597333301-600.jpg",
    dimension: "Replacement Dimension",
    descripcion:
      "Blips and Chitz es un arcade intergaláctico. Su ubicación es desconocida, pero se puede ver que está en un espacio más que en un planeta.",
  },
];

app.get("/planetas", (req, res) => {
  res.json(planetas);
});





// Endpoint para crear un nuevo planeta (POST)
app.post("/planetas", (req, res) => {
  const nuevoPlaneta = req.body; // Suponemos que los datos del nuevo episodio se envían en el cuerpo de la solicitud

  // Ejemplo de guardado en un array en memoria
  planetas.unshift(nuevoPlaneta);

  res.status(201).json({
    message: "Planeta creado correctamente",
    planetas: nuevoPlaneta,
  });
});


// Endpoint para actualizar un episodio existente (PUT)
app.put("/planetas", (req, res) => {
  const planetaActualizado = req.body;

  // Ejemplo de actualización en un array en memoria
  const planetaExistente = planetas.find(
    (planeta) => planeta.id === parseInt(planetaActualizado.id)
  );

  if (planetaExistente) {
    planetaExistente.nombre = planetaActualizado.nombre;
    planetaExistente.img = planetaActualizado.img;
    planetaExistente.dimension = planetaActualizado.dimension;
    planetaExistente.descripcion = planetaActualizado.descripcion;

    res.json({
      message: `Planeta ${planetaActualizado.id} actualizado correctamente`,
      planeta: planetaExistente,
    });
  } else {
    res.status(404).json({
      message: `Planeta ${planetaActualizado.id} no encontrado`,
    });
  }
});

// Endpoint para eliminar un planetas existente (DELETE)
app.delete("/planetas/:id", (req, res) => {
  const planetasId = req.params.id;

  // Ejemplo de eliminación en un array en memoria

  const planetasIndex = planetas.findIndex(
    (planeta) => planeta.id === parseInt(planetasId)
  );

  if (planetasIndex !== -1) {
    planetas.splice(planetasIndex, 1);

    res.json({
      message: `Planeta ${planetasId} eliminado correctamente`,
    });
  } else {
    res.status(404).json({
      message: `Planeta ${planetasId} no encontrado`,
    });
  }
});

const personajes = [
  {
    id: 1,
    nombre: "Rick Sanchez",
    estado: "Alive",
    especie: "Human",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tipo: "",
    genero: "Male",
    origen: "Bepis 9",
    descripcion:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
  {
    id: 2,
    nombre: "Morty Smith",
    estado: "Alive",
    especie: "Human",
    img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    tipo: "",
    genero: "Male",
    origen: "Bepis 9",
    descripcion:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
  {
    id: 35,
    nombre: "Bepisian",
    estado: "Dead",
    especie: "Alien",
    img: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
    tipo: "Bepisian",
    genero: "unknown",
    origen: "Bepis 9",
    descripcion:
      "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores. Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo... Jarl!!",
  },
];
app.get("/personajes", (req, res) => {
  res.json(personajes);
});

// Endpoint para crear un nuevo personaje (POST)
app.post("/personajes", (req, res) => {
  const nuevoPersonaje = req.body; // Suponemos que los datos del nuevo episodio se envían en el cuerpo de la solicitud

  // Ejemplo de guardado en un array en memoria
  personajes.unshift(nuevoPersonaje);

  res.status(201).json({
    message: "Personaje creado correctamente",
    personajes: nuevoPersonaje,
  });
});

// Endpoint para actualizar un personaje existente (PUT)
app.put("/personajes", (req, res) => {
  const personajeActualizado = req.body;

  // Ejemplo de actualización en un array en memoria
  const personajeExistente = personajes.find(
    (personaje) => personaje.id === parseInt(personajeActualizado.id)
  );

  if (personajeExistente) {
    personajeExistente.nombre = personajeActualizado.nombre;
    personajeExistente.estado = personajeActualizado.estado;
    personajeExistente.especie = personajeActualizado.especie;
    personajeExistente.img = personajeActualizado.img;
    personajeExistente.tipo = personajeActualizado.tipo;
    personajeExistente.genero = personajeActualizado.genero;
    personajeExistente.origen = personajeActualizado.origen;
    personajeExistente.descripcion = personajeActualizado.descripcion;

    res.json({
      message: `Personaje ${personajeActualizado.id} actualizado correctamente`,
      perosnaje: personajeExistente,
    });
  } else {
    res.status(404).json({
      message: `Personaje ${personajeActualizado.id} no encontrado`,
    });
  }
});

// Endpoint para eliminar un personajes existente (DELETE)
app.delete("/personajes/:id", (req, res) => {
  const personajesId = req.params.id;
  const personajeIndex = personajes.findIndex(
    (personaje) => personaje.id === parseInt(personajesId)
  );

  if (personajeIndex !== -1) {
    personajes.splice(personajeIndex, 1);

    res.json({
      message: `Personaje ${personajesId} eliminado correctamente`,
    });
  } else {
    res.status(404).json({
      message: `Personaje ${personajesId} no encontrado`,
    });
  }
});

/* ## USUARIOS ##  */

const usuarios = [
  {
    id: 1,
    email: "test@test.com",
    password: "PasswordPrueba123",
  },
];
app.post("/usuarios", (req, res) => {
  const { email, password } = req.body;

  const usuario = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (usuario) {
    res.json({
      message: "Inicio de sesion exitoso",
      token: "asdfs3245235dfv345vfdsgvfd54",
    });
  } else {
    res.status(401).json({ message: "Email o contraseha incorrectos" });
  }
});

app.listen(3002, () => {
  console.log("Server escuchando =P");
});

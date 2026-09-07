function recomendarPelicula() {
    const edadInput = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;
    const resultado = document.getElementById("resultado");

    const edad = parseInt(edadInput);

    let pelicula = "";

    switch (genero) {
        case "Drama":
            if (edad < 13) {
                pelicula = "casablanca";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "The Shawshank Redemption";
            } else {
                pelicula = "Taxi Driver";
            }
            break;

        case "Comedia":
            if (edad < 13) {
                pelicula = "Back to the future";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "The Truman Show";
            } else {
                pelicula = "The wold of Wall Street";
            }
            break;

        case "Musical":
            if (edad < 13) {
                pelicula = "La La Land";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "Les Misérables";
            } else {
                pelicula = "The Rocky Horror Picture Show";
            }
            break;

        case "Crimen":
            if (edad < 13) {
                pelicula = "no hay opciones lol";
            } else if (edad >= 13 && edad <= 15) {
                pelicula = "El secretos de sus ojos";
            } else {
                pelicula = "The Godfather";
            }
            break;
    }

    resultado.textContent = pelicula;
}

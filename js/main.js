// Clases
class Song {

    constructor(autor, titulo, album, año, codigo) {
        this.autor = autor;
        this.titulo = titulo;
        this.album = album;
        this.año = año;
        this.codigo = codigo;
    }
};

class Decada80 extends Song {

    constructor(autor, titulo, album, año, codigo, estiloa) {
        super(autor, titulo, album, año, codigo);
        this.estiloa = estiloa;
    }

    get getAutor() {
        return this.autor;
    }

    get getTitulo() {
        return this.titulo;
    }
};

class Decada90 extends Song {

    constructor(autor, titulo, album, año, codigo, estilob) {
        super(autor, titulo, album, año, codigo);
        this.estilob = estilob;
    }
};

// Funciones
const mostrarMenu = function (msj, list) {
    let j = 0;

    for (let i = 0; i < list.length; i++) {
        j = i + 1;
        msj = msj + j + " - " + list[i] + "\n";
    }

    j = j + 1;
    msj = msj + j + " - " + "Salir";

    return msj;
};

function validarOpcion(mensaje, lista) {
    let seleccionado;

    while (true) {
        seleccionado = parseInt(prompt(mostrarMenu(mensaje, lista)));

        if (!isNaN(seleccionado) && seleccionado != null && seleccionado != "") {
            break;
        }
        else {
            alert("Por favor ingrese una opcion valida");
            continue;
        }

    }
    return seleccionado;
};

function listarProductos(lista) {
    let msj = "";

    lista.forEach((producto) => {
        if (producto.codigo[0] == "0") {
            msj = msj + "Canción: " + producto.autor + " " + producto.titulo + ", ";
            msj = msj + "Album: " + producto.album + ", ";
            msj = msj + "Año: " + producto.año + ", ";
            msj = msj + "Estilo " + producto.estiloa + ", ";
            msj = msj + "Codigo: " + producto.codigo + "\n";
            msj = msj + "---------------------------------------------------------------------" + "\n";
        }
        if (producto.codigo[0] == "1") {
            msj = msj + "Canción: " + producto.autor + " " + producto.titulo + ", ";
            msj = msj + "Album: " + producto.album + ", ";
            msj = msj + "Año: " + producto.año + ", ";
            msj = msj + "Estilo: " + producto.estilob + ", ";
            msj = msj + "Codigo: " + producto.codigo + "\n";
            msj = msj + "---------------------------------------------------------------------" + "\n";
        }
    });

    return msj;
};

function cargarProducto(codigo, lista) {
    let msjPantalla = "";

    //Busco el producto en la lista de productos
    const prodAgregado = lista.find((prod) => prod.codigo === codigo);

    //Si el producto fue encontrado, lo cargo en el carrito
    if (prodAgregado != undefined) {
        carrito.push(prodAgregado);
        msjPantalla = msjPantalla + "Producto agregado correctamente! \n";
    }
    else {
        msjPantalla = msjPantalla + "Codigo no encontrado! \n";
    }

    alert(msjPantalla);
};



//  Creo los Objetos de mis productos
const cancion1 = new Decada80("Mr. Mister", "Broken Wings", "Broken Wings", "1985", "001", "Pop Rock");
const cancion2 = new Decada80("Cutting Crew", "(I Just) Died in Your Arms", "Single", "1986", "002", "Pop Rock");
const cancion3 = new Decada80("Roxy Music", "More than this", "More than this", "1982", "003", "Pop");
const cancion4 = new Decada90("R.E.M.", "Losing My Religion", "Out of Time", "1991", "101", "Rock Alternativo");
const cancion5 = new Decada90("Natalie Imbruglia", "Torn", "Left of the Middle", "1997", "102", "Pop");
const cancion6 = new Decada90("The Cranberries", "Zombie", "No Need to Argue", "1994", "103", "Rock Alternativo");

//Creo el listado de productos
const canciones80 = [cancion1, cancion2, cancion3];
const canciones90 = [cancion4, cancion5, cancion6];
let carrito = [];

const menuPrincipal = ["Canciones 1980", "Canciones 1990"];
const menuSecundario = ["Agregar un nueva nueva canción al carrito", "Ver mi carrito"];
let msjPrincipal = "Seleccione la canción que desea comprar:\n";
let msjSecundario = "Seleccione una opcion:\n";
let seleccion = 0;
let selCancion80 = 0;
let selCancion90 = 0;
let msjPantalla = "";
let codigo = "";



// Comienzo del programa
alert("¡Bienvenidos a Music Market!");

while (seleccion != 3) {

    /*Solicito al usuario que seleccione categoria de producto o salir*/
    seleccion = validarOpcion(msjPrincipal, menuPrincipal);

    switch (seleccion) {
        // Canciones 1980
        case 1:
            // Creo el mensaje por pantalla, muestro la lista de los productos y pido que el usuario elija producto
            msjPantalla = "Listado de Canciones 1980:\n\n";
            msjPantalla = msjPantalla + listarProductos(canciones80);
            msjPantalla = msjPantalla + "\n" + "Ingrese el codigo de la canción que desea agregar a su carrito: ";
            codigo = prompt(msjPantalla);

            // cargo el producto seleccionado al carrito
            cargarProducto(codigo, canciones80);

            //Solicito al usuario si desea seguir comprando o ver su carrito
            selCancion80 = validarOpcion(msjSecundario, menuSecundario);

            // opcion 1: sigue comprando
            if (selCancion80 == 1) {
                break;
            }
            //opcion2: muestro carrito
            else if (selCancion80 == 2) {

                if (carrito.length == 0) {
                    alert("Su carrito esta vacio!");
                    break;
                }

                msjPantalla = "Listado de canciones en su carrito:\n";
                msjPantalla = msjPantalla + "Cantidad de canciones: " + carrito.length + "\n\n";
                msjPantalla = msjPantalla + listarProductos(carrito);
                alert(msjPantalla);
            }
            else if (selCancion80 == 3) {
                seleccion = 3;
                alert("¡Hasta pronto!");
            }
            else {
                alert("La opcion ingresada no se encuentra disponible.");
            }

            break;

        // Canciones 1990
        case 2:
            // Creo el mensaje por pantalla, muestro la lista de los productos y pido que el usuario elija producto
            msjPantalla = "Listado de Canciones 1990:\n\n";
            msjPantalla = msjPantalla + listarProductos(canciones90);
            msjPantalla = msjPantalla + "\n" + "Ingrese el codigo de la canción que desea agregar a su carrito: ";
            codigo = prompt(msjPantalla);

            // cargo el producto seleccionado al carrito
            cargarProducto(codigo, canciones90);

            //Solicito al usuario si desea seguir comprando o ver su carrito
            selCancion90 = validarOpcion(msjSecundario, menuSecundario);

            // opcion 1: sigue comprando
            if (selCancion90 == 1) {
                break;
            }
            //opcion2: muestro carrito
            else if (selCancion90 == 2) {

                if (carrito.length == 0) {
                    alert("Su carrito esta vacio!");
                    break;
                }

                msjPantalla = "Listado de canciones en su carrito:\n";
                msjPantalla = msjPantalla + "Cantidad de canciones: " + carrito.length + "\n\n";
                msjPantalla = msjPantalla + listarProductos(carrito);
                alert(msjPantalla);
            }
            else if (selCancion90 == 3) {
                seleccion = 3;
                alert("¡Hasta pronto!");
            }
            else {
                alert("La opcion ingresada no se encuentra disponible.");
            }

            break;

        case 3:
            alert("¡Hasta pronto!");
            break;

        default:
            alert("La opcion ingresada no se encuentra disponible.");
            break;
    }

}
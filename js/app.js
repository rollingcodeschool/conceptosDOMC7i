function cambiarTitulo(){
    console.log('Desde la funcion cambiar titulo');
    //traer el h1 del maquetado
    let tituloPrincipal = document.querySelector('#titulo');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML = 'Un nuevo titulo';
    tituloPrincipal.className = 'coloNuevo display-4';
}

function verMas(){
    console.log('Prueba desde verMas');
    //crear el parrafo - primera Forma
    let parrafoNuevo = document.createElement('p'); // <p></p>
    //preparar el elemento
    parrafoNuevo.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ab quae magni sapiente asperiores possimus dicta officiis aut voluptas tempore. Nisi consequatur esse totam. Provident quod minus nemo dolores maxime et blanditiis vel sapiente iste minima tempore, assumenda, ullam impedit accusantium laudantium voluptatem non esse, explicabo mollitia ducimus distinctio. Adipisci nihil voluptates sequi officia, veritatis aperiam eveniet quisquam labore, quos earum dolores, corporis maxime possimus ipsum voluptatibus consectetur pariatur quo alias? Inventore sed, nisi error ratione totam culpa unde libero reprehenderit atque esse possimus id fugiat! Cumque nulla voluptas, reiciendis voluptate amet repellat nemo quia quos nihil quisquam alias sunt totam corrupti optio. Eos possimus vero maxime molestias natus. Tempore molestiae veniam laudantium consectetur magni dignissimos similique expedita et, iure totam explicabo non voluptate debitis ipsa consequuntur nemo temporibus inventore. Recusandae ea eius earum nobis voluptatibus, sed, pariatur autem quidem nesciunt, provident facere totam vel doloremque exercitationem animi hic architecto rem? Magnam, omnis? Vel iste facere suscipit nesciunt quaerat atque cupiditate molestiae nam nemo. Aut deserunt, a dolore laboriosam commodi tempore eligendi error quas nulla provident non, ad nisi necessitatibus molestiae consequuntur iusto laborum voluptatem illum ipsa eveniet sit pariatur molestias ex quasi. Assumenda animi, impedit ratione illo unde doloremque.';
    parrafoNuevo.className = 'lead';
    
    console.log(parrafoNuevo)
    //traer el elemento padre
    let sectionPadre = document.getElementsByClassName('container');
    console.log(sectionPadre[1]);
    //agregar o insertar en el dom
    // sectionPadre[1].appendChild(parrafoNuevo) //agrega el nodo hijo al final
    // sectionPadre[1].prepend(parrafoNuevo) //agrega el nodo hijo al principio
    sectionPadre[1].insertBefore(parrafoNuevo, document.getElementById('btnVerMas')); //agrega el nodo hijo al principio

    //NOTA para acceder a lo que escribo dentro de un input no usar innerHTML usar value
    console.log(document.getElementById('buscador').value)
}
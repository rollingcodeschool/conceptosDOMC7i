function cambiarTitulo(){
    console.log('Desde la funcion cambiar titulo');
    //traer el h1 del maquetado
    let tituloPrincipal = document.querySelector('#titulo');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML = 'Un nuevo titulo';
    tituloPrincipal.className = 'coloNuevo display-4';
}

function verMas(){
    let botonVerMas =  document.getElementById('btnVerMas');
    let sectionPadre = document.getElementsByClassName('container');

    if(botonVerMas.innerHTML === 'Ver mas...'){
        //crear el parrafo - primera Forma
        // let parrafoNuevo = document.createElement('p'); // <p></p>
        // //preparar el elemento
        // parrafoNuevo.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ab quae magni sapiente asperiores possimus dicta officiis aut voluptas tempore. Nisi consequatur esse totam. Provident quod minus nemo dolores maxime et blanditiis vel sapiente iste minima tempore, assumenda, ullam impedit accusantium laudantium voluptatem non esse, explicabo mollitia ducimus distinctio. Adipisci nihil voluptates sequi officia, veritatis aperiam eveniet quisquam labore, quos earum dolores, corporis maxime possimus ipsum voluptatibus consectetur pariatur quo alias? Inventore sed, nisi error ratione totam culpa unde libero reprehenderit atque esse possimus id fugiat! Cumque nulla voluptas, reiciendis voluptate amet repellat nemo quia quos nihil quisquam alias sunt totam corrupti optio. Eos possimus vero maxime molestias natus. Tempore molestiae veniam laudantium consectetur magni dignissimos similique expedita et, iure totam explicabo non voluptate debitis ipsa consequuntur nemo temporibus inventore. Recusandae ea eius earum nobis voluptatibus, sed, pariatur autem quidem nesciunt, provident facere totam vel doloremque exercitationem animi hic architecto rem? Magnam, omnis? Vel iste facere suscipit nesciunt quaerat atque cupiditate molestiae nam nemo. Aut deserunt, a dolore laboriosam commodi tempore eligendi error quas nulla provident non, ad nisi necessitatibus molestiae consequuntur iusto laborum voluptatem illum ipsa eveniet sit pariatur molestias ex quasi. Assumenda animi, impedit ratione illo unde doloremque.';
        // parrafoNuevo.className = 'lead';
    
        // console.log(parrafoNuevo)
        // //traer el elemento padre
        // console.log(sectionPadre[1]);
        // //agregar o insertar en el dom
        // // sectionPadre[1].appendChild(parrafoNuevo) //agrega el nodo hijo al final
        // // sectionPadre[1].prepend(parrafoNuevo) //agrega el nodo hijo al principio
        // sectionPadre[1].insertBefore(parrafoNuevo, botonVerMas); //agrega el nodo hijo al principio
        
        //SEGUNDA FORMA PARA CREAR UN PARRAFO   
        //cambiar el texto del boton
        botonVerMas.className = 'btn btn-outline-danger';
        botonVerMas.innerHTML = 'Ocultar';
        
        let parrafoNuevo = `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi vitae accusantium ipsam odit ex voluptas doloremque sequi cum iure tempora, placeat minima ea assumenda iusto possimus. Temporibus delectus nihil, voluptas dignissimos consectetur commodi esse quis accusamus! Et voluptatibus fugiat asperiores illo maxime recusandae odio sapiente, nisi dolor iusto, deleniti suscipit obcaecati laudantium ipsum quaerat est. Et quibusdam sint excepturi, beatae quia enim quasi quod aliquid molestiae. Impedit sunt ipsam temporibus quae nesciunt consequatur dolores quibusdam nobis voluptatibus soluta, nostrum repellat consequuntur suscipit, officiis voluptatum ratione quos adipisci laboriosam. Iusto ducimus quaerat dolor repellendus et maxime, voluptate, quibusdam temporibus, sapiente asperiores quidem soluta excepturi eligendi ullam dolorem consectetur. Voluptatem veritatis reiciendis fuga voluptates distinctio, totam alias soluta consequuntur. Numquam ipsum autem quasi eum architecto debitis, earum facere quis unde sequi quod reiciendis quam, sapiente atque, consequuntur ut. Odit, repudiandae, aperiam provident et vero corporis ea nam ratione, ducimus qui excepturi.</p>`       
        
        sectionPadre[1].innerHTML += parrafoNuevo; // sectionPadre[1].innerHTML = sectionPadre[1].innerHTML + parrafoNuevo

    }else{
        console.log('aqui quiero borrar u ocultar el parrafo');
        //eliminar el parrafo creado del DOM
        console.log(sectionPadre[1].children[3])
        sectionPadre[1].removeChild(sectionPadre[1].children[3]);
        //resetear los valor del boton
        botonVerMas.innerHTML='Ver mas...';
        botonVerMas.className = 'btn btn-outline-primary';
    }


    //NOTA para acceder a lo que escribo dentro de un input no usar innerHTML usar value
    console.log(document.getElementById('buscador').value)
}
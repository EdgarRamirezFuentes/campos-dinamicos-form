document.addEventListener('DOMContentLoaded', function() {
    // Botón que agrega componente de imagen al formulario
    const addButton = document.getElementById('add-btn');

    // Contenedor de componentes
    const imagesContainer = document.getElementById('images-container');

    // Lleva el control del id de los componentes
    let id = 2;

    // Clase encargarda de crear un componente de imagen con un id dado
    class imageComponent {
        constructor(id) {
            this.id = id;
            this.component = this.generateComponent();
        }

        generateComponent() {
            return `
            <div class="center-content my-3 show" id="image-component-${this.id}">
                <div class="center-content">
                    <label for="image-input${this.id}" class="my-3">Selecciona una imagen</label>
                    <input type="file" name="image-input-${this.id}" id="image-input-${this.id}">
                </div>
                <div class="center-content">
                    <label for="image-description${this.id}" class="my-3">Descripción</label>
                    <textarea name="image-description-${this.id}" id="image-description-${this.id}"></textarea>
                </div>
                <button type="button" class="btn btn-danger my-2" id="remove-button-${this.id}"
                    onClick="this.parentElement.remove();">Deshacer imagen</button>
            </div>
            `
        }

        getComponent() {
            return this.component;
        }
    }



    // EventListener encargado de agregar componente de imagen al formulario al momento de hacer click en el botón "Agregar imagen".
    addButton.addEventListener('click', (e) => {
        // Validando que solo sean 10 componentes en total
        const totalComponents = imagesContainer.childElementCount + 1;
        if (totalComponents > 10) {
            alert("Solo puedes agregar 10 imágenes");
            return;
        }

        // Creando componente
        const component = new imageComponent(id);
        // Agregando componente al contenedor justo al final
        imagesContainer.insertAdjacentHTML('beforeend', component.getComponent());

        id += 1;
    });

});
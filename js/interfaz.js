class Interface {
    constructor(){
        // Initialize the APP when instantiating
        this.init();
        // read the result
        this.list = document.getElementById('result-events');
    }

    // Method to initialize APP
    init(){
        // Call the print categories function of the REST API
        this.printCategories();
    }
    // Print categories consume REST API
    printCategories(){
        const listCategorias = eventbrite.getCategories()
            .then(categories =>{
                const cats = categories.categories.categories;
                // Select the category select
                const selectCategory = document.getElementById('listed-categories');

                // loop through the array and print the options
                // In this way we create the categories of the Event in the DOM
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCategory.appendChild(option);
                })
            })
    }
    // Clear previous results
    cleanResult(){
        this.list.innerHTML = '';
    }
    // Read API response and print result
    showEvents(events){
        // Read the events and add them to a variable
        const listEvents =  events.events;
       // Go through the events and create templates

       listEvents.forEach(event=>{
            this.list.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card mb-5">
                            <img class="img-fluid mb-2" src="${event.logo !==null ? event.logo.url : ''}">
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${event.name.text}</h2>
                                <p class="lead text-info">Event information</p>
                                <p>${event.description.text.substring(0,280)}...</p>

                                <span class="badge badge-primary">Ability: ${event.capacity}</span>
                                <span class="badge badge-secondary">Ability: ${event.start.local}</span>
                                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Buy tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    // Method to print error and success messages
    showMessage(message,lessons){
        this.clearMessage();
        const div = document.createElement('div');
        div.classList = clases; // Here the classes are sent so that they have bootstrap format
        // add text
        div.appendChild(document.createTextNode(mensaje));
        // look for a father
        const divFinder = document.querySelector('#seeker');
        divFinder.appendChild(div);
        // Remove alert after 3 seconds
        setTimeout(()=>{
            this.showMessage();
        }, 3000);
    }

    // The message disappears if it exists
    clearMessage(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}

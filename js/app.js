
const eventbrite = new EventBrite();
const ui = new Interface();



document.getElementById('FetchBtn').addEventListener('click', (e) =>{
    e.preventDefault();

    
    const textSearch = document.getElementById('event').value;

   
    const category= document.getElementById('listed-categories');
    const categorySelected = categories.options[category.selectedIndex].value;

   
    if(textsearch !== ''){
       
        eventbrite.obtenerEventos(textsearch, categorySelected)
            .then(events => {
                if(events.events.events.length > 0){
                    ui.cleanupResult();
                    ui.showEvents(events.events);
                    
                }else{
                    ui.displayMessage('No results', 'alert alert-warning mt-4');
                }
            })
            .catch(error => ui.showMessage('There is a 500 error on Event Brite Server, unable to get results', 'alert alert-danger mt-4') );

    }else{

        ui.cleanResult();
        ui.showMessage('Write something in search engine', 'alert alert-danger mt-4');

    }        
})
class EventBrite{
    constructor(){
        this.token_auth = '';
        this.organize = 'date';
        
    }
    // Show serach results
    async getEvents(events, category){
        const responseEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${category}&token=${this.token_auth}`);

        // code wait for event response and send it as json
        const events = await responseEvent.json();
        return {
            events
        }
    }


    // Method that obtains the categories
    async getCategories(){
        // consult the categories to the REST API of event brite
        const answerCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Wait for responses from categories and return JSON
        const categories = await answerCategories.json();

        // Return the result to be displayed in interface
        return{
            categories
        }
    }
}//https://www.eventbriteapi.com/v3/users/me/?token=

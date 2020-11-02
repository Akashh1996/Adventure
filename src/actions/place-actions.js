import dispatcher from '../dispatcher/dispatcher'

const API_KEY = "AIzaSyD6YZ7TzQl_TKgHxHWI9s_9u-NLM1B1nRo";

export async function loadPlace() {
    console.log("teta")
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=url,formatted_address,geometry,name,rating,formatted_phone_number,opening_hours,website,price_level,review,user_ratings_total&key=${API_KEY}`, {
        method: 'GET',  
        mode:'cors',
        headers: {'Access-Control-Allow-Origin': '*'}
        
    });
    const data = await response.json()
    
    dispatcher.dispatch({
        type: 'LOAD_PLACE',
        payload: data
    });
    
}

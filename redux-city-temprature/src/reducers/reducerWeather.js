export default function(weather=[], action) {
    
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.error ? weather : [...weather, action.payload.data];
        default:
            return weather;
    }
    
}
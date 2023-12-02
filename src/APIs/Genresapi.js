import axios from 'axios';



// const key = 'api_key=c0d670d047a1f673651ed4c9bd561204';
const baseuri = 'https://api.themoviedb.org/3/discover/movie?api_key=c0d670d047a1f673651ed4c9bd561204'


const MovieByGenreId = (id) =>
   axios.get(baseuri + '&with_genres=' + id)




export default { MovieByGenreId }

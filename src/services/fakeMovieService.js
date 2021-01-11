import * as genresAPI from './fakeGenreService';

const movies = [
    {
        _id : "1",
        title : "Terminator",
        genre : {_id: "1" , name :"Action"},
        numberInStock : 6,
        dailyRentalRate: 2.5,
        publishDate : "2018-01-03T19:04:28.809Z",
        liked : true
    },
    {
        _id : "2",
        title : "Die Hard",
        genre : {_id: "1" , name :"Action"},
        numberInStock : 5,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id : "3",
        title : "Gone Girl",
        genre : {_id: "2" , name :"Thriller"},
        numberInStock : 7,
        dailyRentalRate: 4.5,
        liked: false
    },
    {
        _id : "4",
        title : "The Sixth Sense",
        genre : {_id: "2" , name :"Thriller"},
        numberInStock : 4,
        dailyRentalRate: 3.5,
        liked: true
    },
    {
        _id : "5",
        title : "The Avengers",
        genre : {_id: "1" , name :"Action"},
        numberInStock : 7,
        dailyRentalRate: 3.5,
        liked: false
    },
];

export function getMovies () {
    return movies;
}

export function getMovie (id) {
    return movies.find(m=>m._id === id);
}

export function saveMovie (movie) {
    let movieInDb = movies.find(m=>m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = movie.genre;
    movieInDb.numberInStock = genresAPI.genres.find(g=> g._id === movie.genreId);
    movieInDb.dailyRentalRate= movie.dailyRentalRate;
}


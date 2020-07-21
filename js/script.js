const numberOfFilms = +prompt('How much movie are you watch alredy?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt ('One of the last movie witch you watch?', ''),
        b = prompt ('What are you mark for it?', ''),
        c = prompt ('One of the last movie witch you watch?', ''),
        d = prompt ('What are you mark for it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

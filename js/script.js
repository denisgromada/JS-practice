" use strict ";

const numberOfFilms = +prompt('How much movie are you watch alredy?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const   a = prompt ('One of the last movie witch you watch?', ''),
            b = prompt ('What are you mark for it?', '');

    if (a !=null && b !=null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log ('Little');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Classic');
}  else if (personalMovieDB.count >= 30 ) {
    console.log ('Good');
} else {
    console.log('ERROR');
}

console.log(personalMovieDB);
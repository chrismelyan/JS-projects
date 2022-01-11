const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }
    ememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMoviesDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
         console.log(personalMoviesDB);
        } 
   },
   writeYourGenres: function() {
    for (let i = 1; i < 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        if (i == null || i == '') {
            personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    } return genres.forEach(function(char) {
        console.log("Любимый жанр ${genres[char]} - это (название из массива)")
    })
   }, toggleVisibleMyDB: function(privat) {
       if (privat == false) {
           return privat = true;
       } else {
           return privat = false;
       }
   }
}; 

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log("Done");
    } else {
        console.log('error');
        i--;
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log("Done");
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

if (personalMoviesDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMoviesDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMoviesDB);

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMoviesDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
     if (!hidden) {
      console.log(personalMoviesDB);
     } 
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
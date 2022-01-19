/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
 document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector(".promo__interactive-list"),
        form = document.querySelector('form.add'),
        checkbox = form.querySelector('[type="checkbox"]'),
        input = form.querySelector('.adding__input');

    const movieDB = {
        movies: [
            "Логан",
            "Эрнест",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Американксий пирог",
            "Скотт Пилигрим против..."
        ]
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }

            if(favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = "url('../img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    const createMovieList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach ((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                 <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    };

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

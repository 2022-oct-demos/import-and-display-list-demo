export function renderMovie(movieObject) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = movieObject.name;

    const p = document.createElement('p');
    p.textContent = `${movieObject.name} is a ${movieObject.genre}`;

    const ul = document.createElement('ul');
    for (let star of movieObject.stars) {
        const li = document.createElement('li');
        li.textContent = star;
        ul.append(li);
    }

    div.append(h2, p, ul);
    return div;
}

// const movie = {
//     name: "Angel",
//     genre: "Drama",
//     stars: ["Doreen", "April"]
// }

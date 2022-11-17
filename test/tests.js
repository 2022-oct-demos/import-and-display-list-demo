// import functions under test
import { fetchMovies } from '../fetch-utils.js';
import { renderMovie } from '../render-utils.js';

const test = QUnit.test;

test('example test...', (expect) => {
    // Arrange
    const expected = true;

    // Act
    const actual = true;

    // Assert
    expect.deepEqual(actual, expected);
});

test('test movie render function', async (expect) => {
    const expected = `<div><h2>Snowmageddon</h2><p>Snowmageddon is a Adventure|Fantasy</p><ul><li>Gunther</li><li>Odette</li><li>Loreen</li></ul></div>`;

    const movies = await fetchMovies();
    const actual = renderMovie(movies[0]);
    // console.log('actual', actual);
    // console.log('actual.outerHTML', actual.outerHTML);
    // console.log('actual.innerHTML', actual.innerHTML);

    expect.equal(actual.outerHTML, expected);
});

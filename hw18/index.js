const url1 = 'https://jsonplaceholder.typicode.com/posts'

const getData = (url, userId) =>
    fetch(url)
    .then(data => data.json())
    .then(todo => console.log(todo.filter(el => el.userId === userId)))


getData(url1, 1)

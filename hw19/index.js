const url1 = 'https://jsonplaceholder.typicode.com/posts'

const getData = async (url) => {
    const responce = await fetch(url)
   return responce.json()

}

const finish = getData(url1).then(data => console.log(data.filter(el => el.userId === 1)))
console.log('%c HI', 'color: firebrick')



fetch('https://dog.ceo/api/breeds/image/random/4') // fetch url
.then(response => response.json())
  .then(data => renderDogs(data));

function renderDogs(images) {
    const container = document.querySelector('div')
    images.message.forEach ( url => {
        let imageTag = document.createElement('img')
        imageTag.src = url
        container.append(imageTag)
    })
} 



fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => renderBreeds(Object.keys(data.message)) )

function renderBreeds(breeds) {
    const listContainer = document.querySelector('ul')
    breeds.forEach ( breed => {
        let newLi = document.createElement('li')
        newLi.innerHTML = breed
        listContainer.append(newLi)
    })
}



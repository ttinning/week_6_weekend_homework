document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#new-music-form');
    form.addEventListener('submit', handleNewForm);

    const deleteAll = document.querySelector('#delete-button');
    deleteAll.addEventListener('click', handleDeleteAll)
});

const handleNewForm = function(event) {
    event.preventDefault();

    const albumList = document.querySelector('#album-list');
    const albumListItem = document.createElement('li');
    albumList.appendChild(albumListItem);

    const artist = document.createElement('h2');
    artist.textContent = event.target.artist.value;
    albumListItem.appendChild(artist);

    const album = document.createElement('h3');
    album.textContent = event.target.album.value;
    albumListItem.appendChild(album);

    const genre = document.createElement('h4');
    genre.textContent = event.target.genre.value;
    albumListItem.appendChild(genre);

    this.reset();
}



const handleDeleteAll = function() {
    const list = document.querySelector('#album-list');
    list.innerHTML = '';
};
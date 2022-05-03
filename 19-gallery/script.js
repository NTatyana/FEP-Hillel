import GalleryApi from './GalleryApi.js';

const SELECTOR = Object.freeze({
  NAV_LIST: '#navList',
  PHOTO_LIST: '#photoList',
  NAV_TEMPLATE: '#navItemTemplate',
  PHOTO_TEMPLATE: '#photoItemTemplate',
  NAV_ITEM: '.navigation-item',
});

const navListEl = document.querySelector(SELECTOR.NAV_LIST);
const photoListEl = document.querySelector(SELECTOR.PHOTO_LIST);
const navItemTemplate = document.querySelector(SELECTOR.NAV_TEMPLATE).innerHTML;
const photoItemTemplate = document.querySelector(SELECTOR.PHOTO_TEMPLATE).innerHTML;

navListEl.addEventListener('click', onNavigationListClick);

init();

function init() {
  GalleryApi
    .getAlbums()
    .then((albums) => {
      const id = getFirstAlbumId(albums);

      renderNavigation(albums);

      if (id) {
        renderPhotoListByAlbumId(id);
      } else {
        renderEmptyPhotoList();
      }
    })
    .catch(handleError);
}

function onNavigationListClick(e) {
  e.preventDefault();

  const navItemEl = getNavItemElement(e.target);

  if (navItemEl) {
    renderPhotoListByAlbumId(navItemEl.dataset.id);
  }
}

function renderNavigation(albums) {
  const navItemsHTML = albums.map(getNavHTML).join('');

  navListEl.innerHTML = navItemsHTML;
}

function getNavHTML(album) {
  return navItemTemplate
    .replace('{{id}}', album.id)
    .replace('{{title}}', album.title)
}

function getNavItemElement(el) {
  return el.closest(SELECTOR.NAV_ITEM);
}

function renderPhotoListByAlbumId(id) {
  GalleryApi
    .getPhotos(id)
    .then((photos) => {
      const photoItemsHTML = photos.map(getPhotoHTML).join('');

      photoListEl.innerHTML = photoItemsHTML;
    })
    .catch(handleError);
}

function renderEmptyPhotoList() {
  photoListEl.innerHTML = '<h2>No photos in album</h2>';
}

function getPhotoHTML(photo) {
  return photoItemTemplate
    .replace('{{src}}', photo.thumbnailUrl)
}

function getFirstAlbumId(albums) {
  return albums?.[0]?.id;
}

function handleError(e) {
  alert(e.message);
}
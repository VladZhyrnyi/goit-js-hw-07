import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkupFromArray(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  nav: true,
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkupFromArray(itemArray) {
  return itemArray.map((item) => {
      return `
<li>
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>`;
    }).join("");
}

galleryRef.addEventListener('click', onGalleryItemClick);


function onGalleryItemClick(event) {
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
    // console.log(event);
    
    event.preventDefault();

    lightbox.open(event.target);
}
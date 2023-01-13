import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkupFromArray(galleryItems)
);

galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryMarkupFromArray(itemArray) {
  return itemArray
    .map((item) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const modal = window.basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}">
`, {
    onShow: () => {window.addEventListener('keydown', onKeyEscapeClick)},
    onClose: () => {window.removeEventListener('keydown', onKeyEscapeClick)},
});

  modal.show();

  function onKeyEscapeClick(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
      modal.close();
    }
    return;
  };
};

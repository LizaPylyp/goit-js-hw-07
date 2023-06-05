import { galleryItems } from './gallery-items.js';
document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = [
    {
      source: "large-image1.jpg",
      smallSource: "small-image1.jpg",
      alt: "Image 1 description"
    },
    {
      source: "large-image2.jpg",
      smallSource: "small-image2.jpg",
      alt: "Image 2 description"
    },
    // Add more gallery items as needed
  ];

  const galleryElement = document.querySelector(".gallery");

  function createGalleryItem(item) {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.source;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.smallSource;
    image.dataset.source = item.source;
    image.alt = item.alt;

    link.appendChild(image);
    listItem.appendChild(link);

    return listItem;
  }

  function openModal(event) {
    event.preventDefault();

    const target = event.target;
    if (target.classList.contains("gallery__image")) {
      const imageSource = target.dataset.source;

      const modal = basicLightbox.create(`
        <img src="${imageSource}" alt="">
      `);

      modal.show();
    }
  }

  galleryElement.addEventListener("click", openModal);

  function renderGallery() {
    const galleryFragment = document.createDocumentFragment();

    galleryItems.forEach(function(item) {
      const galleryItem = createGalleryItem(item);
      galleryFragment.appendChild(galleryItem);
    });

    galleryElement.appendChild(galleryFragment);
  }

  renderGallery();
});
console.log(galleryItems);
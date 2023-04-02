import { galleryItems } from './gallery-items.js';

// Отримую доступ до елемента, на який буду "вішати" розмітку
const galleryConteiner = document.querySelector('.gallery');

// Cтворюю розмітку
function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => 
        
        `<li class="gallery__item">
        <a class ="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
         </li>
        `
    ).join("");
}

// Додаю розмітку в DOM
const galleryMarkup = createGalleryMarkup(galleryItems);

// Все інше робить SimpleLightbox
galleryConteiner.insertAdjacentHTML("afterbegin", galleryMarkup);

    new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });  


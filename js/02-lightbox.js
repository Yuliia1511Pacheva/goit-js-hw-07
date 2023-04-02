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

galleryConteiner.insertAdjacentHTML("afterbegin", galleryMarkup);

// Додаю слухача, який буде слухати клік
galleryConteiner.addEventListener('click', onImgClick);


function onImgClick(evt) {
  // Прибираю нативну поведінку під час кліку по зображенню
  evt.preventDefault();

  // Відбираю, щоб ф-ція спрацьовувала лише по кліку на зображення, а за його межами - ні
//   const isImgEl = evt.target.classList.contains('gallery__image');
//   if (!isImgEl) {
//     return;
//   }
    console.log(evt.target);
    
    new SimpleLightbox('.gallery a', { 
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        spinner: false,
    });  
}

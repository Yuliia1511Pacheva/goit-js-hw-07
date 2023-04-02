import { galleryItems } from "./gallery-items.js";

// Отримую доступ до елемента, на який буду "вішати" розмітку
const galleryConteiner = document.querySelector('.gallery');

// Cтворюю розмітку
function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => 
        
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}" >
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
        </a>
       </li>`
    
    ).join("");
}

// Додаю розмітку в DOM
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryConteiner.insertAdjacentHTML("afterbegin", galleryMarkup);

// Додаю слухача, який буде слухати клік
galleryConteiner.addEventListener('click', onImgClick);

function onImgClick(evt) {
  // Прибираю нативну поведінку під час кліку по елементу
  evt.preventDefault();

  // Відбираю, щоб ф-ція спрацьовувала лише по кліку на зображення, а за його межами - ні
  const isImgEl = evt.target.classList.contains('gallery__image');
  if (!isImgEl) {
    return;
  }

  // Отримую доступ до дата-атрибуту img, щоб отримати доступ до шляху великого зображення
  const sourceImgEl = evt.target.dataset.source;

  // Використовю бібліотеку для відкриття модалки (код повністю з бібліотеки крім шаблоннї розмітки)
  const instance = basicLightbox.create(`
   
      <img
           class="gallery__image"
           src="${sourceImgEl}"
           width="800"
           height="auto"
         />
   
`)
  instance.show()

// Додаю умову за якої, якщо модальне вікно видиме, то на нього вішаємо прослуховувач подій і в такому випадку при кліці на ESC - закриваємо його
  if (basicLightbox.visible) {
    window.addEventListener('keydown', (evt) => {
      if (evt.code !== "Escape")
        return;
      instance.close()
    })
  }
}

// СПРОБУВАЛА ВИКОРИСТАТИ Ф-ЦІЮ IIFE для створення розмітки

// (function() {
//     const markup = galleryItems.map(({ prewiew, original, description }) => 
        
//        `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//          <img
//            class="gallery__image"
//            src="${prewiew}"
//            data-source="${original}"
//            alt="${description}"
//          />
//         </a>
//        </li>`
    
//     ).join("");

//     galleryConteiner.insertAdjacentHTML('afterbegin', markup);

// }())






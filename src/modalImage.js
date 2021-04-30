import imageCard from './templates/image-card.hbs';
import './styles.css';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import renderGallery from './renderGallery';
import largePicURL from './renderGallery';
// export const clickedImage = document.querySelector('.image');

/* refs.gallery.addEventListener('click', showLargeImg);

export default function showLargeImg(event) {
    if (event.target.nodeName === 'IMG') {
        const imgToShow = event.currentTarget;

        const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${largePicURL} alt="Large picture"/>
    </div>
`)
        instance.show();
    }
} */
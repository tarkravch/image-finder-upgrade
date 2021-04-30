import imageCard from './templates/image-card.hbs';
import './styles.css';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import largePicURL from './renderGallery';
export const clickedImage = document.querySelector('.image');


export default function showLargeImg(event) {
    const imgToShow = event.target;

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${imgToShow.largeImageURL} alt="Large picture"/>
    </div>
`)
    instance.show();
}
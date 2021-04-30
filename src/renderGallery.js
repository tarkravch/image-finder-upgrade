import imageCard from './templates/image-card.hbs';
import './styles.css';
import { refs } from './refs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import clickedImage from './modalImage';
export default function renderGallery(foundImages) {

    const imgArr = foundImages.hits;
    const finding = imgArr.forEach(foundImg => {
        renderCard(foundImg);
    });
}

function renderCard(foundImg) {
    refs.gallery.insertAdjacentHTML('beforeend', imageCard({ foundImg }));
    const largePicURL = foundImg.largeImageURL;
}
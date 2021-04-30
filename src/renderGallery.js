import imageCard from './templates/image-card.hbs';
import './styles.css';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/dist/basicLightbox.min.js';

import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import MAIN_URL from './apiService';
import API_KEY from './apiService';
import options from './apiService';

const linkObj = {
    arr: []
}


export default function renderGallery(foundImages) {

    const imgArr = foundImages.hits;
    linkObj.arr = imgArr;
    const finding = imgArr.forEach(foundImg => {
        renderCard(foundImg);
    });
}

function renderCard(foundImg) {
    refs.gallery.insertAdjacentHTML('beforeend', imageCard({ foundImg }));
}


refs.gallery.addEventListener('click', showLargeImg);

function showLargeImg(event) {

    if (event.target.nodeName === 'IMG') {
        const urlDistr = linkObj.arr.forEach(foundUrlObj => {
            if (event.target.src === foundUrlObj.webformatURL) {
                const instance = basicLightbox.create(`
        <img src=${foundUrlObj.largeImageURL} alt="Large picture" width="800" height="600"/>
    `)
                instance.show();
            }
        })
    }
}
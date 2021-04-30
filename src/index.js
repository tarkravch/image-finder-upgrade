import './styles.css';
import './apiService';
import 'lazysizes';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import * as basicLightbox from 'basiclightbox';


import largePicURL from './renderGallery';

import renderGallery from './renderGallery';
import { refs } from './refs';

import imageCard from './templates/image-card.hbs';
import ApiService from './apiService';
import API_KEY from './apiService';
import options from './apiService';

import noticeError from './renderGallery';
import noticeSuccess from './renderGallery';

refs.inputForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.loadMoreBtn.setAttribute('hidden', true);




const apiRequest = new ApiService();
let searchValue;

function onSearch(event) {
    event.preventDefault();

    apiRequest.query = event.currentTarget.elements.query.value;
    searchValue = apiRequest.query;
    if (searchValue === "" || !searchValue.trim()) {
        return alert({ text: 'Please, input something into search field!', delay: 2000 });
    }
    apiRequest.resetPage();
    apiRequest.clearGallery();
    apiRequest.fetchImages(searchValue, options)
        .then(renderGallery)
        .then(() => {
            if (!refs.gallery.hasChildNodes('li')) {
                refs.loadMoreBtn.setAttribute('hidden', true);
                return error({ text: 'Not found! Please try more specific query.', delay: 3000 });
            } else {
                refs.loadMoreBtn.removeAttribute('hidden');

                return success({ text: 'Gallery has been built successfully!', delay: 2000 });
            }
        })
        .catch(() => {
            return error({ text: 'Not found! Please try more specific query.', delay: 3000 });
        })

};

function loadMore() {

    const heightToScroll = document.documentElement.offsetHeight;
    window.scrollTo({ top: heightToScroll, left: 0, behavior: 'smooth' });

    apiRequest.fetchImages(searchValue, options)
        .then(renderGallery);
}
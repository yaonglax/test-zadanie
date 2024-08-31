import './styles/style.scss'
import favImg from './assets/fav.svg'
import filledfavimg from './assets/favfilled.svg'
import cartImg from './assets/cart.svg'
import tgIcon from './assets/telegram.svg'
import whatsIcon from './assets/whatsapp.svg'
import location from './assets/location.svg'
import logo from './assets/logo.svg'
import favbutton from './assets/favbutton.svg'
import menu from './assets/menu.svg'
import miner from './assets/bannerimg.svg'
import coin from './assets/bannerimgsmall.svg'
import arrow from './assets/arrow.svg'
import bluearrow from './assets/arrowblue.svg'
import benefitsimg from './assets/benefitsimg.svg'
import cross from './assets/cross.svg'
import arrowdisabled from './assets/arrowdisabled.svg'
import search from './assets/search.svg'
import whitelogo from './assets/logowhite.svg'
import tgwh from './assets/telegramwh.svg'
import whatswh from './assets/whatsappwh.svg'
import incart from './assets/incart.svg'

import { categories } from './categories'
import { catalog } from './catalog'
import { infoList } from './infolist'
import { contactsList } from './contacts'

const categoriesList = document.querySelector('.categories__list')
const cardsCont = document.querySelector('.cards-cont')
const companyList = document.querySelector('.company__list')
const contacts = document.querySelector('.contacts__list')
const burgermenuButton = document.querySelector('.header__button-menu')
const arrowBanner = document.querySelector('.banner__arrow')
const bannerLink = document.querySelector('.banner__link')


categoriesList.innerHTML = categories.map(el => {
    return ` <li class="categories__item">
                    <div class="categories__ellipse"></div>
                    <img src=${el.img} alt="item-img" class="categories__image">
                    <span class="categories__name">${el.name}</span>
                    <button class="categories__link" type="button"><a>В каталог <img class="categories__arrow" alt="arrow-icon" /></a>
                </li>`
}).join('');

cardsCont.innerHTML = catalog.map(el => {
    return ` <div class="card">
                <div class="card__header">
                    <span class="card__label">
                        <span class="card__text">${el.label}</span></span>
                    <img src=${el.infav ? filledfavimg : favImg} alt="card-fav-icon" class="card__fav">
                </div>
                <img src=${el.img} alt="item-img" class="card__item">
                <span class="card__name">${el.name}</span>
                <span class="card__status">${el.status}</span>
               <div class="card__footer">
                <span class="card__price">${el.price} ₽</span>
                <span class="card__real-price"><s>${el?.realprice ? `${el.realprice} ₽` : ''}</s> </span>
                <button class="card__incart-button" type="button">
                    <img src=${el.incart ? incart : cartImg} alt="cart-img" class="card__cart">
                </button>
            </div>
                <button class="card__button" type="button">Купить в 1 клик</button>
            </div>`
}).join('');

companyList.innerHTML = infoList.map(el => {
    return ` <li class="company__item">
            <img src=${el.img} alt="item-img" class="company__marker">           
                   <label class="company__label">${el.text}</label>
                </li>`
}).join('');


contacts.innerHTML = contactsList.map(el => {
    return ` <li class="contacts__item">
            <img src=${el.icon} alt="item-img" class="contacts__marker">           
                   <label class="contacts__label">${el.text}</label>
                </li>`
}).join('');

const telegram = document.querySelectorAll('.telegram')
const whatsapp = document.querySelectorAll('.whatsapp')
const categoriesButton = document.querySelectorAll('.categories__link')

categoriesButton.forEach(button => {
    const arrow = button.querySelector('.categories__arrow');
    if (button.disabled) {
        arrow.src = arrowdisabled;
    } else {
        arrow.src = bluearrow;
    }
})


telegram.forEach(el => {
    el.src = tgIcon
})
whatsapp.forEach(el => {
    el.src = whatsIcon
})

document.querySelector('.contacts__location').src = location
document.querySelector('.header__logo').src = logo
document.querySelector('.header__button-cart').src = cartImg
document.querySelector('.header__button-favorite').src = favbutton
document.querySelector('.banner__img--big').src = miner
document.querySelector('.banner__img--small').src = coin
document.querySelector('.benefits-cont__img').src = benefitsimg
document.querySelector('.header__button-search').src = search
document.querySelector('.footer__logo').src = whitelogo
document.querySelector('.header__telegram').src = tgwh
document.querySelector('.header__whatsapp').src = whatswh
burgermenuButton.src = menu
bannerLink.disabled === true ? arrowBanner.src = arrowdisabled : arrowBanner.src = arrow


document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('.menu__button');
    const hiddenItems = document.querySelectorAll('.menu__item--hide')
    const dropdownButtonHeader = document.querySelector('.header__dropdown-button')
    const hiddenItemsHeader = document.querySelectorAll('.header__item--dropdown')

   
    const burgerMenu = document.querySelector('.menu')
     


    dropdownButton.addEventListener('click', function (event) {
         event.stopPropagation(); 
         dropdownButton.classList.toggle('active')
         document.querySelector('.menu__list--hide').classList.toggle('active')
         hiddenItems.forEach(el =>
            el.classList.toggle('active')
         )
         });
         dropdownButtonHeader.addEventListener('click', function (event) {
            event.stopPropagation(); 
            dropdownButtonHeader.classList.toggle('active')
            document.querySelector('.header__list--dropdown').classList.toggle('active')
            hiddenItemsHeader.forEach(el =>
               el.classList.toggle('active')
            )
            });

         burgermenuButton.addEventListener('click', function (event) {
            event.stopPropagation();
            burgerMenu.classList.toggle('active')
            document.querySelector('.overlay').classList.toggle('active')
            burgermenuButton.classList.toggle('active')
            if (burgermenuButton.classList.contains('active')) {
                burgermenuButton.src = cross;
            } else {
                burgermenuButton.src = menu;
            }
         })

     });

     document.querySelector('.phone__input').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.substring(0, 11);
        }
    });

    document.querySelector('.phone__input').addEventListener('keypress', function(e) {
        if (e.key === '.' && this.value.includes('.')) {
          e.preventDefault(); 
        } else if (!/[0-9]/.test(e.key)) {
          e.preventDefault();
        }
      });
    
    
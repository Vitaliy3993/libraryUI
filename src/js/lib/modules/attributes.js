import $ from '../core';

// Создание нового атрибута
$.prototype.setAttribute = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName) || !this[i].getAttribute(attributeName).value) {
            this[i].setAttribute(attributeName, value);
        }
    }

    return this;
};

// Получение атрибута
$.prototype.getAttribute = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(attributeName);
    }
    console.log(this);
    return this;
};

// Удаление атрибута
$.prototype.removeAttribute = function(attributeName) {
    for (let i = 0; i < this.length; i++) { 
        this[i].removeAttribute(attributeName);
    }

    return this;
};

//Переключение атрибута
$.prototype.toggleAttribute = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            this[i].setAttribute(attributeName, value);
        } else {
            this[i].removeAttribute(attributeName, value);
        }
    }

    return this;
};
import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const anim = this.animateOverTime(duration, _fadeIn, fin);
        requestAnimationFrame(anim);
    }
    return this;
};

$.prototype.fadeOut = function(duration, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(anim);
    }
    return this;
};

$.prototype.scaleOff = function(duration, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.transform = `scaleX(${1 - complection})`;
            this[i].style.transform = `scaleY(${1 - complection})`;
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(anim);
    }
    return this;
};

$.prototype.scaleIn = function(duration, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = complection;
            this[i].style.transform = `scaleX(${complection})`;
            this[i].style.transform = `scaleY(${complection})`;
            if (complection === 1) {
                this[i].style.transform = 'scale(1, 1)';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(anim);
    }
    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {  // Для перевірки inline стилів
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    return this;
};
{
    let ul0 = document.getElementsByTagName('ul')[0];
    let ul1 = document.getElementsByTagName('ul')[1];
    let hamburger = document.querySelector('.hamburger');
    let close = document.querySelector('.close');
    let logo = document.querySelector('.logo');
    let logoLg = document.querySelector('.logo-lg');

    document.querySelector('body').onresize = () => {
        mediaQuery();
    };
    mediaQuery();
    var mode = 0;
    function mediaQuery() {
        var x = window.matchMedia("(max-width: 576px)");
        if (x.matches) {
            hamburger.classList.remove('hide-icon');
            if (!ul0.classList.contains('hide-ul')) {
                ul0.classList.add('hide-ul');
            }
            if (!logoLg.classList.contains('hide-span')) {
                logoLg.classList.add('hide-span');
            }
            if (logo.classList.contains('hide-span')) {
                logo.classList.remove('hide-span');
            }
        } else {
            if (ul0.classList.contains('hide-ul')) {
                ul0.classList.remove('hide-ul');
                hamburger.classList.add('hide-icon');
                close.classList.add('hide-icon');
            }
            if (logoLg.classList.contains('hide-span')) {
                logoLg.classList.remove('hide-span');
            }
            if (!logo.classList.contains('hide-span')) {
                logo.classList.add('hide-span');
            }
            if (!ul1.classList.contains('hide-icon')) {
                hamburger.classList.add('hide-icon');
                close.classList.add('hide-icon');
                ul1.classList.add('hide-ul1');
            }
        }
    }
    hamburger.addEventListener('click', () => {
        openMenu();
    });
    close.addEventListener('click', () => {
        openMenu();
    });
    function openMenu() {
        if (close.classList.contains('hide-icon')) {
            hamburger.classList.add('hide-icon');
            close.classList.remove('hide-icon');
            ul1.classList.remove('hide-ul1');
        }
        else {
            hamburger.classList.remove('hide-icon');
            close.classList.add('hide-icon');
            ul1.classList.add('hide-ul1');
        }
    }

    // table custom style
    let table = Array.from(document.querySelectorAll('tr'));

    table.forEach((tr, index, array) => {
        if (index % 2 == 0) {
            tr.classList.add('odd-tr');
        }
    });
}
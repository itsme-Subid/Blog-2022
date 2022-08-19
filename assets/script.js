{
    let ul0 = document.getElementsByTagName('ul')[0];
    let ul1 = document.getElementsByTagName('ul')[1];
    let hamburger = document.querySelector('.hamburger');
    let close = document.querySelector('.close');
    let logo = document.querySelector('.logo');
    let logoLg = document.querySelector('.logo-lg');

    let body = document.querySelector('body');
    body.onresize = () => {
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

    // contact
    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above

        let form = document.getElementById("my-form");
        let status = document.getElementById("status");

        // Success and Error functions for after the form is submitted
        function success() {
            form.reset();
            status.innerHTML = "Thanks! Your form has been successfully submitted.";
            setTimeout(hideMsg, 3000);
        }

        function error() {
            status.innerHTML = "Oops! There was a problem.";
            setTimeout(hideMsg, 3000);
        }

        function hideMsg() {
            status.innerHTML = "";
        }

        // handle the form submission event
        form.addEventListener("submit", function (ev) {
            ev.preventDefault();
            let data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request
    function ajax(method, url, data, success, error) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
}
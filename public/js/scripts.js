'use strict';

$(document).ready(() => {
    const validEmail = /(^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$)|(^N\/A$)/;
    const timeDelay = 1500;

    // Modal images datastore for projects
    const modalProjectImages = {
        taskinator: ['img/taskinator-login.png', 'img/taskinator-user.png'],

        scrapinator: ['img/scrapinator-login.png', 'img/scrapinator-newslist.png', 'img/scrapinator-signup.png'],

        onlineReporting: ['img/onlinereporting-login.png', 'img/onlinereporting-stats.png', 'img/onlinereporting-adddoc.png'],

        roSurvey: ['img/rosurvey-login.png', 'img/rosurvey-chart.png', 'img/rosurvey-entryform.png'],

        profitCalculator: ['img/profitcalculator-docs.png', 'img/profitcalculator-costcalc.png', 'img/profitcalculator-users.png'],

        reactNews: ['img/reactnews-search.png'],

        hangman: ['img/hangman.png'],

        spotify: ['img/spotify-detail.png', 'img/spotify-playlists.png', 'img/spotify-search.png'],

        dashboard: ['img/dashboard.png'],
    };

    // Initialize fullpage plugin
    $('#fullpage').fullpage({
        // sectionsColor: ['#2b3e50', '#5F7A8E', '#2E6171', '#385972', '#0B4F6C'],
        sectionsColor: ['#5F7A8E', '#2E6171', '#385972', '#0B4F6C'],
        // anchors: ['Home', 'Profile', 'Projects', 'Resume', 'Contact'],
        anchors: ['Profile', 'Projects', 'Resume', 'Contact'],
        menu: '#menu',
        scrollOverflow: true,
        scrollOverflowReset: true,
        navigation: true,
        slidesNavigation: true,
        continuousVertical: true,
        continuousHorizontal: true,
        scrollingSpeed: 1000
    });

    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Add custom styles to alert.js plugin
    $.notify.addStyle('custom', {
        html: '<div><span data-notify-text/></div>',
        classes: {
            base: {
                'font-weight': 'bold',
                'padding': '8px 15px 8px 14px',
                'background-color': '#fcf8e3',
                'border': '1px solid #fbeed5',
                'border-radius': 'none',
                'white-space': 'nowrap',
                'padding-left': '25px',
                'background-repeat': 'no-repeat',
                'background-position': '3px 7px'
            },
            error: {
                'color': '#ccc',
                'background-color': '#941B0C',
                'border-color': '#621708',
            },
            success: {
                'color': '#ccc',
                'background-color': '#306BAC',
                'border-color': '#306BAC',
            }
        }
    });

    $('.project-desc-span').on('click', (e) => {
        // Get modal info
        let title = $(e.target).data('title');
        let desc = $(e.target).data('desc');
        let imageSrc = $(e.target).data('imagesrc');
        console.log('imagesrc: ' +  typeof imageSrc);
        let images = modalProjectImages[imageSrc];

        /* Build and display html for project modal images */
        let imgHtml = ``;
        images.forEach(srcLink => {
            imgHtml += `<img src="${srcLink}" alt=${srcLink} Site Image" />`;
        });

        // Fill in the project modal info
        $('#modal-title').text(title);
        $('#modal-desc').text(desc);
        $('.modal-img').html(imgHtml);

        // Show the modal
        $('.info-modal').modal('show');

        /* Populate and display project image modal */
        $('.info-modal img').on('click', (e) => {
            let imgUrl = e.target;
            // Fill in the modal with the project image
            $('.project-img').html(imgUrl);
            $('.project-img-modal').modal('show');
            console.log('this: ' , e.target);
        });
    });

    // Process contact form
    $('#contact-btn').on('click', (e) => {
        e.preventDefault();

        // Get and validate inputs
        let name = $('#contact-name').val();
        let email = $('#contact-email').val();
        let message = $('#contact-message').val();

        let errors = [];
        if (!name) {
            errors.push('Please enter a valid name!\n');
        }
        if (!validEmail.test(email)) {
            errors.push('Please enter a valid email address!\n');
        }
        if (!message) {
            errors.push('Please enter a valid message!');
        }

        let errorMsg = '';
        if (errors.length > 0) {
            errors.forEach(error => {
                errorMsg += error;
            });

            $.notify($('#contact-btn'), errorMsg, {
                style: 'custom',
                className: 'error',
                position: 'right',
            });
            return false;
        }

        initializeSpinner();

        let url = '/contact';
        let formData = 'name=' + name + '&email=' + email + '&message=' + message;

        // No errors; process form submission via AJAX
        $.ajax({
            type: 'POST',
            url: url,
            data: formData
        }).done(response => {
            setTimeout(() => {
                removeSpinner();

                if(response) {
                    console.log('response: ' + response);
                    $.notify($('#contact-btn'), 'Thank you, your message has been sent!', {
                        style: 'custom',
                        className: 'success',
                        position: 'right',
                    });
                    $('input').val('');
                    $('textarea').val('');
                }
            }, timeDelay);
        });
    });

    // Load the spinner
    function initializeSpinner() {
        $('div.spinner-div').html('<div class="spinner">Loading...</div>');
    }

    // Remove the spinner
    function removeSpinner() {
        $('div.spinner-div').empty();
    }

    function notify(element, msg, options) {
        return $.notify(element, msg, options);
    }
    /*
    // Return notification from notify.js plugin
    function notify(element, msg, type, position) {
        return $.notify(
            element,
            msg,
            type,
            {
                style: 'custom',
                position: position,
                autoHideDelay: 4000
            }
        );
    }*/
});
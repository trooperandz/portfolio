'use strict';

$(document).ready(() => {
    // Modal images datastore for projects
    const modalProjectImages = {
        taskinator: ['img/taskinator-login.png', 'img/taskinator-adduser.png'],

        scrapinator: ['img/scrapinator-login.png', 'img/scrapinator-newslist.png', 'img/scrapinator-signup.png'],

        onlineReporting: ['img/onlinereporting-login.png', 'img/onlinereporting-stats.png', 'img/onlinereporting-adddoc.png'],

        roSurvey: ['img/rosurvey-login.png', 'img/rosurvey-chart.png', 'img/rosurvey-entryform.png'],

        profitCalculator: ['img/profitcalculator-docs.png', 'img/profitcalculator-costcalc.png', 'img/profitcalculator-users.png'],

        reactNews: ['img/reactnews-search.png'],
    };

    // Initialize fullpage plugin
    $('#fullpage').fullpage({
        // slate gray:
        sectionsColor: ['#2b3e50', '#647381', '#008b8b', '#cd5c5c', '#008b8b'],
        anchors: ['Page1', 'Page2', 'Page3', 'Page4'],
        menu: '#menu',
        navigation: true,
        scrollingSpeed: 1000
    });

    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

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
});
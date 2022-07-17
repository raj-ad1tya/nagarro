var websiteNames = [
    'Portfolio',
    'Pokemon',
    'To Do List (JS)',
    'To Do List (JQuery)',
    'Form Validation',
    'Copy Text',
    'Modal Page',
    'Image Slider'
];

var repoLinks = [
    'https://github.com/raj-ad1tya/nagarro/tree/main/portfolio',
    'https://github.com/raj-ad1tya/nagarro/tree/main/pokemon',
    'https://github.com/raj-ad1tya/nagarro/tree/main/to-do-jquery',
    'https://github.com/raj-ad1tya/nagarro/tree/main/form-validation',
    'https://github.com/raj-ad1tya/nagarro/tree/main/to-do-js',
    'https://github.com/raj-ad1tya/nagarro/tree/main/copy-text',
    'https://github.com/raj-ad1tya/nagarro/tree/main/modal-page',
    'https://github.com/raj-ad1tya/nagarro/tree/main/image-slider'
];

var hostedLinks = [
    'https://raj-ad1tya.github.io/nagarro/portfolio/',
    'https://raj-ad1tya.github.io/nagarro/pokemon/',
    'https://raj-ad1tya.github.io/nagarro/to-do-jquery/',
    'https://raj-ad1tya.github.io/nagarro/form-validation/',
    'https://raj-ad1tya.github.io/nagarro/to-do-js/',
    'https://raj-ad1tya.github.io/nagarro/copy-text/',
    'https://raj-ad1tya.github.io/nagarro/modal-page/',
    'https://raj-ad1tya.github.io/nagarro/image-slider/'
];

$(document).ready(function () {
    jQuery.each(websiteNames, function (index, value) {
        $("#list-assignments").append(
            $('<div class="d-flex border-bottom">' +
                '<div class="px-4 py-2 bg-light flex-grow-1 hover-bg-light hosted-link">' +
                '<i class="fas fa-globe"></i> '+ websiteNames[index] +
                '</div>' +
                '<div class="px-20 py-2 bg-warning hover-bg-warning text-center repo-link">' +
                '<i class="fab fa-github"></i> Repo' +
                '</div>' +
                '</div>')
        );
    });

    $(".hosted-link").click(function () {
        var i = $(".hosted-link").index(this);
        location.href = hostedLinks[i];
    });

    $(".repo-link").click(function () {
        var i = $(".repo-link").index(this);
        location.href = repoLinks[i];
    });
});

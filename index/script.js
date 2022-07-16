var repoLinks = [
    'https://github.com/raj-ad1tya/nagarro/tree/main/portfolio',
    'https://github.com/raj-ad1tya/nagarro/tree/main/pokemon',
    'https://github.com/raj-ad1tya/nagarro/tree/main/to-do-js',
    'https://github.com/raj-ad1tya/nagarro/tree/main/to-do-jquery'
]

var hostedLinks = [
    'https://raj-ad1tya.github.io/nagarro/portfolio/',
    'https://raj-ad1tya.github.io/nagarro/pokemon/',
    'https://raj-ad1tya.github.io/nagarro/to-do-js/',
    'https://raj-ad1tya.github.io/nagarro/to-do-jquery/'
]

$(document).ready(function() {
    $(".hosted-link").click(function() {
        var i = $(".hosted-link").index(this);
        location.href = hostedLinks[i];
    });

    $(".repo-link").click(function() {
        var i = $(".repo-link").index(this);
        location.href = repoLinks[i];
    });
});

var repoLinks = [
    'https://github.com/raj-ad1tya/nagarro/tree/main/portfolio',
    'https://github.com/raj-ad1tya/nagarro/tree/main/pokemon'
]

var hostedLinks = [
    'https://raj-ad1tya.github.io/nagarro/portfolio/',
    'https://raj-ad1tya.github.io/nagarro/pokemon/'
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

console.log('scrpt running');
let myName = 'GieMyung';
console.log(myName);

function getVowelCount(aString) {
    lowerCaseString = aString.toLowerCase();
    modifiedString = lowerCaseString.replaceAll('a', '');
    modifiedString = modifiedString.replaceAll('e', '');
    modifiedString = modifiedString.replaceAll('i', '');
    modifiedString = modifiedString.replaceAll('o', '');
    modifiedString = modifiedString.replaceAll('u', '');
    modifiedString = modifiedString.replaceAll('y', '');
    return(lowerCaseString.length-modifiedString.length);

};

console.log(getVowelCount(myName));

let h1Element = $('h1');

$(h1Element).text("Interactive Pet Viewer");

let footerElement = $('footer');

$(footerElement).html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');

$('img').css('cursor', 'pointer');

document.getElementById('cats').style.display = "none";

document.getElementById('btnShowDogs').classList.add("active"); 


$('button').on("click", function() {
    $('#dogs, #cats').toggle("fast");
    $('#btnShowDogs, #btnShowCats').toggleClass("active");
 
});


$('img').attr("data-bs-toggle", "modal");
$('img').attr("data-bs-target", "#myModal");


myModal.addEventListener('shown.bs.modal', function (event) {
        const imageClicked = $(event.relatedTarget);
            $('#modalImage').attr("src", imageClicked.attr("src"));
            $('#modalImage').attr("alt", imageClicked.attr("alt"));
        
})



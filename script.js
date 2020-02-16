window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const notes = document.querySelectorAll('.notes div');

    notes.forEach((note, index) => {
        note.addEventListener('click', function(){
            sounds[index].currentTime = 0; 
            sounds[index].play();
            addAnimation();
        });
    });
});

function addAnimation(){
    notes.style.transform ="scale(1.3)"
};
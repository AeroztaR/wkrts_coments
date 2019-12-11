const input = document.querySelector('#comment__upload')
input.addEventListener('change', () => {
	const reader = new FileReader();
		reader.onload = function(e) {
			e.preventDefault();
			const preview = document.querySelector('.comment__upload-preview');
			const img = new Image();
			img.src = e.target.result;
			img.classList.add('uploadImg');
			while (preview.firstChild) {
				preview.removeChild(preview.firstChild);
			}
			preview.appendChild(img);
    	};

    reader.readAsDataURL(input.files[0]);
});

const imgFocus = document.querySelector('.comment__upload-preview');

imgFocus.addEventListener('click', () => {
	const modal = document.querySelector('.modal');
	const modalImg = document.querySelector('.modal__img');
	const imgZoom = document.querySelector('.uploadImg').getAttribute('src');

	modal.classList.remove('visually-hidden');
	modalImg.setAttribute('src', imgZoom);
})

// modal

const closeBtn = document.querySelector('.modal__close');
const modalContent = document.querySelector('.modal__content');
const modal = document.querySelector('.modal');

closeBtn.addEventListener('click', closeModal);

function closeModal (){
    modal.classList.add('visually-hidden');
}

window.addEventListener('click', outsideCloseModal);

function outsideCloseModal(e){
    if(e.target == modal){
        modal.classList.add('visually-hidden');
    }
}

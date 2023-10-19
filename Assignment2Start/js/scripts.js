// Constants for query selector
const studentIdParagraph = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imageElement = document.getElementById('images');

const imageSrcArray = [
    'img/image1.jpg', 
    'img/image2.jpg', 
    'img/image3.jpg', 
    'img/image4.jpg', 
    'img/image5.jpg'
];



// Function to change bg color from user input and add student id
function changeCustomColor() {
    let inputValue = parseInt(customNumberInput.value);
    changeBackgroundColor(inputValue);
    studentIdParagraph.textContent = "Your Student ID Here";  // Replace with your student ID
}

// Function to change bg color from random no.
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    changeBackgroundColor(randomValue);
}

function changeBackgroundColor(value) {
    let color;
    if (value < 0 || value > 100) {
        color = 'red';
    } else if (value <= 20) {
        color = 'green';
    } else if (value <= 40) {
        color = 'blue';
    } else if (value <= 60) {
        color = 'orange';
    } else if (value <= 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }
    document.body.style.backgroundColor = color;
}

// Function to generate options for select list
function addList() {
    if (imageSelect.children.length <= 1) {
        imageSrcArray.forEach(imgSrc => {
            let option = document.createElement('option');
            option.value = imgSrc;
            option.textContent = imgSrc.split('/').pop();  // Get the image filename
            imageSelect.appendChild(option);
        });
    }
}

// Function to change image
function changeImage() {
    let selectedImageSrc = imageSelect.value;
    imageElement.src = selectedImageSrc;
}

// Event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);
imageSelect.addEventListener('change', changeImage);

// Get the container element by its ID
const container = document.getElementById("container");

// Calculate the vertical and horizontal center positions
const verticalCenter = window.innerHeight / 2 - container.offsetHeight / 2;
const horizontalCenter = window.innerWidth / 2 - container.offsetWidth / 2;

// Set the calculated positions as the element's top and left CSS properties
container.style.top = `${verticalCenter}px`;
container.style.left = `${horizontalCenter}px`;

const childcontainer = document.createElement('div');
childcontainer.className='child-div'
container.appendChild(childcontainer);

const hrBefore = document.createElement('hr');
hrBefore.className = 'hrline'
childcontainer.appendChild(hrBefore)

const elementE1 = document.createElement('p');
elementE1.textContent = 'Bundle & Save';
elementE1.className = 'custom-heading'; // Add your desired class name here
container.appendChild(elementE1);




function createCard(parentElement, pairText, priceText, discountText) {
    const outerContainer = document.createElement('div');
    outerContainer.className = 'outer-container1';
    parentElement.appendChild(outerContainer);

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    outerContainer.appendChild(radioInput);

    const innerContainer1 = document.createElement('div');
    innerContainer1.className = 'inner-container';
    outerContainer.appendChild(innerContainer1);

    const name1 = document.createElement('p');
    name1.textContent = pairText;
    innerContainer1.appendChild(name1);

    const name2 = document.createElement('p');
    name2.textContent = priceText;
    name2.className = 'p';
    innerContainer1.appendChild(name2);

    const innerContainer2 = document.createElement('div');
    innerContainer2.className = 'inner-container';
    outerContainer.appendChild(innerContainer2);

    const name3 = document.createElement('p');
    name3.textContent = discountText;
    innerContainer2.appendChild(name3);
}
// Create the first card
createCard(container, '1 pair', 'DKK 195.0', '50% OFF');
// ###


// Get the outer container element by its ID
const outerContainer = document.createElement("div");
outerContainer.classList='inner-container-2'
container.appendChild(outerContainer)

const childCard=document.createElement('div')
childCard.className='child-card'
outerContainer.appendChild(childCard)


const radioInput = document.createElement('input');
radioInput.type = 'radio';
radioInput.className = 'input-red';
childCard.appendChild(radioInput);

// Create and append the first inner container
const innerContainer1 = document.createElement('div');
innerContainer1.className = 'inner-container'; // You can add CSS styles to this class
childCard.appendChild(innerContainer1);


// Create and append the first name (vertical) to the inner container
const name1 = document.createElement('p');
name1.textContent = '2 pair';
innerContainer1.appendChild(name1);

// Create and append the second name (vertical) to the inner container
const name2 = document.createElement('p');
name2.textContent = 'DKK 345.0 ';
name2.className = 'dkk345'
innerContainer1.appendChild(name2);

const name4 = document.createElement('p');
name4.textContent = 'DKK 345.0 ';
name4.className = 'p4'
childCard.appendChild(name4);

// Create and append the second inner container
const innerContainer2 = document.createElement('div');
innerContainer2.className = 'inner-container'; // You can add CSS styles to this class
childCard.appendChild(innerContainer2);

// Create and append the third name (horizontal) to the inner container
const name3 = document.createElement('div');
name3.className='name3'
const popular=document.createElement('p')
const perceage=document.createElement('p')
popular.textContent = 'Most popular';
popular.className='popular'
perceage.textContent = '50% OFF';
name3.appendChild(popular);
name3.appendChild(perceage);
childCard.appendChild(name3)



// llll


// Create and append the child card
const childCard1 = document.createElement('div');
childCard1.className = 'child-card-1';
outerContainer.appendChild(childCard1);

// Create a div for the label and select elements
const labelSelectContainer = document.createElement('div');
labelSelectContainer.className = 'label-select-container';
childCard1.appendChild(labelSelectContainer);

// Create and append the first row
const row1 = document.createElement('div');
row1.className = 'row';
labelSelectContainer.appendChild(row1);

// Create and append the "Size" label for #1
const sizeLabel1 = document.createElement('label');
sizeLabel1.textContent = '#1 Size:';
sizeLabel1.className = 'vertical-label';
row1.appendChild(sizeLabel1);

// Create and append the first <select> element for size
const sizeSelect1 = document.createElement('select');
sizeSelect1.name = 'size1';
row1.appendChild(sizeSelect1);

const sizeOptions = ['S', 'M', 'XL'];
sizeOptions.forEach(option => {
    const sizeOption = document.createElement('option');
    sizeOption.value = option;
    sizeOption.textContent = option;
    sizeSelect1.appendChild(sizeOption);
});

// Create and append the "Color" label for #1
const colorLabel1 = document.createElement('label');
colorLabel1.textContent = '#1 Color:';
colorLabel1.className = 'vertical-label';
row1.appendChild(colorLabel1);

// Create and append the first <select> element for color
const colorSelect1 = document.createElement('select');
colorSelect1.name = 'color1';
row1.appendChild(colorSelect1);

const colorOptions1 = ['Red', 'Blue', 'Green', 'Yellow'];
colorOptions1.forEach(option => {
    const colorOption = document.createElement('option');
    colorOption.value = option;
    colorOption.textContent = option;
    colorSelect1.appendChild(colorOption);
});










// Create and append the second <select> element for color in the color div




function createCard2(parentElement, pairText, priceText, discountText) {
    const outerContainer = document.createElement('div');
    outerContainer.className = 'outer-container';
    parentElement.appendChild(outerContainer);

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    outerContainer.appendChild(radioInput);

    const innerContainer1 = document.createElement('div');
    innerContainer1.className = 'inner-container';
    outerContainer.appendChild(innerContainer1);

    const name1 = document.createElement('p');
    name1.textContent = pairText;
    innerContainer1.appendChild(name1);

    const name2 = document.createElement('p');
    name2.textContent = priceText;
    name2.className = 'p';
    innerContainer1.appendChild(name2);

    const innerContainer2 = document.createElement('div');
    innerContainer2.className = 'inner-container';
    outerContainer.appendChild(innerContainer2);

    const name3 = document.createElement('p');
    name3.textContent = discountText;
    innerContainer2.appendChild(name3);
}
// Create more cards as needed
createCard2(container, '3 pairs', 'DKK 528.00', '60% OFF');




const contaier4 = document.createElement('div');
contaier4.className = 'outer-container-4';
container.appendChild(contaier4);

const tiltePara=document.createElement('p')
tiltePara.textContent='Free 2 Day Shipping'
tiltePara.className='free-shiping'
contaier4.appendChild(tiltePara)



const tiltePara1 = document.createElement('p')
tiltePara1.textContent = 'Total: DKK 366.00'
tiltePara1.className = 'total-text'
contaier4.appendChild(tiltePara1)

const buttonE1=document.createElement('Button')
buttonE1.textContent='+Add Cart'
buttonE1.className='button'
container.appendChild(buttonE1)

const endSPan=document.createElement('span')
endSPan.textContent='@powered by Pumper'
endSPan.className='pumper'
container.appendChild(endSPan)






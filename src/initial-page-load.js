export function loadPage() {
    const contentDivv = document.getElementById('content');
    contentDivv.innerHTML = ''

    const contentDiv = document.getElementById('content');
    const mainPage = document.createElement('div')
    mainPage.id = 'main-page'
  
    const heading = document.createElement('h1');
    heading.textContent = 'My Restaurant';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to our restaurant.';
  
    const image = document.createElement('img');
    image.src = '../src/images/rest.jpg'; 
    image.alt = 'Restaurant';
    image.style.height = '300px'
  
    contentDiv.appendChild(mainPage)
    mainPage.appendChild(heading);
    mainPage.appendChild(paragraph);
    mainPage.appendChild(image);
}
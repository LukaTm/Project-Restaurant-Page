export function loadPage() {
const contentDiv = document.getElementById('content');
  
    const heading = document.createElement('h1');
    heading.textContent = 'My Restaurant';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to our restaurant.';
  
    const image = document.createElement('img');
    image.src = '../src/rest.jpg'; 
    image.alt = 'Restaurant';
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(image);
}
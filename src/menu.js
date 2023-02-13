export function menuPage() {
    // Clear page
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''

    const content = document.getElementById('content');
    const menu = document.createElement('div')
    menu.id = 'menuPage'
    
    const h1 = document.createElement('h1')
    h1.textContent = "Menu"
    const h2 = document.createElement('h2')
    h2.textContent = "Main Dishes"

    // Images
    const lasagnaPhoto = document.createElement('img');
    lasagnaPhoto.src = '../src/images/lasagna.jpg'; 
    lasagnaPhoto.alt = 'lasagna';
    lasagnaPhoto.style.height = '300px'

    const iceCreamPhoto = document.createElement('img');
    iceCreamPhoto.src = '../src/images/ice-cream.jpg'; 
    iceCreamPhoto.alt = 'ice cream';
    iceCreamPhoto.style.height = '300px'

    const pancakePhoto = document.createElement('img');
    pancakePhoto.src = '../src/images/pancake.jpg'; 
    pancakePhoto.alt = 'lasagna';
    pancakePhoto.style.height = '300px'


    // Drinks 
    const h2Drinks = document.createElement('h2')
    h2Drinks.textContent = "Drinks"

    const drinksPhoto = document.createElement('img');
    drinksPhoto.src = '../src/images/drink.jpg'; 
    drinksPhoto.alt = 'drink';
    drinksPhoto.style.height = '300px'
    

    content.appendChild(menu)
    menu.appendChild(h1)
    menu.appendChild(h2)
    menu.appendChild(lasagnaPhoto)
    menu.appendChild(iceCreamPhoto)
    menu.appendChild(pancakePhoto)

    menu.appendChild(h2Drinks)
    menu.appendChild(drinksPhoto)
}
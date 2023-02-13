export function contactPage() {
    const contentDivv = document.getElementById('content');
    contentDivv.innerHTML = ''

    const contentDiv = document.getElementById('content');
    const mainPage = document.createElement('div')
    mainPage.id = 'contact-page'
  
    const heading = document.createElement('h3');
    heading.textContent = 'Mama Bear';
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Chef 555-555-5554 realemail@notFake.com'
  

    contentDiv.appendChild(mainPage)
    mainPage.appendChild(heading)
    mainPage.appendChild(paragraph)

}
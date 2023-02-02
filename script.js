let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];


// When you reload the page, the script. js file loads a random DOM quote. Let's play with the included functio

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();


  // Do all of your work inside the document.addEventListener  


  // Part 1 write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  function shrinkMain(length) {
    const main = document.getElementById('main-title');
    if (main.innerHTML.length > length) {
      main.innerHTML = main.innerHTML.slice(0, length) + ' '; // This sets a limit of how many characters that will display to save space
      console.log(main.textContent.length)
    } else console.dir(main)
  }
  shrinkMain(27);

  // Part 2 Select the body and change the background-color to a new color of your choice.

  function bodyBGC() {
    document.body.style.backgroundColor = 'teal';
  }
  bodyBGC();

  // Part 3 Select DOM's Favorite Things list and remove the last list item.

  function remove() {
    const ul = document.getElementById('favorite-things')
    ul.removeChild(ul.lastElementChild) // removeChild is a method used to removes a child node from the dom. It returns the removed node. it takes one parameter which is the node you are removing. here, the node i am removing is the last  child of the children within the ul. removelastchild is another built in method
    console.log(ul);
  }
  remove();
  // Part 4 Select al. special-title class elements and change their font-size to 2rem . Remember you might have to iterate through the list of elements
  function special() {
    const special = document.querySelectorAll('.special-title')
    special.forEach(element=>{
      console.log(element)
      element.style.fontSize = '2rem';
    });
  }
  special();

  // Part 5 Turns out DOM never raced ni Chicago. Access the Past Races list and remove Chicago.
  function chiBye() {
    const pastRace = document.getElementById('past-races')
    //console.log((pastRace))
    //console.log((pastRace.children))

    pastRace.children[3].remove();// -> works but I want it in the if statement -_-

    // for (let i = 0; i, pastRace.children[i]; i++) { // idk what i,pastRace is but it works...
    //   if (pastRace.children[i].innerHTML == 'Chicago') {
    //     remove(pastRace.children[i])
    //   } else {
    //     console.log(pastRace.children[i])
    //   }

    // }
  }
  chiBye();

  // Part 6 Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
  function pastRaces() {
    const newCity = document.createElement('li')
    const newCityText = document.createTextNode('Boston')
    const pastRace = document.getElementById('past-races')
    newCity.appendChild(newCityText)
    pastRace.appendChild(newCity)
  }
  pastRaces();

  // Part 7 Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post , a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
  function post() {
    const h1 = document.createElement('h1')
    const h1Txt = document.createTextNode('Boston')
    const newPostP = document.createElement('p')
    const newPostPTxt = document.createTextNode(' Boston’s weather is getting colder worm up! ')
    // append div to main
    const main = document.querySelector('.main');
    // create div with blog with class of .blog-post purple // append to main
    const blogContainer = document.createElement('div')
    blogContainer.classList.add('blog-post')
    blogContainer.classList.add('purple')
    // append blog container to main
    main.appendChild(blogContainer)
    // append h1 to div
    blogContainer.appendChild(h1)
    // append text to h1
    h1.appendChild(h1Txt)
    h1.style.color = '#FFF'
    h1.style.marginBottom = '3rem'
    // append p to div
    blogContainer.appendChild(newPostP)
    // append text to p
    newPostP.appendChild(newPostPTxt)
    // h1.style.fontSize = '20px'
    newPostP.style.fontSize = '1.5rem'
  }
  post();

  // Part 8 Query select the # quote - title DI element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  function changeQuote() {
    const quote = document.querySelector('#quote-title')
    quote.addEventListener('click', function () {
      randomQuote();
    });
  }
  changeQuote();

  // Part 9
  //Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. 
  //The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.• The mouseout handler should toggle the class . purple • The mouseenter handler should toggle the class . red -Test it out! Hint: Remember the document node property . classList and the document node method . toggle() 

   function all() {
   let allElms = document.querySelectorAll('.blog-post')
   allElms.forEach(element => {
      //The first event handler should be listening for mouseout events.. should toggle the class .purple
      element.addEventListener('mouseout', function () {
      // on mouseout toggle purple
      element.classList.toggle('purple')
    });
    
    //the second handler should be listening for mouseenter events.. should toggle the class .red
    element.addEventListener('mouseenter', function () {
      // on mouseenter toggle red
      element.classList.toggle('red')
    });
    //console.log(element)
   });
  }
  all();

})
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];
// TODO: Rename--too similiar to addItems
function addItem( e ) {
  // Prevent page from reloading, which is default behavior for forms
  e.preventDefault();
  // Grab the input value from the Item field
  const itemName = document.querySelector( '[name = "item" ]' ).value;
  // Create a basic Object w/ 2 properties
  const item = {
    itemName,
    done: false
  };
  // Store the newly created Object in an Array
  // TODO: Rename--identifiers too similiar
  items.push( item );
  populateList( items, itemsList );
  localStorage.setItem( 'items', JSON.stringify( items ) );
  // Reset input field after submission
  addItems.reset();
}

// Create list of all objects; could just append new <li> instead of re-writing
// the whole thing each time
function populateList( plates = [], platesList ) {
  platesList.innerHTML = plates.map( ( plate, i ) => {
    return `
      <li>
         <input type="checkbox" data-index=${ i } id="item${ i }">
        <label for="item${ i }">${ plate.itemName }</label>
      </li>
    `;
  }).join(''); // .map returns a new array; desired return value is long
}               // string, not an array of strings

addItems.addEventListener( 'submit', addItem );
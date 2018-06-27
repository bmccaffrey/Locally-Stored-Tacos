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
  // Reset input field after submission
  addItems.reset();
}

// Create list of all objects
function populateList( plates = [], platesList ) {
  platesList.innerHTML = plates.map( ( plate, i ) => {
    return `
      <li>
        <label for="">${ plate.itemName }</label>
      </li>
    `;
  }).join(''); // .map returns a new array; desired return value is long
}               // string, not an array of strings

addItems.addEventListener( 'submit', addItem );
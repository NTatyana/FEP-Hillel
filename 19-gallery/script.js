const CONTACT_ITEM_SELECTOR = '.contactItem';
const DELETE_BTN_CLASS = 'deleteBtn';

const contactForm = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactList = document.querySelector('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;

contactForm.addEventListener('submit', onContactBtnSubmit);
contactList.addEventListener('click', onContactListClick);

function onContactBtnSubmit(e) {
  e.preventDefault();

  const contact = getContact();

  if(!isContactValid(contact)) {
    alert('Ошибка, проверьте правильность');
    return;
  }

  addNewContact(contact);
  clearContact();
}

function onContactListClick(e) {
  if(e.target.classList.contains(DELETE_BTN_CLASS)) {
    const contactItem = getContactItem(e.target);

    removeContact(contactItem);
  }
}


function getContact() {
  const contact = {};

  inputs.forEach(input => {
    contact[input.name] = input.value;
  })

  return contact;
}

function isContactValid(value) {
  return !isEmpty(value.name)
    && !isEmpty(value.surname)
    && isPhone(value.phone);
}

function isPhone(numb) {
  return !isEmpty(numb) && !isNaN(numb);
}

function isEmpty(value) {
  return typeof value === 'string' && value.trim() === '';
}

function addNewContact(contact) {
  let contactItemHTML = contactItemTemplate;

  for (let prop in contact) {
    contactItemHTML = contactItemHTML.replace(`{{${prop}}}`, contact[prop]);
  }

  contactList.insertAdjacentHTML('beforeend', contactItemHTML);
}

function clearContact() {
  contactForm.reset();
}

function getContactItem(el) {
  return el.closest(CONTACT_ITEM_SELECTOR);
}

function removeContact(contactItem) {
  contactItem.remove();
}




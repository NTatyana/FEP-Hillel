import StickersApi from "./StickersApi.js";

const DELETE_NOTE_SELECTOR = '.delete-note';
const EDIT_NOTE_CONTROL_SELECTOR = '.edit-note-control';
const NOTE_ITEM_SELECTOR = '.note';
const TEMPLATE_SELECTOR = '#noteTemplate';
const LIST_SELECTOR = '#list';
const ADD_NOTE_SELECTOR = '#addNoteBtn';

const EMPTY_NOTE = { description: '' };
let notesList = [];

const noteTemplate = $(TEMPLATE_SELECTOR).html();
const $noteListEl = $(LIST_SELECTOR)
  .on('click', DELETE_NOTE_SELECTOR, onDeleteClick)
  .on('focusout', EDIT_NOTE_CONTROL_SELECTOR, onListFocusout);

$(ADD_NOTE_SELECTOR).on('click', onAddNoteBtnClick);


showList();


function onDeleteClick(e) {
  const $element = getNoteElByChild($(this)); // e.target
  const $elementIndex = getNoteElId($element);

  $element.fadeOut(400, () => deleteNote($elementIndex));
}

function onListFocusout(e) {
  const $element = $(this);
  const id = getNoteElId($element);

  updateNote(id, { description: $element.val() });
}

function onAddNoteBtnClick() {
  createNote(EMPTY_NOTE);
}

function showList() {
  StickersApi.getList()
    .then(setData)
    .then(renderList);
}

function setData(data) {
  return (notesList = data);
}

function getNoteElementById(id) {
  return $noteListEl.find(`[data-note-index="${id}"]`);
}

function createNote(note) {
  StickersApi.create(note)
    .then((note) => {
      notesList.push(note);
      renderNote(note);
    });
}

function updateNote(id, changes) {
  const note = notesList.find((el) => el.id == id);

  Object.keys(changes).forEach((key) => (note[key] = changes[key]));
  StickersApi.update(id, note);
}

function deleteNote(id) {
  setData(notesList.filter((el) => el.id != id))
  deleteNoteElement(id);
  StickersApi.delete(id);
}

function deleteNoteElement(id) {
  const $element = getNoteElementById(id);

  $element && $element.remove();
}

function renderList(notesList) {
  const $notesHTML = notesList.map(getNoteHtml).join('');

  $noteListEl.append($notesHTML).fadeIn(1000);
}

function renderNote(note) {
  const $noteEl = $(getNoteHtml(note));

  $noteListEl.append($noteEl);
}

function getNoteHtml(note) {
  return noteTemplate
    .replace('{{id}}', note.id)
    .replace('{{description}}', note.description);
}

function getNoteElId($el) {
  const $note = getNoteElByChild($el);
  return $note && $note.data('noteIndex');
}

function getNoteElByChild($child) {
  return $child.closest(NOTE_ITEM_SELECTOR);
}








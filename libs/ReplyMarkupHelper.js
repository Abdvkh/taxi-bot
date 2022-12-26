/* SIMPLE TEXT KEYBOARD FACTORY */
function createKeyboard(keyboard = [], resize_keyboard = true) {
  return {
    keyboard,
    resize_keyboard,
  };
}

function createKeyboardFromText(keyboard = [], resize_keyboard = true) {
  keyboard = keyboard.map((row) =>
    row.map((button) => createKeyboardButton(button))
  );

  return createKeyboard(keyboard, resize_keyboard);
}

function createKeyboardButton(text, options = {}) {
  return { text, ...options };
}

function createButtonsFromString(buttons) {
  return buttons.split("\n").map((row) => row.split(","));
}

function createRequestContactButton(text) {
  return createKeyboardButton(text, { request_contact: true });
}

function createRequestLocationButton(text) {
  return createKeyboardButton(text, { request_location: true });
}

/* INLINE KEYBOARD FACTORY */
function createInlineKeyboard(inline_keyboard = []) {
  return { inline_keyboard };
}

function createInlineKeyboardButton(text, options) {
  return { text, ...options };
}

publish({
  keyboardFactory: {
    create: createKeyboard,
    createFromText: createKeyboardFromText,
    Button: createKeyboardButton,
    ButtonsFromString: createButtonsFromString,
    RequestContactButton: createRequestContactButton,
    RequestLocationButton: createRequestLocationButton,
  },
  inlineKeyboardFactory: {
    create: createInlineKeyboard,
    Button: createInlineKeyboardButton,
  },
});

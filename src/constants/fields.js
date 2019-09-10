export const INPUT = 'input';
export const CHECK_BOX = 'checkbox';

export const fields = {
  [INPUT]: {
    '$typeof': 'input',
    type: 'text',
    name: 'text',
    label: 'enter username here',
    placeholder: 'Text',
  },
  [CHECK_BOX]: {
    '$typeof': 'input',
    type: 'checkbox',
    name: 'checkbox',
    label: 'enter username here',
    placeholder: 'Text',
    value: 'checkbox'
  },
};
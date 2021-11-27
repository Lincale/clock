const inputValidator = (input) => {
  if (input !== '') {
    return true;
  }
};

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネントの名前を指定してください。ex) Header',
    validate: inputValidator,
  },
  {
    type: 'input',
    name: 'path',
    message: 'src/components以下のパスを指定してください。ex) common',
    validate: inputValidator,
  },
];

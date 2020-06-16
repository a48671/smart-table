export const test = () => {
  let qwe: string = '';
  qwe = ' ';
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello' + qwe);
    })
  }).then(console.log)
};

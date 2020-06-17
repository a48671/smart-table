export const test = (): void => {
  let qwe = '';
  qwe = ' ';
  const propm = new Promise((resolve) => {
    setTimeout(() => {
      const par = `'Hello' ${qwe}`;
      resolve(par);
    });
  });

  propm.then(console.log).catch(console.error);
};

export const delay = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => { resolve() }, time * 1000);
  });

export const bootstrap = async url => {
  const resp = await fetch(url);
  const data = await resp.json();

  if (Array.isArray(data.drinks)) return data.drinks;

  throw new Error("Erroneous request");
};

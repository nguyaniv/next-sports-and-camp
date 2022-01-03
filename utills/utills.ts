import { product } from '../cmps/Store/store-products';

export async function addItem(object: product) {
  const items = await getItems();
  if (items === null) {
    object.quantity = 1;
    return await window.localStorage.setItem(
      'next-sports-and-camp',
      JSON.stringify([object])
    );
  }

  const item = await items.find(
    (item: product) =>
      item.name === object.name && item.imgURL === object.imgURL
  );
  if (item) {
    item.quantity += 1;
    return window.localStorage.setItem(
      'next-sports-and-camp',
      JSON.stringify(items)
    );
  } else object.quantity = 1;
  return window.localStorage.setItem(
    'next-sports-and-camp',

    JSON.stringify([...items, object])
  );
}

export async function getItems() {
  const items = await JSON.parse(
    //@ts-ignore
    window.localStorage.getItem('next-sports-and-camp')
  );
  return items;
}

export async function removeItem(name: any, price: any) {
  const items = await getItems();
  if (items === null) return;
  const item = await items.find(
    (item: any) => item.name === name && item.price === price
  );
  if (!item) return;

  if (item && item.quantity > 1) {
    item.quantity -= 1;
    return window.localStorage.setItem(
      'next-sports-and-camp',
      JSON.stringify(items)
    );
  }

  if (item && item.quantity === 1) {
    item.quantity -= 1;
    const newItems = await items.filter((item: any) => item.quantity > 0);
    return window.localStorage.setItem(
      'next-sports-and-camp',
      JSON.stringify(newItems)
    );
  }
}

export const removeAllItems = async () => {
  await localStorage.removeItem('next-sports-and-camp');
  await window.localStorage.setItem('next-sports-and-camp', JSON.stringify([]));
};

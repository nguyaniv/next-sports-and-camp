import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { product } from './store-products';

const Store = ({ products }: any) => {
  const [sortPopup, setSortPopup] = useState(false);
  const [currProducts, setCurrProducts] = useState<product[]>([]);
  const [currFillter, setCurrFilter] = useState('');

  const onSortProducts = async (key: string) => {
    let sortedProducts: product[];
    if (key === 'price') {
      sortedProducts = await currProducts.sort((a, b) => a.price - b.price);
      setCurrProducts(sortedProducts);
    }
    if (key === 'category') {
      sortedProducts = await currProducts.sort((a, b) => {
        if (a.category > b.category) return 1;
        if (a.category < b.category) return -1;
        return 0;
      });
      setCurrProducts(sortedProducts);
    }
  };

  const onFilterProducts = async (type?: string) => {
    if (!type) {
      await setCurrProducts(products.items);
      return setCurrFilter('all');
    }
    const filteredProducts = products.items.filter((item: any) => {
      return item.category === type;
    });
    setCurrProducts(filteredProducts);
    return setCurrFilter(type);
  };

  useEffect(() => {
    setCurrProducts(products.items);
    setCurrFilter('all');
  }, [products]);

  if (!products) return <h1>no </h1>;

  return (
    <section className="store">
      <div className="store__heading__filter">
        <h2 className="store__heading__filter--head">
          Our products
          <button
            onClick={() => setSortPopup(sortPopup ? false : true)}
            className="btn--sort"
          >
            <FontAwesomeIcon size="1x" icon={faSortAmountUpAlt} />
            <div className={`speech-bubble ${sortPopup ? 'active' : ''}`}>
              Sort by:
              <li onClick={() => onSortProducts('price')}>Price</li>
              <li onClick={() => onSortProducts('category')}>Catagory</li>
              <li onClick={() => console.log('On Sale')}>On Sale</li>
            </div>
          </button>
        </h2>
        <ul className="store__heading__filter--links">
          <li
            onClick={() => onFilterProducts()}
            className={
              currFillter === 'all'
                ? `store__heading__filter--link-active`
                : 'store__heading__filter--link'
            }
          >
            All
          </li>
          <li
            onClick={() => onFilterProducts('sport')}
            className={
              currFillter === 'sport'
                ? `store__heading__filter--link-active`
                : 'store__heading__filter--link'
            }
          >
            Sports
          </li>
          <li
            onClick={() => onFilterProducts('camping')}
            className={
              currFillter === 'camping'
                ? `store__heading__filter--link-active`
                : 'store__heading__filter--link'
            }
          >
            Camping
          </li>
          <li
            className={
              currFillter === 'hot'
                ? `store__heading__filter--link-active`
                : 'store__heading__filter--link'
            }
          >
            Hot
          </li>
        </ul>
      </div>
      <div className="store__products">
        {currProducts &&
          currProducts.length > 1 &&
          currProducts.map((product: any) => {
            return <Product key={product.name} product={product} />;
          })}
      </div>
    </section>
  );
};

export default Store;

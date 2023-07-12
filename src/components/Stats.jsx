import { useEffect, useState } from "react";

import styles from "../style";

import { getProducts } from "../services/products.services";
import Button from "./Button";

const Stats = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 gap-4 relative`}
    >
      {products.length > 0 &&
        products.map((products) => (
          <div
            className="card w-96 bg-base-100 shadow-xl pt-4 z-10"
            key={products.id}
          >
            <figure>
              <img
                src={products.image}
                alt={products.title}
                className="object-contain w-[600px] h-[200px]"
              />
              <div className=" absolute bottom-[43%] right-7 badge badge-secondary items-center">
                {products.rating.rate}/5 {"   "}| {products.rating.count}
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title truncate">{products.title}</h2>
              <p className="truncate leading-[52px]">{products.description}</p>
              <div className="card-actions justify-between items-center">
                <div className="badge badge-outline">{products.category}</div>
                <Button type="btn-link text-secondary">Detail...</Button>
              </div>
            </div>
          </div>
        ))}
      <div className=" absolute z-0 w-[40%] h-[35%] top-10 pink__gradient " />
      <div className=" absolute z-[1] w-[80%] h-[80%] top-15 rounded-full pink__gradient " />
      <div className=" absolute z-[1] w-[25%] h-[25%] top-[50%] rounded-full blue__gradient " />
      <div className=" absolute z-0 w-[100%] h-[50%] bottom-20 left-10 pink__gradient " />
    </section>
  );
};

export default Stats;

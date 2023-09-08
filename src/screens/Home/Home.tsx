import { FC } from "react";
import httpServices from "@/services/http";

const Home = async (): Promise<JSX.Element> => {
  let response = null;
  try {
    response = await httpServices.getProducts({ page: 1 });
  } catch {
    return <h2>Error fetch</h2>;
  }

  if (!response) return <h2>Error fetch</h2>;

  const { data: products } = response;

  return (
    <>
      <div>Home 😎</div>
      {products.length > 0 &&
        products.map((product) => {
          const { attributes } = product;
          return (
            <div key={product.id}>
              <p>{attributes.title}</p>
              <p>{attributes.countPlayers}</p>
              <p>{attributes.price}</p>
              <p>{attributes.descrition}</p>
            </div>
          );
        })}
    </>
  );
};

export default Home;

import { FC } from "react";
import ProductsScreen from "@/screens/ProductsScreen/ProductsScreen";
// import ProductScreen from "@/screens/ProductScreen/ProductScreen";
interface IParams {
  params?: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const App: FC<IParams> = ({ searchParams }) => {
  return <ProductsScreen searchParams={searchParams} />;
  // return <ProductScreen />;
};

export default App;

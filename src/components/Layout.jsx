import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";
import { useSelector } from "react-redux";

const Layout = () => {
  const statusTab = useSelector(store => store.cart.statusTab)
  return (
    <div className="bg-zinc-200">
      <main className={`w-[1200px] max-w-full m-auto p-5 tranform transition-transform duration-500 ${statusTab === false ? "" : "-translate-x-56"}`}>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;

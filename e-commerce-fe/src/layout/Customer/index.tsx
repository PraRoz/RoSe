import React, { useState } from "react";
import clsx from "clsx";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardList from "../../features/Customer/CartList";

function Layout({
  className,
  children,
  hideFooter,
  ...props
}: React.ComponentPropsWithRef<"div"> & { hideFooter?: boolean }) {
  const [showCart, setShowCart] = useState<any>(false);
  return (
    <div className="overflow-hidden">
      <div className={clsx("Layout", className)} {...props}>
        <header className="">
          <Navbar setShowCart={setShowCart} showCart={showCart} />
        </header>
        <main className="mt-[70px]">
          <CardList setShowCart={setShowCart} showCart={showCart} />
          {children}
        </main>
        { !hideFooter &&  <Footer />}
      </div>
    </div>
  );
}

export default Layout;

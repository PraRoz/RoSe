import React from "react";
import clsx from "clsx";
import { Link, NavLink, useLocation } from "react-router-dom";


const NavItem =[
    {
        label:"Home",
        route:"/Admin"
    },
    {
        label:"Category",
        route:"/admincategory"
    },
    {
        label:"Product",
        route:"/adminproduct"
    },
    {
        label:"UsersDetails",
        route:"/adminuser"
    },
    {
        label:"OrderDetails",
        route:"/adminorder"
    },
]


function AdminLayout({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div className="overflow-hidden  ">
      <div
        className={clsx("Layout w-72 bg-primary h-screen p-10 fixed ", className)}
        {...props}
      >
        <h1 className="text-light font-semibold text-5xl text-center my-7">ENepal</h1>

        <ul className="menu-items flex flex-col">
        {NavItem.map((item, index) => {
            return (
              
                <NavLink
                //   to={`/${item.split(" ").join("")}`}
                to={item.route}
                  className={({ isActive }) =>
                    isActive ? "link active " : "link"
                  }
                > 
                  {item.label}
                </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="bg-grey ml-72">{children}</div>
    </div>
  );
}

export default AdminLayout;

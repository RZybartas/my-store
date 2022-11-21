import {
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = (): void => setOpen(!open);
  return (
    <div className="w-full h-12 bg-[#f8e3af] text-[#181818] font-semibold flex   justify-between  items-center px-4">
      <div className="md:hidden w-5">
        <MenuOutlined onClick={handleOpenMenu} />
      </div>
      <nav className=" flex  justify-between ">
        <ul
          className={
            open
              ? 'w-full h-full absolute flex flex-col justify-start items-center z-10 bg-[#f8e3af] top-0 left-0'
              : 'w-full hidden  md:flex flex-row justify-start items-center  '
          }
        >
          <CloseOutlined
            className="flex w-full justify-start p-4 text-xl md:hidden"
            onClick={handleOpenMenu}
          />
          <li className={open ? 'm-4 text-xl' : 'mr-2'}>Shop</li>
          <li className={open ? 'm-4 text-xl' : 'mr-2'}>Sales</li>
          <li className={open ? 'm-4 text-xl' : 'mr-2'}>FAQ</li>
          <li className={open ? 'm-4 text-xl' : 'mr-2'}>Contact</li>
        </ul>
      </nav>
      <h1 className="w-20  text-[#df0224]  md:text-2xl font-black md:w-32">
        My Store
      </h1>
      <div className="text-[#181818] flex font-semibold items-center ">
        <SearchOutlined />
        <ShoppingOutlined className="mx-2" />
        <UserOutlined />
      </div>
    </div>
  );
};

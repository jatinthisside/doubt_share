import React from "react";
import { Icon } from '@iconify/react';

export default function NavItem(props) {
  return (
    <>
      <li className=" flex lg:justify-start justify-center text-primary items-center lg:gap-4">
        <Icon
          icon={props.iconname}
          color="white"
          width={35}
          className="w-[40px]"
        />
        <p className="hidden lg:block text-xl">{props.text}</p>
      </li>
    </>
  );
}

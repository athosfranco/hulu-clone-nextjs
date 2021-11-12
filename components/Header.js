import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  StarIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import React from "react";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Início" Icon={HomeIcon} />
        <HeaderItem title="Popular" Icon={LightningBoltIcon} />
        <HeaderItem title="Originais" Icon={BadgeCheckIcon} />
        <HeaderItem title="Coleções" Icon={CollectionIcon} />
        <HeaderItem title="Pesquisar" Icon={SearchIcon} />
        <HeaderItem title="Conta" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain cursor-pointer sm:hover:scale-125 transition duration-100"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
}

export default Header;

"use client";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { FaSkiing } from "react-icons/fa";
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdCastle, MdOutlineVilla } from "react-icons/md";
import { IoDiamond, IoSnow } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the Beach",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This is property has Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This is property is Modern type",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This is property is in Country Side",
  },
  {
    label: "Pool",
    icon: TbPool,
    description: "This is property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This is property is on island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This is property is near a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This is property has skiing activities",
  },
  {
    label: "Castle",
    icon: MdCastle,
    description: "This is property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This is property has camping activities",
  },
  {
    label: "Arctic",
    icon: IoSnow,
    description: "This is property is in the arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This is property is near a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This is property is in a dessert",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "This is property is near barn",
  },
  {
    label: "Luxury",
    icon: IoDiamond,
    description: "This is property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname == "/";

  // Display Categories only on Main Page
  if (!isMainPage) {
    return null;
  }

  return (
    <div>
      <Container>
        <div className="justify-between flex flex-row items-center pt-4 overflow-x-auto">
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category == item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;

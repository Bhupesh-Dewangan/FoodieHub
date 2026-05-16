import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdDinnerDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const CategoryList = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline />,
  },

  {
    id: 2,
    name: "Breakfast",
    icon: <MdOutlineFreeBreakfast />,
  },

  {
    id: 3,
    name: "Soups",
    icon: <TbSoupFilled />,
  },

  {
    id: 4,
    name: "Pasta",
    icon: <CiBowlNoodles />,
  },

  {
    id: 5,
    name: "Main",
    icon: <MdDinnerDining />,
  },

  {
    id: 6,
    name: "Pizza",
    icon: <GiFullPizza />,
  },

  {
    id: 7,
    name: "Burger",
    icon: <GiHamburger />,
  },
];
export default CategoryList;

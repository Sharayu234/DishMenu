import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id: 1,
        name: "abc",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 3,
        name: "Soups",
        icon: <LuSoup className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 4,
        name: "Pasta",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 5,
        name: "Main_Course",
        icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 6,
        name: "Pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-pink-800" />
    },

    {
        id: 7,
        name: "Burger1",
        icon: <GiHamburger className="w-[60px] h-[60px] text-pink-800" />
    }
]

export default Categories
import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from "../context/UserContext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";
// import { set } from "react-hook-form";


function Nav() {
    const { cate, setCate, input, setInput, showCart, setShowCart } = useContext(DataContext);

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
        setCate(newList)
    }, [input])

    let items=useSelector(state=>state.cart)
    console.log(items);
    

    return (
        <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">

            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
                <MdFastfood className="w-[30px] h-[30px] text-pink-800" />
            </div>

            <form className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]">
                <IoIosSearch className="text-pink-800 w-[20px] h-[20px]" onSubmit={(e) => e.preventDefault()} />

                <input type="text" placeholder="Search Items..." className="w-[100%] outline-none text-[16px] md:text-[20px]"
                    onChange={(e) => setInput(e.target.value)} value={input} />
            </form>

            <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer" 
            onClick={()=>{
               setShowCart(true)
            }}>
                <span className="absolute top-0 right-2 text-pink-800 font-bold text-[18px]">{items.length}</span>
                <LuShoppingBag className="w-[30px] h-[30px] text-pink-800 "/>
            </div>

        </div>

    )
}

export default Nav
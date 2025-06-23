import React from "react";
// import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {

    let dispatch = useDispatch()

    return (
        <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-pink-400">

            <div className="w-[100%] h-[60%] overflow-hidden">
                <img src={image} alt="" className="object-cover rounded-lg" />
            </div>

            <div className="text-2xl font-semibold">
                {name}
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="text-lg font-bold text-pink-600">Rs {price}/-</div>
                <div className="flex justify-center items-center gap-2">
                    {type === "veg" ? <LuLeafyGreen className=" text-green-500 text-lg font-semibold" /> : <GiChickenOven className="text-red-500 text-lg font-semibold" />}
                    <span>{type}</span></div>
            </div>

            <button className="w-full p-3 bg-pink-300 rounded-lg text-gray-700 hover:bg-pink-400
            transition-all" onClick={() => {
                    dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 }));
                    toast.success("Item Added")
                }}>Add to Dish</button>

        </div>
    )
}

export default Card
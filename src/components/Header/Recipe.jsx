import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import Bookmark from "./Bookmark/Bookmark";


const Recipe = () => {
    const [data, setData] =useState([]);
    const [bookmarks,setBookmarks] =  useState([])
    useEffect(() =>{
        fetch('bloge.json')
        .then(res =>res.json())
        .then(data =>setData(data))
    },[]);

    const handleAddToBookmark =(blog)=>{
        const newBookmarks =[...bookmarks, blog]
        setBookmarks(newBookmarks)
        // const isExist = cart.find((card) => card.id == p.id);
        // if (!isExist) {
        //     setCart(...cart,p)
        // }
        // else{
        //     alert("already in card")
        // }
        // console.log(p)
        // setCart(p)
    }
    // console.log(cart)
    return (
        <div className="w-[90%] m-auto mt-24">
            <div className="text-center">
                <h2 className="text-[40px] text-[#150B2B] font-bold">Our Recipes</h2>
                <p className="text-[16px] mt-6 text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br/> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex justify-between">
                <div className="mt-12 md:w-2/3">
                    <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
                    {
                        data.map(card => <Card key={card.id}  handleAddToBookmark={ handleAddToBookmark} card={card}></Card>)
                    }
                    </div>

                </div>
                <div className="">
                    <Bookmark bookmarks={bookmarks}></Bookmark>
                </div>
            </div>
            
        </div>
    );
};


export default Recipe;
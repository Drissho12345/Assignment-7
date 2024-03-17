import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import Bookmark from "./Bookmark/Bookmark";
import Cooking from "./Bookmark/Cooking";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipe = () => {
    const [bio, setBio] = useState([])
    const [bookmarks,setBookmarks] =  useState([])
    const [data, setData] =useState([]);
    
    useEffect(() =>{
        fetch('bloge.json')
        .then(res =>res.json())
        .then(data =>setData(data))
    },[]);

    
    const cookHandle = (data) =>{
        const newhide = bookmarks.filter(recipe => recipe.id != data.id)
        setBookmarks(newhide)
        const courentCook=[...bio,data]
        setBio(courentCook)
    }


    const handleAddToBookmark =(blog)=>{
        
        const isExist = bookmarks.find(item =>item.id == blog.id);
        if(!isExist){
            const newBookmarks =[...bookmarks, blog]
            setBookmarks(newBookmarks)
        }
        else{
            toast.error('Recipe already preparing!');
        }
    }
    
    return (
        <div className="w-[90%] m-auto mt-24">
            <div className="text-center">
                <h2 className="text-[40px] text-[#150B2B] font-bold">Our Recipes</h2>
                <p className="text-[16px] mt-6 text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br/> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex gap-3 justify-between">
                <div className="mt-12 md:w-2/3">
                    <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                    {
                        data.map(card => <Card key={card.id}  handleAddToBookmark={ handleAddToBookmark} card={card}></Card>)
                    }
                    </div>

                </div>
                
                <div>
                    <Bookmark cookHandle={cookHandle}  bookmarks={bookmarks}></Bookmark>
                    <Cooking bio={bio}></Cooking>
                </div>
            </div>
            <ToastContainer />
        </div>
        
    );
};


export default Recipe;
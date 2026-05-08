import React, { useState } from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import Information from './Information'
import reviews from '../data';

function Testimonial() {

    const [id,update]=useState(1);

    function prevHandler(){
        if(id>1){
            update((id)=>id-1);
        }else{
            update(reviews.length);
        }
    }
    function nextHandler(){
        if(id<reviews.length){
            update((id)=>id+1);
        }else{
            update(1);
        }
    }
    function surpriseHandler(){
        update(Math.floor(Math.random() * reviews.length) + 1);
    }

    return (
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Information id={id}></Information>
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
                <button className="cursor-pointer hover:text-violet-500 text-3xl" onClick={prevHandler}><MdArrowBackIosNew /></button>
                <button className="cursor-pointer hover:text-violet-500 text-5xl" onClick={nextHandler}><MdNavigateNext /></button>
            </div>
            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonial;

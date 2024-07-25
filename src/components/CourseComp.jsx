// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

import dragIcon from "../assets/drag.svg"
import kebabIcon from "../assets/kebab.svg"


const CourseComp = ({ id, title, cover, price, type, actionFrame, setActionFrame, move, remove }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    // console.log(attributes)

    const style = {
        transition: transition,
        transform: CSS.Transform.toString(transform)
    }

    return (
    <div
        ref={setNodeRef}
        style={style}
        className='flex shadow-md p-2 rounded items-center justify-between relative bg-white my-1'
    >
        <div className='flex items-center gap-2'>
            <img {...attributes} {...listeners} className='w-[20px] cursor-grab' src={dragIcon} alt="" />
            <img src={cover} className='h-[40px] rounded' alt="" />
            <span>{title}</span>
        </div>
        <div className='flex justify-between w-[20%]'>
            <span>{price == 0 ? "Free" : `Rs. ${price}/-`}</span>
            <div className='flex items-center'>
                <span className='p-1 rounded bg-[#DBFFCE] text-[10px]'>{type}</span>
                <img className='w-[15px] cursor-pointer'  onClick={()=> setActionFrame(actionFrame => actionFrame == id ? NaN : id) } src={kebabIcon} alt="" />

            </div>
        </div>
        <div className={`absolute flex-col right-[-100px] bg-white rounded top-[35%] shadow z-10`} style={{ display: actionFrame == id ? "flex" : "none" }}>
            <button className='pt-2 text-sm' onClick={()=>move(id, 1)} >Move to Top</button>
            <button className='p-2 text-sm' onClick={()=>move(id, -1)}>Move to Down</button>
            <button className='pb-2 text-sm' onClick={()=> remove(id)}>Remove</button>
        </div>
    </div>
    )
}

CourseComp.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    actionFrame: PropTypes.any.isRequired,
    setActionFrame: PropTypes.func.isRequired,
    move: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default CourseComp;
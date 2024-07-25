// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { DndContext, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import ChaiCode from './ChaiCode';
import Header from './Header';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import CourseComp from '../components/CourseComp';

import cover1 from "../assets/course1-cover.png"
import cover2 from "../assets/course2-cover.png"
import cover3 from "../assets/course3-cover.png"
import cover4 from "../assets/course4-cover.png"
import cover5 from "../assets/course5-cover.png"


const CourseList = () => {
    const [actionFrame, setActionFrame] = useState(NaN)
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "Interview preparation with JavaScript 2.0",
            cover: cover1,
            price: 9000,
            type: "Course",
        },
        {
            id: 2,
            title: "Aptitude - Averages, Mixtures & Allegation",
            cover: cover2,
            price: 0,
            type: "Mock Test",
        },
        {
            id: 3,
            title: "Aptitude - Simple & Compound Interest",
            cover: cover3,
            price: 0,
            type: "Mock Test",
        },
        {
            id: 4,
            title: "Aptitude - Partnership",
            cover: cover4,
            price: 0,
            type: "Mock Test",
        },
        {
            id: 5,
            title: "Aptitude - Time & Work",
            cover: cover5,
            price: 0,
            type: "Mock Test",
        },
    ])

    const getCoursePos = id => courses.findIndex(course => course.id === id)

    const handleDrag = event => {
        const {active, over} = event;

        if(active.id == over.id) return;

        setCourses(courses=> {
            const position = getCoursePos(active.id)
            const newPosition = getCoursePos(over.id)

            return arrayMove(courses, position, newPosition)
        })
    }

    const move = (id, moveTo) => {
        const pos = getCoursePos(id)
        if((pos == 0 && moveTo == 1) || (pos == courses.length - 1 && moveTo == -1)) return;
        const coursesArrCopy = courses
        const curcourse = coursesArrCopy[pos]
        coursesArrCopy.splice(pos, 1)
        if(moveTo == 1){
            setCourses([
                curcourse,
                ...coursesArrCopy
            ])
        }else if(moveTo == -1){
            setCourses([
                ...coursesArrCopy,
                curcourse
            ])
        }
    }

    const remove = (id) => {
        setCourses(
            courses.filter(course=> {
                return course.id !== id
            })
        )
    }

    const sensor = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor)
    )



    return (
        <>
            <div className='bg-[#D2E3C8] h-screen w-screen flex flex-col items-center justify-center select-none'>
            <Header textColor={"#4F6F52"} />
                <div className='w-[90%] lg:w-[70%] bg-white p-4 rounded-xl'>
                    <h2 className='text-xl font-bold'>Manage Bundle</h2>
                    <p className='text-gray-400 mb-2'>Change orders of the products based on priority</p>
                    <DndContext
                        onDragEnd={handleDrag}
                        collisionDetection={closestCorners}
                        sensors={sensor}
                    >
                        <div className='coloumn'>
                            <SortableContext items={courses} strategy={verticalListSortingStrategy}>
                                {
                                    courses.map(course => {
                                        return <CourseComp key={course.id} id={course.id} title={course.title} cover={course.cover} price={course.price} type={course.type} actionFrame={actionFrame} setActionFrame={setActionFrame} move={move} remove={remove} />
                                    })
                                }
                            </SortableContext>
                        </div>
                    </DndContext>
                </div>
            </div>
            <ChaiCode />
        </>
    )
}

export default CourseList
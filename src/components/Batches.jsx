// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import ChaiCode from './ChaiCode.jsx'
import courses from './courses.js'

const Batches = () => {
  const [coursePerPage, setCoursePerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState([false, ""])

  useEffect(() => {
    document.addEventListener('keydown', (e)=> {
      if(e.metaKey || e.altKey){
        if(e.key == "k"){
          document.getElementById("search").focus()
        }
      }
    })
  }, [])
  

  const nextPage = () => {
    if(currentPage + 1 == (Number.parseInt(courses.length / coursePerPage) + ((courses.length % coursePerPage) != 0 ? 1 : 0)))return;
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage == 0) return;
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <div className='bg-[#E2BBE9] h-screen w-screen flex flex-col justify-center items-center'>
      <Header textColor={"#444B79"} />
        <div className='w-[90%] lg:w-[70%] bg-white p-4 rounded-xl'>
          <h2 className='text-xl font-bold'>Batches</h2>
          <p className='text-gray-400 mb-2'>Create learner’s batch and share information at the same time.</p>

          <div className='flex gap-2 mt-4 w-full'>
            <input id='search' value={search[1]} onChange={e=> setSearch([false, e.target.value])} placeholder='Search by Title (alt+k or cmd+k)' className="rounded outline-none border p-1 border-solid w-[40%]" type="text" name="search" />
            <button onClick={()=> setSearch([true, search[1]])} className='rounded h-full bg-[#6C6BAF] p-1 px-2 text-white'>Search</button>
          </div>
          <div className='w-full flex flex-col items-end'>
            <div className='w-full max-h-[50vh] overflow-scroll mt-6 rounded-lg border border-solid border-[#7D7D7D]'>
              <table className='w-full'>
                <thead className='bg-[#F2F2F2] sticky top-0 border-b border-solid border-[#7D7D7D]'>
                  <tr>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Price</th>
                    <th>Validity/Expiry</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {!search[0] &&
                    courses.slice(currentPage * coursePerPage, (currentPage * coursePerPage) + coursePerPage).map((course, index) => {
                      return <tr className='' key={index}>
                        <td>
                          <div className='flex gap-1 text-wrap items-center ml-1'>
                            <img src={course.cover} className='h-[40px] rounded' alt="" />
                            <p>{course.title}</p>
                          </div>
                        </td>
                        <td>{course.start}</td>
                        <td>{course.end}</td>
                        <td>₹&nbsp;{course.price}</td>
                        <td>{course.validity}&nbsp;Days</td>
                        <td><span className='p-1 rounded text-[10px] border' style={{ backgroundColor: course.status == "Published" ? "#DEFFDE" : "#F3F3F3", borderColor: course.status == "Published" ? "#4ED04B" : "#A4A4A4" }}>{course.status}</span></td>
                      </tr>
                    })
                  }
                  {
                    search[0] && 
                    courses.filter(course=> course.title.toLowerCase().indexOf(search[1].toLowerCase()) !== -1).slice(currentPage * coursePerPage, (currentPage * coursePerPage) + coursePerPage).map((course, index) => {
                      return <tr className='' key={index}>
                        <td>
                          <div className='flex gap-1 text-wrap items-center ml-1'>
                            <img src={course.cover} className='h-[40px] rounded' alt="" />
                            <p>{course.title}</p>
                          </div>
                        </td>
                        <td>{course.start}</td>
                        <td>{course.end}</td>
                        <td>₹&nbsp;{course.price}</td>
                        <td>{course.validity}&nbsp;Days</td>
                        <td><span className='p-1 rounded text-[10px] border' style={{ backgroundColor: course.status == "Published" ? "#DEFFDE" : "#F3F3F3", borderColor: course.status == "Published" ? "#4ED04B" : "#A4A4A4" }}>{course.status}</span></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className='mt-4 flex gap-2 items-center'>
              <span>Rows per page</span>
              <select onChange={e => setCoursePerPage(Number.parseInt(e.target.value))} name="ammount" className='outline-none border border-solid rounded-sm'>
                <option value={3} >3</option>
                <option value={5} >5</option>
                <option value={10} >10</option>
              </select>
              <svg onClick={previousPage} className='cursor-pointer' width="8" height="15" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="socIcon" d="M16.3426 26.1497C16.7637 26.574 17 27.147 17 27.7441C17 28.3412 16.7637 28.9142 16.3426 29.3385C16.1358 29.548 15.8892 29.7144 15.6173 29.828C15.3455 29.9415 15.0537 30 14.7589 30C14.4642 30 14.1724 29.9415 13.9005 29.828C13.6286 29.7144 13.3821 29.548 13.1753 29.3385L0.656395 16.5961C0.235807 16.1708 0 15.5974 0 15C0 14.4026 0.235807 13.8292 0.656395 13.4039L13.1753 0.661457C13.3821 0.451963 13.6286 0.285596 13.9005 0.172038C14.1724 0.0584801 14.4642 0 14.7589 0C15.0537 0 15.3455 0.0584801 15.6173 0.172038C15.8892 0.285596 16.1358 0.451963 16.3426 0.661457C16.7637 1.08577 17 1.65877 17 2.2559C17 2.85302 16.7637 3.42602 16.3426 3.85034L6.07579 15.0049L16.3426 26.1497Z" fill={currentPage == 0 ? "#D6D6D6" : "black"} />
              </svg>
              <span>{currentPage + 1}</span>
              <svg onClick={nextPage} className='rotate-180 cursor-pointer' width="8" height="15" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="socIcon" d="M16.3426 26.1497C16.7637 26.574 17 27.147 17 27.7441C17 28.3412 16.7637 28.9142 16.3426 29.3385C16.1358 29.548 15.8892 29.7144 15.6173 29.828C15.3455 29.9415 15.0537 30 14.7589 30C14.4642 30 14.1724 29.9415 13.9005 29.828C13.6286 29.7144 13.3821 29.548 13.1753 29.3385L0.656395 16.5961C0.235807 16.1708 0 15.5974 0 15C0 14.4026 0.235807 13.8292 0.656395 13.4039L13.1753 0.661457C13.3821 0.451963 13.6286 0.285596 13.9005 0.172038C14.1724 0.0584801 14.4642 0 14.7589 0C15.0537 0 15.3455 0.0584801 15.6173 0.172038C15.8892 0.285596 16.1358 0.451963 16.3426 0.661457C16.7637 1.08577 17 1.65877 17 2.2559C17 2.85302 16.7637 3.42602 16.3426 3.85034L6.07579 15.0049L16.3426 26.1497Z" fill={currentPage + 1 == (Number.parseInt(courses.length / coursePerPage) + ((courses.length % coursePerPage) != 0 ? 1 : 0)) ? "#D6D6D6" : "black"} />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChaiCode />
    </>
  )
}

export default Batches
import React from 'react'
import CoursesAvailable from '../component/Fakecourse'




function Courses() {
  return (
    <div>
      <div className='products container'>
        <h4>Avaliable Courses</h4>
        <small></small>

        <div className='row gap-2 justify-content-evenly objectFit-contain'>

         {
          CoursesAvailable?.map((row) =>(
            <div key={row?.id} className='card col-md-3'>
            <img src={row?.img} alt="" className='card-img-top' />
            <p className='card-body'>{row?.title}</p>
            <h5 style={{fontWeight:"bold"}}>{row?.fee}</h5>
            <h5 style={{color:"red", fontStyle: "italic"}}>{row?.duration}</h5>
            <h6 style={{fontStyle:"italic", color:"#666", }}>{row?.description}</h6>
            <button className="btn btn-danger m-3">Enroll Now</button>

          </div>
          ))
         }

        </div>
      </div>
    </div>
  )
}

export default Courses
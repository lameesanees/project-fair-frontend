import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
      <div>
        <h2 className='text-center'>All Projects</h2>
        <input type="text" style={{ width: "400px" }}
          placeholder='Seacrh By Technology' className='form-control m-5 mx-auto' />
        <div className='row mb-5'>
          <div className='col m-4'>
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResumeBuilder = () => {


   const {resumeId} = useParams()

   const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info:{},
    professional_summary: "",
    experience: [],
    education: [],
    projects: [], 
    skills: [],
    template: 'classic',
    accent_color:"#3B82F6",
    public: false,
   })
    

   const loadExistingResume = async (resumeId) => {
      const resume = dummyResumeData.find(resume=>resume._id === resumeId)
      if(resume){
        setResumeData(resume)
        document.title=resume.title
      }
   }


   useEffect(() => {
     loadExistingResume()
   }, [])
   

  return (
    <div>
      
    </div>
  )
}

export default ResumeBuilder

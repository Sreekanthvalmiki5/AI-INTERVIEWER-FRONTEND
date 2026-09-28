import {useState} from 'react'

function BasicForm(){

    const [skills, setSkills] = useState([])
    const [experience, setExperience] = useState([])
    const [education, setEducation] = useState([])
    const [formData, setFormData] = useState({
        skills: '',
        experience: '',
        education: ''
    })

  function handleSkillsChange(event:any){
     setSkills(event.target.value)
     setFormData({...formData, skills: event.target.value})
  }
  function handleExperienceChange(event:any){
    setExperience(event.target.value)
    setFormData({...formData, experience: event.target.value})
  }
  function handleEducationChange(event:any){
    setEducation(event.target.value)
    setFormData({...formData, education: event.target.value})
  }

  function handleSubmit(data:any){
    

  }

    return(
        <>
        <div>
            <label>Type Skills</label>
            <input type="text" onChange={handleSkillsChange} value={skills}/>
        </div>
        <div>
            <label>Type Experience</label>
            <input type="text" onChange={handleExperienceChange} value={experience}/>
        </div>
        <div>
            <label>Type Education</label>
            <input type="text" onChange={handleEducationChange} value={education}/>
        </div>
        <div>
            <label>Submit</label>
            <input type="submit" onClick={()=>handleSubmit(formData)}/>
        </div>

        </>
    )
    


}
export default BasicForm
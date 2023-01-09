import { Skill } from "../models/skills.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => { 
    console.error(error)
    // redirects to local:host3001
    res.redirect('/')
  })
  }
  export {
    index
  }
import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
 

  .catch(error => { 
    console.error(error)
    // redirects to local:host3001
    res.redirect('/')
  })
  }
  function newSkill(req, res) {
    res.render('skills/new')
  }
  function create(req, res) {
    console.log(req.body)
    req.body.done = false
    Skill.create(req.body)
    .then(skill => {
      // Notice we are doing a redirect here!
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

  function show(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/show', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

  export {
    index,
    newSkill as new,
    show,
  }
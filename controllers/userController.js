import User from "../models/User.js"

export const updateUser =async (req,res,next) => {
try {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {$set:req.body},
    {new:true}
  )
  if(updatedUser){
    res.status(200).json(updatedUser)
  }
} catch (error) {
  next(error)
}
}

export const deleteUser = async (req,res,next)=> {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if(deletedUser){
      res.status(200).json("User has been deleted")
    }

  } catch (error) {
    next(error)
  }
}


export const getUser = async (req,res,next) => {
  try {
    const user = await User.findById(req.params.id)
    if(user){
      res.status(200).json(user)
    } 
  } catch (error) {
    next(error)
  }
}

export const getUsers = async (req,res,next) => {
  try {
    const users = await User.find()
    if(users){
      res.status(200).json(users)
    } 
  } catch (error) {
    next(error)
  }
}

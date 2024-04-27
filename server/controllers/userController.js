const user = require("../models/userModel.js");

//to post
exports.create = async (req, res) => {
  try {
    const userData = new user(req.body);
    if (!userData) {
      return res.status(404).json({ message: "No data provided" });
    }

    console.log("Request Body:", req.body);
    
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//to get all the users
exports.getAllUsers = async (req, res) => {
  try {
    const userData = await user.find();
    if (!userData) {
      return res.status(200).json({ message: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong" });
  }
};

//fetch user by id
exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userById = await user.findById(id);

    if (!userById) {
      return res.status(404).json({ message: "User Not Found." });
    }

    res.status(200).json(userById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//to update
exports.updatedUser = async (req, res) => {
  try {
    const id  = req.params.id;
    const userById = await user.findById(id);
    
    if(!userById){
      return res.status(401).json({message:"User not exist"});
    }

    const updatedUserData = await user.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({message:"User updated successfully"})


  } catch (error) {
    res.status(500).json({ message: "Something went Wrong" });
  }
};

//for deletion
exports.deleteUser = async (req, res)=>{
  try {
    const id = req.params.id;
    const userFind = await user.findById(id);
    if(!userFind){
      return res.status(404).json({message:"User donot exist"});
    }

    const userDeleted = await user.findByIdAndDelete(id);
    res.status(200).json({message:"User deleted successfully"})
      
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong" }); 
  }
}
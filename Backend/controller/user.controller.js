import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Validate input
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create and save new user
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error('Error:', error.message);
    if (error.code === 11000) { // MongoDB duplicate key error code
      res.status(400).json({ message: 'Duplicate key error: User with this email already exists' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const login=async(req,res)=>
{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
            fullname:user.fullname,
        email:user.email            }})
        }}
        catch(error)
        {
            console.log("Error: "+ error.message)
            res.status(500).json({message:"Internal server error"})
        }
    }

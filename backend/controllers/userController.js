import User from "../schemas/User.js";
import bcrypt from 'bcrypt';

export const registerUser = async (req,res) =>{
    try{
        const {name, email,password} = req.body;

        const userExists = await User.findone({email});
        if(userExists){
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const user = await User.create({
        name,
        email,
        password: hashedPassword, 
        });

        const token = user.generateJWT();

        res.status(201).json({
        message: 'User registered successfully',
        token,
        });

          res.status(201).json({
            message: 'User registered successfully',
            token,
          });

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });

    }catch(error){
        res.status(500).json({ message: 'Error registering user', error });
    }
}

export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // user exists?
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // authenticating
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT
      const token = user.generateJWT();
  
      res.status(200).json({
        message: 'Login successful',
        token,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };
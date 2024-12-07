import User from "../schemas/User";

export const registerUser = async (req,res) =>{
    try{
        const {name, email,password} = req.body;

        const userExists = await User.findone({email});
        if(userExists){
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
      
          res.status(201).json({
            message: 'User registered successfully',
            token,
          });

    }catch(error){
        res.status(500).json({ message: 'Error registering user', error });
    }
}
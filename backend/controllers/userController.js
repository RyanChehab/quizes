import User from "../schemas/User";

export const registerUser = async (req,res) =>{
    try{
        const {name, email,password} = req.body;

        const userExists = await user.findone({email});
        if(userExists){
            return res.status(400).json({ message: 'User already exists' });
        }
    }catch(error){

    }
}
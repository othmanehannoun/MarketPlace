const Seller = require('../models/model-seller')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const sellerCtrl = {
    register: async (req, res) =>{
        try {
          const temppassword = randomPassword(10)
          req.body.password  = temppassword
            const {full_name, email, phone,  password, address, } = req.body;
            const seller = await Seller.findOne({email})
            if(seller) return res.status(400).json({msg: "The email already exists."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newSeller = new Seller({
                full_name, 
                email,
                phone,  
                password : passwordHash,
                address
            })

            // Save mongodb
            await newSeller.save()
            // Then create jsonwebtoken to authentication
            
            const accesstoken = createAccessToken({id: newSeller._id})

            // SEND MAIL 
            let transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL,  // TODO: your gmail account
                  pass: process.env.PASSWORD // TODO: your gmail password
              }
          });
          
          // Step 2
          let mailOptions = {
              from: process.env.EMAIL, // TODO: email sender
              to: email, // TODO: email receiver
              subject: 'Temporary password ',
              html:`
                     <p>Your temporary password : ${temppassword}</p>
                     <h2>click in this <a href=http://localhost:3000/seller-login >link</a> to reset password</h2>
                     `
          };
          
          // Step 3
          transporter.sendMail(mailOptions, (err, data) => {
              if (err) {
                  return console.log('Error occurs');
              }
              return console.log('Email sent!!!');
          });

            
          
            res.json({mes:"check you email", accesstoken})
            

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    resetPassword: async (req, res, next) =>{
      
      const token = req.header("auth-token");
      const tokenDecode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      
          const {password,newPassword} = req.body
          try {
              const seller = await Seller.findById({ _id: tokenDecode.id });
              console.log(seller)
              if(seller && !seller.resetPassword){
                  bcrypt.compare(password, seller.password,async (err,result)=>{
                      if(result){
                          // const hashedPassword = await bcrypt.hash(newPassword, 10);
                          seller.password = newPassword;
                          seller.resetPassword = true
              
                          const newPass = await seller.save();
                          res.status(201).send(newPass);
                      }else{
                          res.status(401).send("password incorrect check your email");
                      }
                  })
              }
          
              
          } catch (error) {
              console.log(error);
          }
     
  },

  
  Login : async (req, res, next) =>{
  const { email, password } = req.body

  try {
    const seller = await Seller.findOne({ email });
    if (seller) {
        bcrypt.compare(password, seller.password, (err, result) => {
            if (result) {
                if (seller.isValid) {
                  const accesstoken = createAccessToken({id: seller._id})
                    res.status(200).json({ seller, accesstoken })
                } else {
                    res.status(200).json({message: 'Your account is still being processed' })
                }
            } else {
                res.status(200).json({ message: 'email or password incorrect' })
            }
        })
    } else {
        res.status(401).json({ message: 'we can\'t find this email' })
    }
} catch (error) {

  }

},

getAllSeller: async (req, res) =>{
  Seller.find((err, seller)=>{
    if(err || !seller){
        return res.json({error: 'No data'})
    }
    res.json({seller})
})
},

validSeller: async (req, res, next) =>{
  const seller = await Seller.findById({ _id: req.params.id });
  console.log(seller)
  if (!seller) {
      res.status(404).send({ message: "Seller not found" });
  } else {
      seller.isValid = true;
      const validSeller = await seller.save();
      res.status(201).json({message:'Seller validate'});
  }
}




}


function randomPassword(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const createAccessToken = (seller) =>{
    return jwt.sign(seller, process.env.ACCESS_TOKEN_SELLER, {expiresIn: '1d'})
}


module.exports = sellerCtrl
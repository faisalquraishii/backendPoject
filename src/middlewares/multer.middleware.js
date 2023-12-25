/*our approach will involve getting the file from the user through multer and then storing it on local server. Cloudinary will take it from 
here and will store on the store.*/
// import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  //file: file is with multer, destination is used to determine within which folder the uploaded files should be stored. 	
      cb(null, "./public/temp") //cb is callback
    },
    filename: function (req, file, cb) { //filename is used to determine what the file should be named inside the folder
      cb(null, file.originalname) //Name of the file on the user's computer
    }
  })
  
export const upload = multer({ // return the stored file name(path) to the cloudinary function
    storage,
})
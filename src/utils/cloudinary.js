/*Our simple goal here is to upload a file that is now stored on our local server(We will store file on our local server through multer)
-->we'll get a path of this locally stored file.
--> we'll also remove the file from our server once it has been successfully uploaded on cloudinary*/

import {v2 as cloudinary} from "cloudinary"
import fs from "fs"  //file system--> file handling(read, write, remove, etc..)

import {v2 as cloudinary} from 'cloudinary';
          
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //detects automatically
        })
        //file has been uploaded successfully
        console.log("File is uploaded on cloudinary!!", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed.
        return null
    }
}

export {uploadOnCloudinary}
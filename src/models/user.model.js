import mongoose, {Schema, trusted} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "brcypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true //to make it searchable
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true //to make it searchable
        },
        avatar: {
            type: String, //cloudinary url --> Cloudinary is a cloud-based image and video management service--> gives a url of uploaded files
            required: true
        },
        coverImage: {
            type: String //cloudinary ur;
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"

            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next) {
//pre is a hook in middlewares that is executed just before the data is saved.
    if(!this.isModified("password")) return next(); //if the password is not modified, no need to update it.

    this.password = bcrypt.hash(this.password, 10)
    next()
}) 

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)
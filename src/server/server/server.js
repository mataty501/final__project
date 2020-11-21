const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const User = require("./models/user");
const Token = require("./models/token");
const Product = require("./models/product");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());

const db = mongoose.connection;
db.once('open', () => {
    console.log("connected to db")
})


app.use(express.json());
app.use(morgan("tiny"))
app.use(helmet());

app.use(cors())

/*get products*/

/*make order*/

/*show orders*/

/*sign in */


app.post("/login", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ email: username });
        if (!user) {
            throw new Error("User doesn't exist");
        }
        const samePassword = await bcrypt.compare(password, user.password);
        if (samePassword) {
            const token = jwt.sign(
                {
                    username: user.email,
                },
                process.env.PRIVATE_KEY,
                {
                    expiresIn: "1m",
                }
            );
            const refreshToken = jwt.sign(
                {
                    username: user.email,
                },
                process.env.REFRESH_KEY,
                {
                    expiresIn: "7d",
                }
            );
            res.status(200);
            const newToken = new Token({
                token: refreshToken
            })
            await newToken.save()
            res.send({
                token: token,
                refreshToken: refreshToken,
            });
        } else {
            throw new Error("Bad credentials");
        }
    } catch (error) {
        res.status(400);
        res.send({
            message: error.message,
        });
    }
});

/*sign up*/

app.post("/signup", async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
            email: username,
            password: passwordHash,
        });
        await user.save();
        res.status(200);
        res.send(user);
    } catch (error) {
        res.status(400);
        res.send({
            message: error.message,
        });
    }
});

/*Delete product*/

/*post product*/



app.post("/addProduct", async (req, res, next) => {
    const { title, price, description } = req.body;
	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
	try{
		const user = jwt.verify(token, process.env.PRIVATE_KEY);
		res.send({token});
	}catch(error){
		if(error.name.includes('TokenExpired')) {
			res.send({message: 'TokenExpired'})
		}
	}
});

/*Token*/
app.get("/token", (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (Token.findOne({ token: token })) {
        const user = jwt.verify(token, process.env.REFRESH_KEY);
        const newToken = jwt.sign(
            {
                username: user.email,
            },
            process.env.PRIVATE_KEY,
            {
                expiresIn: "1m",
            }
        );
        res.status(200);
        res.send({
            token: newToken
        });
    }
    else {
        res.status(400);
        res.send({
            message: "Invalid token"
        })
    }

})


app.use((err, req, res, next) => {
    res.send({
        message: err.message
    })
});
/*
const PORT = 2000;
*/
app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
}); 
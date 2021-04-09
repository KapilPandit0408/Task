const bodyParser        = require('body-parser'),
      mongoose          = require('mongoose'),
      express           = require('express'),
      app               = express();
      
const { json } = require('body-parser');
const User=require("./model/user.js");

//Connection string 
const url = process.env.MONGO_URL || "mongodb://localhost:27017/Vayuz";
//Db connection
mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }) 
    .then(() => console.log('Connected to MongoDB successfully....'))
    .catch(err => console.error('Could not connect to MongoDB....'));


app.use(bodyParser.urlencoded({extended: true}));  
app.use(json());


 
app.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
        if(err) {
            console.log(err);
        }
        else {
            res.status(200).json({
                data:foundUsers
            })
        }
    });
});

app.post("/signup", (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const date = req.body.date;
    const image = req.body.image;
1
    const userdata = {username:username, email:email, password:password,date:date,image:image};
    
    User.create(userdata, function(err,newuser) {
        if(err) {
            console.log(err);
        }
        else {
            res.status(201).json({
                data:newuser
            })
        }
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express server started at port  : ${port}`);
});
const express =require('express');
const users= require("./MOCK_DATA.json");
const app = express();
const PORT= 8000;

app.get("/api/users", (req, res)=>{
    return res.json(users);
});
// sgit 
// zdas
try {
    app.get("/api/users/:id", (req, res)=>{
        const id = req.params.id;
        const user =users.find((user)=>user.id==id);
        return res.json({data:user});
    });
} catch (err) {
    return res.json({error:`something went wrong ${err.message}`})
}


app.listen(PORT, ()=> console.log(`server started at port: ${PORT}`));
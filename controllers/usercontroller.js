const users = require('../users.json');
function getAllUsers(req,res){
    try{
        res.json(users)
    }catch(err){
        console.error("Error fetching users:", err);

    }
}

module.exports = {
    getAllUsers
}
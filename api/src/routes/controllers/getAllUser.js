const {User, Sector, Salepoint} = require('../../bd');

const getAllUsers = async () => {
    try {
        let allUsers = await User.findAll({
            where:{isdelete:false},  
            include:[{
                model:Sector,
                attribute: ["sectorname"]
            },{
                model:Salepoint,
                attribute:["salepoint"]
            }]  

        });
        return allUsers;
    } catch (e) {
        console.log("Error en controllers/getAllUser.js" , e.message)
    }
}



module.exports = getAllUsers;
const { Ticket, User } = require('../../bd');

const getAllTicket = async () => {
    try{
        let getTickets = await Ticket.findAll({
            include:[{
                model:User,
                attribute:["username","sectorname","salepoint"]
            }]
        });

        getTickets.sort((a , b) => { return a.id - b.id })

        return getTickets;
    }catch(e){
        console.log( "error en controller getAllTicket" , e.message)
    }
}

module.exports = getAllTicket;
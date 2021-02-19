module.exports.run = async (data) => {
    switch(data.type){
        case 1:
            return buggie.output(`Relationship friend removed => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'}`)
        case 2:
            return buggie.output(`Relationship block removed => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'}`)
        case 3:
            return console.log(data)
    }
}
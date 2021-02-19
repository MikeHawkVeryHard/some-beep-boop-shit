module.exports.run = async (data) => {
    switch(data.type){
        case 1:
            return buggie.output(`Relationship accepted => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'}`)
        case 2:
            return buggie.output(`Relationship blocked => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'}`)
        case 3:
            buggie.output(`Relationship pending => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'}`)
            setTimeout(() => {
                buggie.accept(data.user, (status, code, message) => {
                    if(!status) return buggie.output(`Failed when adding a new relationship => ${data.user ? `${data.user.username}#${data.user.discriminator} (${data.user.id})`: data.id ? data.id: 'Unknown'} code: ${code} "${message}"`)
                    return buggie.user.friends.set(data.user.id, data.user);
                })
            }, 5000);
            break;
    }
}
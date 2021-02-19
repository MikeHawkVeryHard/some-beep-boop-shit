const ms = require('ms')
const cache = new Map();
module.exports.run = async (msg) => {
    if(msg.author.id === buggie.user.id) return;
    if(msg.channel.type === 'dm'){
        if(!cache.get(msg.author.id)){
            cache.set(msg.author.id, {})
            msg.channel.startTyping()
            let Timer = Math.floor(Math.random() * 12837)
                if(Timer.toString().length <= 3) Timer = Timer * 3;
                buggie.output(`Relationship direct message pending => ${msg.author.tag} (${msg.author.id}) ${ms(Timer)}`)
                setTimeout(() => {
                    const message_list = [`Hey. this isn't my main account. Feel free to add me on my main KYS#0369`, 'Welp looks like you added me sooo why not add my main? KYS#0369', `Haha hey.. Mind if you add my main account instead? KYS#0369`, `Hey there stepbro what you doing? haha we could be doing something but you're playing... unless? add my main KYS#0369`
                , 'Imagine if beep boops could respond like this? sadly this beep boop has a main account KYS#0369', 'Haha hey. How are you? good? thats dope! you should add my mate KYS#0369']
                    msg.author.send(message_list[Math.floor(Math.random() * message_list.length)]).then(() => {
                        msg.channel.stopTyping()
                        buggie.output(`Relationship direct message sent => ${msg.author.tag} (${msg.author.id})`)
                    })
                }, Timer);
        }
    }
}
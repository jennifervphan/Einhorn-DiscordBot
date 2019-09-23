module.exports = commandSystem => {
    commandSystem.registerPlayerCommand(new RegExp("hexho", "i"), event => {
        event.channel.send("Go away!")
    })
}
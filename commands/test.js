module.exports = commandSystem => {
    commandSystem.registerPlayerCommand(new RegExp("test", "i"), event => {
        event.channel.send("Test successful!")
    })
}
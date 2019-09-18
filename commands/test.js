module.exports = commandSystem => {
    commandSystem.registerPlayerCommand('test', event => {
        event.channel.send("Test successful!")
    })
}
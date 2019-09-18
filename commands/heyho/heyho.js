module.exports = commandSystem => {
    commandSystem.registerPlayerCommand('heyho', event => {
        event.channel.send("Test successful!")
    })
}
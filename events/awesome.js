module.exports = (client) => {
    let hiIntents = ["Hi there!", "Hi!", "Hello", "Good morning", "Good evening", "Good afternoon", "Einhorn!", "Einhorn"]
    let hiAnswers = ["Hi back, I'm Einhorn!", "Hello! Einhorn here!", "What's up?", "Howdy!"]
    let hryIntents = ["How do you do?", "How are you?", "How are you doing?"]
    let hryAnswers = ["I'm good, and you?", "Great, you?"]
    client.on('message', message => {
        if (hiIntents.includes(message.content)) {
            message.channel.send(hiAnswers[Math.floor(Math.random() * hiAnswers.length)]);
        }
        if (hryIntents.includes(message.content)) {
            message.channel.send(hryAnswers[Math.floor(Math.random() * hryAnswers.length)])
        }
        if (message.content === "Who do we hate?") {
            message.channel.send("Niklas, of course!")
        }

    });
}
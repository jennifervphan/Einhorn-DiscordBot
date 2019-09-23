const awesome = require("../awesome");

function getRandomWord() {
  return awesome[Math.floor(Math.random()*awesome.length)];
}

module.exports = commandSystem => {
  const regex = new RegExp("cool|awesome", "ig");
  commandSystem.registerPlayerCommand(regex, event => {
      const content = event.content.replace(regex, (match) => {
        return getRandomWord();
      });
      event.channel.send(content);
  })
}
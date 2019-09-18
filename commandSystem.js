class CommandSystem {
    constructor() {
        this.playerCommandMap = new Map([]);
        require('./commands')(this)
    }

    handleEvent(event) {
        if(event.author.bot) return;
        for(let command of this.playerCommandMap) {
            if(event.content.toLowerCase().includes(command[0])) {
                if(command[1](event)) break;
            }
        }
    }

    registerPlayerCommand(command, listener) {
        this.playerCommandMap.set(command, listener);
    }
}

module.exports = CommandSystem
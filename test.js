setInterval(() => {
    console.log('hello world!');
    console.log(process.env.BOT_TOKEN || 'bot token not found');
    console.log(process.env.OPENAI_TOKEN || 'open ai token not found');
    console.log(process.env.NODE_PATH || 'node path not found');
}, 3000);
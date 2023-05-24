setInterval(() => {
    console.log('hello world!');
    console.log(process.env.BOT_TOKEN);
    console.log(process.env.OPENAI_TOKEN);
    console.log(process.env.NODE_PATH);
}, 3000);
import server from './server'

let webserver = new server();
webserver.start(() => {
    console.log('Webserver started!')
});
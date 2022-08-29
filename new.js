import { readFileSync}  from 'fs';
import { createServer } from 'http';
import { Server } from 'socket.io';
import ws from "nodejs-websocket";
import WebSocket from "ws"
import dgram  from 'dgram';

import axios from "axios";
import {from} from "rxjs";

import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
/*app.get('/', (req, res) => {
    res.send("dddffffffffffffffff");

});*/




const httpServer = createServer((req, res) => {
    if (req.url !== '/') {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    // reload the file every time
    const content = readFileSync('C:\\Users\\Asus\\WebstormProjects\\untitled\\index.html');
    const length = Buffer.byteLength(content);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': length
    });
    res.end(content);
});
const dd=dgram.createSocket("udp4");
const cc=dgram.createSocket("udp4");
dd.on("message", function (msg,rinfo) {

// Displaying the client message
    process.stdout.write("Ug: " + msg + "\n");

// Exiting process
    process.exit();
})

    // Binding server with port
    .bind(1235, () => {

        // Getting the reference of the server
        // by using ref() method
        const size = dd.ref();

        // Display the result
        console.log(size.eventNames());
    });
cc.on("message", function (msg,rinfo) {

// Displaying the client message
    process.stdout.write("Ug: " + msg + "\n");

// Exiting process
    process.exit();
})

    // Binding server with port
    .bind(1234, () => {

        // Getting the reference of the server
        // by using ref() method
        const size = dd.ref();

        // Display the result
        console.log(size.eventNames());
    });


const serverk = ws.createServer(function (conn) {

        console.log("New connection")
        conn.on("massage", function (str) {
            process.stdout.write("Ug: " + str + "\n");

            console.log(str);
// Exiting process
            process.exit();
            //   console.log("Received " + str)
            conn.sendText("!!!")
        })
        conn.on("close", function (code, reason) {
            console.log("Connection closed")
        })
    }
)
serverk.listen(7000, () => {
    console.log('listening on *:7000');
});
const webs=new WebSocket("wss://localhost:7000");
// Creating connection using websocket


const io = new Server(httpServer, {
    // Socket.IO options
});

let bb=0;

const nara=(x,y)=> {
    let ss;

    io.on('connection', socket => {
        console.log(`connect ${socket.id}`);

        //    socket.send(x);
        let n=0;
        let k=0;
       let arr=[];
       arr=["0","1","2","3","4","5","6","7","8","9"];
        socket.on("message", (msg) => {

            n=0;
            k=1;
            let i;


//socket.send(msg);
            from(axios.get("https://example-data.draftbit.com/users/"+msg)).subscribe(e => socket.send(" USERNAME : "+e.data.username+" / EMAİL : "+e.data.email+" / ID : "+e.data.id+" / BİO : "+e.data.bio));

            /* while(true){
                 if(msg[n]==='/'){


                 }

                 n++;
                 k++;
             }*/
         /*   app.get('/', (req, res) => {
                res.send(msg);

            });*/
          //  socket.send(msg);


        });

        //    from(axios.get("https://ftx.com/api/markets")).subscribe(x => x.data.result.filter(e=>e.name==="1INCH/USD"));
        // socket.send("mmmmmmmmmmmmm");

    });




            //  from(axios.get("https://ftx.com/api/markets")).subscribe(e => socket.send(e.data.result[0].priceIncrement));


        //    from(axios.get("https://ftx.com/api/markets")).subscribe(x => x.data.result.filter(e=>e.name==="1INCH/USD"));
        // socket.send("mmmmmmmmmmmmm");

    y=x;
   x+=1;
   if(x<80) {
    //   return nara(x);
   }else{

       return 5;
   }

}
server.listen(3900, () => {
    console.log('listening on *:3900');
});
nara(0,0);
//dd.send("hello", 0, 5, 1234, "localhost");
httpServer.listen(3060);


webs.addEventListener("open", () =>{
    console.log("We are connected");
    webs.send("How are you?");
});

webs.addEventListener('message', function (event) {
    console.log(event.data);
});
    // connection opened
   // send a message

webs.on("connection", ws => {

    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
        ws.send("gggg");
    // handling client connection error

});

webs.onopen=()=> {
    webs.send('something');
}


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', (req, res) => {
    const customers = [{
        id:1, name: "john doe"
    },{
        id:2, name: "henk doe"
    },{
        id:3, name: "tito doe"
    }];
    res.json(customers);
})

app.listen(port, () => console.log(`server started on port ${port}`));

// const http = require("http");

// const handler = (req, res) => {
//     console.log('Server received request.🙂' );
//     res.end('Hello World');
// };

// const server = http.createServer(handler);

// server.listen(port, err =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(`Server listening on port: ${port}`);
//     }
// });
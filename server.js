const Koa = require('koa');
        bodyParser = require("koa-body-parser");

const HomeRouter =require('./routes/home.router');
const PostRouter = require("@koa/router");
//Koa application
const app = new Koa();
//when body parser  sees this he convert this in to json
//content-Type = application/json
//registering the bodyparser
//get the data stream in the body from the request covert it as applicable and make it available
//example:In this  we deal with json in the body.So this body parser will understand body is in json
//by looking at the header
//content type is a header value that indicate what type of data is in body
//in here type is application/json
//middleware you get request and response  and all the object
//example for middleware is this bodyparser which basically understand the type of the body and covert it to a actual type
//maybe authenticate middleware before it hitting routes it will authenticate the request whether it is coming authenticate source
//middleware execute some command on a request or response and it pass down to the next handler

app.use(bodyParser());

//registered routes
//registering routes along with the allowed method
//allowedMethods means what are the methods that allow in these routes
//for example homeRoute we have get and the post
//not sensitive to routes,check for the content type
//ones routes hits it it would not sends it request under down of the other handler
app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());
 //
 // app.use(PostRouter.routes())
 //     .use(PostRouter.allowedMethods());

//hello is returning from here
app.use(ctx => {
    ctx.body = 'Hello';
});
//making application available via port 3000
app.listen(3000,err => {
    if(err){
        console.error(err);
        return;
    }
});
console.log('Application is running on port 3000');
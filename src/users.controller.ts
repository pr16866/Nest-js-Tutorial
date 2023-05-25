import { Controller, Get, Res, Req, Post, Put, Delete, Patch } from "@nestjs/common";
// import { Request } from 'express';

@Controller('/users')
export class userController {
    @Get('/profile/:id')
    userProfile(@Req() req) {
        console.log(req.params);
        return "Hello Piyush";
    }
}
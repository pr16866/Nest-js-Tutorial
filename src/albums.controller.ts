// import { Controller } from '@nestjs/common';

import { Controller, Get } from "@nestjs/common";

@Controller("/albums")
export class albumsController {
    @Get("/all-albums")
    getAlbums() {
        return { "songs": "AllSongs" }
    }
}
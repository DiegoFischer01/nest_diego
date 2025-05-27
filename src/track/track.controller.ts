import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('track')
export class TrackController {

    constructor(private readonly trackservice:TrackService){}

    @Get()
    getTracks(): Promise <Track[]>{
        return this.trackservice.getTracks();
    }
}

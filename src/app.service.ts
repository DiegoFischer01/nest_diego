import { Injectable } from '@nestjs/common';

export interface iTrack {
  id:number,
  title:string,
  duration:number,
  artist: string
}

export const tracks: iTrack[] = [ //esto no es lo que corresponde
{
  id:1,
  title: "cancion 1",
  duration: 130,
  artist: "interprete 1"
},
{
  id:2,
  title: "cancion 2",
  duration: 140,
  artist: "interprete 2"
}

]

@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}

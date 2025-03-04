export interface Coord {
    latitude:number,
    longitude:number
}

export interface News {
    id:string,
    type:string,
    sectionId:string,
    sectionName:string,
    webPublicationDate:string,
    webTitle:string,
    webUrl:string,
    apiUrl:string,
    isHosted:boolean,
    pillarId:string,
    pillarName:string
}

export interface Weather {
    latitude:number,
    longitude:number,
    generationtime_ms:number,
    utc_offset_seconds:number,
    timezone:"string",
    timezone_abbreviation:string,
    elevation:number,
    current_weather_units:{
        time:string,
        interval:string,
        temperature:string,
        windspeed:string,
        winddirection:string,
        is_day:string,
        weathercode:string
    },
    current_weather:{
        time:string,
        interval:number,
        temperature:number,
        windspeed:number,
        winddirection:number,
        is_day:number,
        weathercode:number
    }
}
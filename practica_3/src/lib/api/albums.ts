import {api} from "@/lib/api/axios";
import {Album} from "@/types/Album";


export const getAlbums = async (nombre: string) =>
{
    const datos:Array<Album> = (await api.get(`/search?term=${nombre}&entity=album&limit=20`)).data.results;
    console.log(datos);
    return datos;
};

export const getAlbum = async (id: string) =>
{
    const datos:Album = (await api.get(`/lookup?id=${id}&entity=album`)).data.results[0];
    console.log(datos);
    return datos;
}

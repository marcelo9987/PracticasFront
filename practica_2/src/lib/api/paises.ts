import {api} from "@/lib/api/axios";
import {Country} from "@/types/Country";


export const getPaises = async () =>
{
    return (await api.get<Array<Country>>("/all?fields=name,flag")).data;
}

export const getPaisesPorNombre = async (nombre: string) =>
{
    return (await api.get<Array<Country>>(`/name/${nombre}?fields=name,flag`)).data;
}
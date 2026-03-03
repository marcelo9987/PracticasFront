import {api} from "@/lib/api/axios";
import {Country, FullCountry} from "@/types/Country";


export const getPaises = async () =>
{
    return (await api.get<Array<Country>>("/all?fields=name,flag,cca3")).data;
};

export const getPaisesPorNombre = async (nombre: string) =>
{
    return (await api.get<Array<Country>>(`/name/${nombre}?fields=name,flag,cca3`)).data;
};

export const getPaisesCompletosPorNombre = async (nombre: string) =>
{
    return (await api.get<Array<FullCountry>>(`/name/${nombre}/?fullText=true&fields=name,flag,coatOfArms,cca3,capital,region,borders,population,languages,currencies,startOfWeek`)).data;
};
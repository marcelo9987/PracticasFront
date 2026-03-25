'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import {Album} from "@/types/Album";


type ListaContextType = {
    lista: Album[],
    nuevoFavorito: (item: Album) => void,
    eliminarFavorito: (item: number) => void
};

const ListaContext = createContext<ListaContextType | null>(null);

export const ListaProvider = ({children}: {children: ReactNode}) => {
    const [lista, setLista] = useState<Album[]>([]);

    const nuevoFavorito = (item: Album) => {
        setLista([...lista, item])
        console.log(lista);
    };

    const eliminarFavorito = (item: number) => {
        setLista(lista.filter(x => x.collectionId !== item))
    }

    return (
        <ListaContext.Provider value={{lista, nuevoFavorito, eliminarFavorito}}>
    {children}
    </ListaContext.Provider>
)
};

export const useLista = () => {
    const context = useContext(ListaContext);
    if(!context){
        throw new Error("Fuera de límites")
    }
    return context;
}
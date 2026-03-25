'use client'

import {useLista} from "@/context/contextoFavoritos";
import {useRouter} from "next/navigation";
import {AlbumCard} from "@/components/CountryCard/AlbumCard";


const Favoritos = () =>
{
    const {lista, eliminarFavorito} = useLista();

    const router = useRouter();


    console.log(lista);
    return (
        <div>
            <h2>Favoritos</h2>

            {lista.length === 0 && (
                <big>La lista de favoritos está vacía</big>
            )}
        {lista.map(album =>
            (
                <div key={album.collectionId}>
                    <AlbumCard
                    album={album}/>
                    <button onClick={ () => eliminarFavorito(album.collectionId)}>❌</button>
                </div>
            )
        )}
        </div>
    );
};

export default Favoritos;
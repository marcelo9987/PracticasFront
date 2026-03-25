'use client'

import {useLista} from "@/context/contextoFavoritos";
import {AlbumCard} from "@/components/CountryCard/AlbumCard";
import "./page.css";


const Favoritos = () =>
{
    const {lista, eliminarFavorito} = useLista();

    return (
        <div className="favoritos-page">
            <h2 className="favoritos-title">Favoritos</h2>

            {lista.length === 0 && (
                <big className="favoritos-empty">La lista de favoritos está vacía</big>
            )}
        {lista.map(album =>
            (
                <div key={album.collectionId} className="favoritos-item">
                    <AlbumCard
                    album={album}/>
                    <button
                        className="favoritos-remove-btn"
                        onClick={ () => eliminarFavorito(album.collectionId)}
                    >
                        ❌
                    </button>
                </div>
            )
        )}
        </div>
    );
};

export default Favoritos;
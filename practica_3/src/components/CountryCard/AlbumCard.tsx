'use client';

import "./AlbumCard.css"
import Link from "next/link";
import {Album} from "@/types/Album";
import {useLista} from "@/context/contextoFavoritos";
import {useRouter} from "next/navigation";


// type Album = {
//     collectionName: string;
//     artworkUrl60: string;
// };
type Props = {
    album: any;
};

export const AlbumCard = (entrada:Props) =>
{


    const router = useRouter();
    const {nuevoFavorito} = useLista();



    const album:Album = entrada.album;

    const subirNuevoFavorito = () =>
    {
        nuevoFavorito(album);
    }

    return (
        <div className="album-card">
            <img src={album.artworkUrl60}/>
            <h3>{album.collectionName}</h3>
            {album.artistName}
            <div className={"botones"}>
                <Link href={`/albums/${album.collectionId}`}>
                <button>Detalles</button>
                </Link>
                <button onClick={subirNuevoFavorito}>Añadir a favoritos</button>
            </div>

        </div>
    );
}

//     <Link href={`/Album/${pais.name.common}`}>{pais.name.common}</Link>

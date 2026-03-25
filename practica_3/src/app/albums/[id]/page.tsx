'use client';
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {Album} from "@/types/Album";
import {getAlbum} from "@/lib/api/albums";


const paginaIndividual = () =>
{
    const params = useParams();
    if (!params.id || params.id.length === 0) {
        return (
            <div className="album-page">
                <h1>¡¡ERROR!!: Album no especificado</h1>
            </div>
        );
    }

    const [album, setAlbum] = useState<Album>();

    const obtenerAlbums = async () =>
    {
        const datos:Album = await getAlbum(decodeURIComponent(params.id as string));
        setAlbum(datos);
    }

    useEffect(() =>
    {
        document.title = "Album " + params.id;
        obtenerAlbums().catch(() => console.log("error")).finally();

    } , [params.id]);

    return (

        <div>
            {album ? null : <p>Cargando...</p>}
            {album &&
                <div>
                    <img src={album.artworkUrl100} alt={album.collectionName} />
                    <p>Nombre del álbum: {album.collectionName}</p>
                    <p>Artista: {album.artistName}</p>
                    <p>Género: {album.primaryGenreName}</p>
                    <p>Año de lanzamiento: {album.releaseDate.substring(0, 4)}</p>
                </div>
            }
            {/*<h1>Album {album?.collectionId}</h1>*/}

            {/*{*/}
            {/*    <div>*/}
            {/*        <img src={album.artworkUrl100} alt={album.collectionName} />*/}
            {/*        <p>Nombre del álbum: {album.collectionName}</p>*/}
            {/*        <p>Artista: {album.artistName}</p>*/}
            {/*        <p>Género: {album.primaryGenreName}</p>*/}
            {/*        <p>Año de lanzamiento: {album.releaseDate.substring(0, 4)}</p>*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
}

export default paginaIndividual;
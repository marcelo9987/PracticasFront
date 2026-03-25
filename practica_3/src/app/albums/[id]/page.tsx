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
    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(true);

    const obtenerAlbums = async () =>
    {
        const datos:Album = await getAlbum(decodeURIComponent(params.id as string));
        setAlbum(datos);
    }

    useEffect(() =>
    {
        document.title = "Album " + params.id;
        setCargando(true);
        setError(false);

        obtenerAlbums().catch(() =>
        {
            setError(true);
        }
        ).finally(() =>
        {
            setCargando(false);
        });

    } , [params.id]);

    return (

        <div>
            {error && <p>¡No se encontró el album!</p>}
            {!error && cargando && <p>Cargando...</p>}
            {!error && !cargando && album &&
                <div>
                    <img src={album.artworkUrl100} alt={album.collectionName} />
                    <p>Nombre del álbum: {album.collectionName}</p>
                    <p>Artista: {album.artistName}</p>
                    <p>Género: {album.primaryGenreName}</p>
                    <p>Año de lanzamiento: {album.releaseDate.substring(0, 4)}</p>
                </div>
            }
        </div>
    );
}

export default paginaIndividual;
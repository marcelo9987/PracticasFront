'use client';

import {useEffect, useState} from "react";
import {getAlbums} from "@/lib/api/albums";
import {AlbumCard} from "@/components/CountryCard/AlbumCard";
import {Album} from "@/types/Album";
import {useRouter} from "next/navigation";
import Link from "next/link";
import "./page.css";

const Buscador = () =>
{


    const router = useRouter();

    const [entrada, setEntrada] = useState<string>("");
    const [albums, setAlbums] = useState<Array<Album>>([]);
    const [nClicks, setNclicks] = useState<number>(0);
    const [estadoPagina, setEstadoPagina] = useState<boolean>(false); // 0: cargando, 1: cargado
    const [error, setError] = useState<string | null>(null);

    const setAlbumsEnPagina = async () =>
    {
        setAlbums(await getAlbums(entrada));
    };

    const buscar = () =>
    {
        console.log("Boton clicado");
        setNclicks((previo) => (previo + 1));
    };

    useEffect(() =>
    {
        document.title = "Buscar album";
    }, []);

    useEffect(() =>
    {
        console.log(albums);

        setEstadoPagina(false);
        setAlbumsEnPagina().catch(() =>
            {
                setError("Error al buscar el album");
            }
        ).finally(() =>
        {
            setEstadoPagina(true);
        });
    }, [nClicks]);

    return (
        <div className="albums-page">
            <div className="volver-wrap">
                <Link href={'/'}>
                    <button>Volver</button>
                </Link>
            </div>

            {error &&
                <div className="mensage-estado"><p>{error}</p>
                </div>
            }

            {!error && !estadoPagina &&
                <div className="mensage-estado"><p>Cargando...</p>
                </div>
            }
            {!error && estadoPagina &&
                <div className="buscador-wrap"><input value={entrada}
                         onChange={(e) => setEntrada(e.target.value)}/>
                    <button onClick={buscar}>Buscar</button>
                    <div className="resultados-wrap">
                        <ol className="albums-lista">
                            {albums.map((album) => (
                                    <AlbumCard
                                        key={album.collectionId}
                                        album={album}/>
                                )
                            )}

                        </ol>
                    </div>
                </div>
}
</div>)
    ;
};

export default Buscador;
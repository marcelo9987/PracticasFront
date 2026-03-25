'use client';

import {useEffect, useState} from "react";
import {getAlbums} from "@/lib/api/albums";
import {AlbumCard} from "@/components/CountryCard/AlbumCard";
import {Album} from "@/types/Album";
import {useRouter} from "next/navigation";
import Link from "next/link";

const Buscador = () =>
{


    const router = useRouter();

    const [entrada, setEntrada] = useState<string>("");
    const [albums, setAlbums] = useState<Array<Album>>([]);
    const [nClicks, setNclicks] = useState<number>(0);

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
        setAlbumsEnPagina().catch(() => console.log("error")).finally();
    }, [nClicks]);

    return (
        <div>
            <div>
                <Link href={'/'}><button>Voltar</button></Link>
            </div>
        <input value={entrada}
               onChange={(e) => setEntrada(e.target.value)}/>
        <button onClick={buscar}>Buscar</button>
        <div>
            <ol>
                {albums.map((album) =>

                    (
                        <AlbumCard
                            key={album.collectionId}
                            album={album}
                        />
                    )
                )}

            </ol>
        </div>
    </div>);
};

export default Buscador;
"use client";
import {useEffect, useState} from "react";
import {getPaises, getPaisesPorNombre} from "@/lib/api/paises";
import "./page.css"
import Link from "next/link";
import {CountryCard} from "@/components/CountryCard";
import {Country} from "@/types/Country";


const Home = () =>
{
    const [primerRender, setPrimerRender] = useState(true);
    const [paises, setPaises] = useState<Array<any> | null>(null);
    const [entrada, setEntrada] = useState<string>("");
    const [cargando, setCargando] = useState<boolean>(true);

    const buscarTodos = async () =>
    {
        setPaises(await getPaises());
    };
    if(primerRender)
    {
        buscarTodos().then(r =>
        {
        }).catch(e =>
        {
            console.error("Error al buscar países:", e);
        }
        ).finally(() =>
        {
            setCargando(false);
        });
        setPrimerRender(false);
    }

    const buscarPaises = async () =>
    {
        console.log("Buscando países con entrada:", entrada);
        setPaises(await getPaisesPorNombre(entrada));
    }

    useEffect(() =>
    {
        buscarPaises();
    }, [entrada]);


    return (

        <div>
            <div>
                    <h1>Países del mundo</h1>
            </div>





            <div className={"contenedor-paises"}>
                <div className={"entrada-paises"}>
                <input
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                    placeholder="País a buscar"
                />
                  <button onClick={buscarPaises}>Buscar</button>
                </div>

                <div className={"lista-paises"}>
                    { cargando &&
                        <p>Cargando países...</p>
                    }
                { paises &&
                    (
                        <ul>
                            {paises.map((paisEspecifico: Country) =>
                                (
                                    <CountryCard
                                        key={paisEspecifico.name.common}

                                        pais={
                                            {
                                                name: paisEspecifico.name.common,
                                                flag: paisEspecifico.flag
                                            }
                                        }
                                    />

                                    // <li key={pais.name.common}>
                                    //     {pais.flag}
                                    //     {/*{pais.name.common}*/}
                                    //     <Link href={`/country/${pais.name.common}`}>{pais.name.common}</Link>
                                    // </li>

                                ))}
                        </ul>
                    )
                }
            </div>
            </div>
        </div>

    );
}

export default Home;

import {useState} from 'react';

import './App.css';
import {api} from "./api/api.ts";


const App = () =>
{
    const NUMERO_DE_LECCIONES: number = Math.floor(Math.random() * (40 - 5 + 1) + 5);
    const [frase, setFrase] = useState<string | null>();

    const botonPresionado = async () =>
    {
        for (let i = 0; i < NUMERO_DE_LECCIONES; i++)
        {
            await new Promise(resolve => setTimeout(resolve, 10 + i * 11));
            const frase = await api.get("");
            setFrase(await frase.data.wisdom);
        }

    };


    return (
        <>
            <div className={"cabecera"}>
                <img src={"https://thesolaropposites.com/lessonalyzer/img/header-image.4a423608.png"}
                     alt={"Una página web más"}/>
            </div>
            <div className={"contenedor-principal"}>


                <div className={"korvo"}>
                    <img src={"https://thesolaropposites.com/lessonalyzer/img/korvo-ad-car-flash-desktop.68ee3696.png"}/>

                    <img src={"https://thesolaropposites.com/lessonalyzer/img/rainbow-arrow.01646803.gif"}
                         alt={"Una flecha apuntando hacia el botón"}/>
                    <img src={"https://thesolaropposites.com/lessonalyzer/img/car-sold-desktop.77eb8a85.png"} />

                </div>
                <div className={"boton"} onClick={botonPresionado}>
                    {frase === null || frase === undefined ?
                        <div className={"boton-contenido"}>
                            <div className="boton">
                                <div className="fila">
                                    <span>click here first</span>
                                    <span>click here first</span>
                                </div>

                                <div className="centro">
                                    learn your lesson
                                </div>

                                <div className="fila">
                                    <span>click here first</span>
                                    <span>click here first</span>
                                </div>
                            </div>
                        </div>
                        :
                        frase
                    }
                </div>

                <div >
                    <img src={"https://thesolaropposites.com/lessonalyzer/img/fam-photo.e34b51ca.png"}/>
                </div>




            </div>


            <div className={"contenedor-imagenes"}>
                <img className={"gif-superpuesto"}
                     src={"https://thesolaropposites.com/lessonalyzer/img/pupa-coin-mobile.b79f6db1.gif"}
                     alt={"Now accepting: Pupa coin"}/>
                <img className={"imagen-fondo"}
                     src={"https://thesolaropposites.com/lessonalyzer/img/bad-gateway.f924a563.png"}
                     alt={"Un 420 chulísmo"}/>
            </div>
        </>
    );
};

export default App;

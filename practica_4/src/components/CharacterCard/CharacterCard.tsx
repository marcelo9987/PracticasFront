'use client';

import Link from "next/link";
import "./CharacterCard.css";

type Props = { character: any };

export const CharacterCard = (entrada: Props) =>
{

    return (
        <div className={"Tarjeta"}>
            <Link href={`/characters/${entrada.character.id}`} className={"Enlace"}>
                <h2>
                    {entrada.character.name}
                </h2>
                <div>
                    {entrada.character.image &&
                        <img src={entrada.character.image} alt={"Imagen del personaje: " + entrada.character.name}/>}
                    <br/>
                    Estado: {entrada.character.status}
                </div>
            </Link>
        </div>
    );
};
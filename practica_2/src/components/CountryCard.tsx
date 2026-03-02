'use client';

import "./CountryCard.css"
import Link from "next/link";


type Country = {
    name: string;
    flag: string;
};
type Props = {
    pais: Country;
};

export const CountryCard = (entrada:Props) =>
{
    const pais:Country = entrada.pais;
    return (
        <Link href={`/country/${pais.name}`}>
        <article className="country-card">
            {pais.flag}
            <h3>{pais.name}</h3>
        </article>
        </Link>
    );
}

//     <Link href={`/country/${pais.name.common}`}>{pais.name.common}</Link>

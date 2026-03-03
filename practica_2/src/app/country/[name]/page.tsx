"use client";

import "./page.css";
import { useParams } from "next/navigation";
import { getPaisesCompletosPorNombre } from "@/lib/api/paises";
import { FullCountry } from "@/types/Country";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Pais = () => {

    const router = useRouter();

    const [paisCompleto, setPaisCompleto] = useState<FullCountry[] | null>(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    const params = useParams();
    if (!params.name || params.name.length === 0) {
        return (
            <main className="pais-page">
                <h1>¡¡ERROR!!: País no especificado</h1>
            </main>
        );
    }

    const nombrePaisObjetivo = decodeURIComponent(params.name as string);

    useEffect(() => {
        setCargando(true);
        setError(false);

        getPaisesCompletosPorNombre(nombrePaisObjetivo)
            .then((pais) => {
                if (!pais || pais.length === 0) {
                    setError(true);
                    setPaisCompleto(null);
                } else {
                    setPaisCompleto(pais);
                }
            })
            .catch((e) => {
                console.error("Error al buscar país:", e);
                setError(true);
                setPaisCompleto(null);
            })
            .finally(() => setCargando(false));
    }, [nombrePaisObjetivo]);

    if (cargando) return <main className="pais-page"><p>Cargando...</p></main>;
    if (error || !paisCompleto) return <main className="pais-page"><p>¡No se encontró el país!</p></main>;

    const p = paisCompleto[0]; // normalmente só haberá un resultado exacto

    return (
        <main className="pais-page">
            <header className="pais-header">
                <h1>{p.name.common} {p.flag}</h1>
                <h2>Nombre oficial: {p.name.official}</h2>
                {}
                <button
                    onClick={() => router.push("/")}
                    className="btn-volver"
                >
                    ← Volver a la página principal
                </button>
            </header>

            <section className="pais-info">
                {p.coatOfArms?.png && <img src={p.coatOfArms.png} alt={`Escudo de ${p.name.common}`} className="pais-escudo" />}
                <p><strong>Capital:</strong> {p.capital?.join(", ") || "N/A"}</p>
                <p><strong>Región:</strong> {p.region}</p>
                <p><strong>Población:</strong> {p.population.toLocaleString()}</p>
            </section>

            {p.languages && (
                <section className="pais-languages">
                    <h3>Idiomas</h3>
                    <p>{Object.values(p.languages).join(", ")}</p>
                </section>
            )}

            {p.currencies && (
                <section className="pais-currencies">
                    <h3>Monedas</h3>
                    <p>{Object.values(p.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
                </section>
            )}

            {p.borders && p.borders.length > 0 && (
                <section className="pais-borders">
                    <h3>Fronteras</h3>
                    <p>{p.borders.join(", ")}</p>
                </section>
            )}
        </main>
    );
};

export default Pais;
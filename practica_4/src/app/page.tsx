'use client';
import {ObtenerPersonajesQuery, ObtenerPersonajesQueryVariables} from "@/gql/graphql";
import {useQuery} from "@apollo/client/react";
import {OBTENER_TODOS_LOS_PERSONAJES} from "@/features/characters/queries";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {useState} from "react";


export default () =>
{
    const  [pagina, setPagina] = useState<number>(1);

    const {data, loading, error} = useQuery<ObtenerPersonajesQuery, ObtenerPersonajesQueryVariables>(OBTENER_TODOS_LOS_PERSONAJES, {
        variables: {
             page:pagina
        }
    });



if (loading) return(<div>{ "Cargando..."}</div>)
if (error) return (<div>{"Error al cargar la página" }</div>)
    return (
        <div className={"principal"}>

            <div className={"personajes"}>
            {!loading &&
                data?.characters?.results?.map((personaje) =>
                    (
                        <CharacterCard character={personaje} key={personaje?.id}/>

                ))
            }
            </div>

            <div className={"botones"}>
            <button  onClick={() => setPagina(p => Math.max(1, p - 1))} disabled={data?.characters?.info?.prev === null} >
                Página anterior
            </button>
            <button  onClick={() => setPagina(pagina + 1)} disabled={data?.characters?.info?.next === null}>
                Página siguiente
            </button>
            </div>

        </div>
    );
}

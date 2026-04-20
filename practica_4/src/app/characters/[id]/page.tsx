'use client';


import {useQuery} from "@apollo/client/react";
import {OBTENER_PERSONAJE} from "@/features/characters/queries";
import {ObtenerPersonajeQuery, ObtenerPersonajeQueryVariables} from "@/gql/graphql";
import {useParams} from "next/navigation";


const pagina = () =>
{

    const params = useParams();
    if (!params.id || params.id.length === 0)
    {
        return (
            <div>
                <h1>¡¡ERROR!!: Personaje no especificado</h1>
            </div>
        );
    }

    const {data, loading,error} = useQuery<ObtenerPersonajeQuery, ObtenerPersonajeQueryVariables>(OBTENER_PERSONAJE, {
        variables: {
            characterId: params.id as string
        }
    });
    console.log(data);

    if (loading) return(<div>{ "Cargando..."}</div>)
    if (error) return (<div>{"Error al cargar la página" }</div>)

    return (
        <div>
            {data && (
                <div>
                    <h1>{data.character!.name}</h1>

                    {data.character!.image&& <img src={data.character!.image} alt={data.character!.name? data.character!.name : "Personaje"}/>}

                    <p>Species: {data.character!.species}</p>
                    {data.character?.origin &&
                    <table border={1}>
                        <tbody>
                        <tr>
                            <td>Origin name</td>
                            <td>{data.character.origin.name}</td>
                        </tr>
                        <tr>
                            <td>Origin type</td>
                            <td>{data.character.origin.type}</td>
                        </tr>
                        <tr>
                            <td>Dimension</td>
                            <td>{data.character.origin.dimension}</td>
                        </tr>
                        </tbody>
                    </table>
                    }
                    <p>Status: {data.character!.status}</p>
                </div>
            )}
        </div>
    );

}
export default pagina;


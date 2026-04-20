import gql from "graphql-tag";


export const  OBTENER_TODOS_LOS_PERSONAJES = gql`query ObtenerPersonajes($page: Int) {
    characters(page: $page) {
    info{
        next
        prev
    }
        results {
            id
            name
            status
            image
        }
    }
}`;

export const  OBTENER_PERSONAJE = gql`query ObtenerPersonaje($characterId: ID!) {
  character(id: $characterId) {
    name
    species
    status
    image
    origin {
      id
      name
      type
      dimension
      created
    }
  }
}`;
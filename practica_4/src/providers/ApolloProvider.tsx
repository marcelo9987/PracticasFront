import {ReactNode} from "react";
import {ApolloProvider} from "@apollo/client/react";
import {client} from "@/lib/api/gqlclient";

export const ApolloProviderWrapper = ({children}: {children: ReactNode}) =>
{
    return(
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
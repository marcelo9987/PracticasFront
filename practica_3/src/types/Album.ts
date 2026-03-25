export type Album =
{
        wrapperType: string;           // normalmente "collection"
        collectionType: string;        // normalmente "Album"
        artistId: number;
        amgArtistId?: number;          // opcional, non todos teñen
        artistName: string;
        artistViewUrl: string;
        artworkUrl100: string;
        artworkUrl60: string;
        collectionCensoredName: string;
        collectionExplicitness: string; // ex: "notExplicit"
        collectionId: number;
        collectionName: string;
        collectionPrice: number;
        collectionViewUrl: string;
        copyright: string;
        country: string;
        currency: string;
        primaryGenreName: string;
        releaseDate: string;           // iso string
        trackCount: number;
    }
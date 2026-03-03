type NativeName = {
    official: string
    common: string
}

export type Country = {
    flag: string
    name: {
        common: string
        official: string
        nativeName: Record<string, NativeName>
    }
    cca3: string
}

export type FullCountry = {
    // Identificación
    name: {
        common: string;
        official: string;
        nativeName?: {
            [langCode: string]: {
                official: string;
                common: string;
            };
        };
    };
    flag: string; // emoji
    coatOfArms?: {
        png: string;
        svg: string;
    };
    cca3: string;

    // Xeografía
    capital: string[];
    region: string;
    borders?: string[];

    // Demografía
    population: number;

    // Cultura / Idiomas
    languages?: {
        [langCode: string]: string;
    };

    // Economía / Vida diaria
    currencies?: {
        [code: string]: {
            name: string;
            symbol: string;
        };
    };
    startOfWeek?: string;
};


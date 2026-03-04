# Página con buscador de países  del mundo

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![license](https://img.shields.io/badge/license-%20%20GNU%20GPLv3%20-green?style=plastic)](LICENSE)

## Instalación

```text
git clone https://github.com/marcelo9987/PracticasProgramacionDeSistemasEnInternet/
cd practica_2
npm install
```

## Uso

```text
npm run dev
```

A continuación, abrir en firefox la url: http://localhost:3000/ o http://127.0.0.1:3000/

## Estructura

```
practica_2/
├── src/
│   ├── app/                          # Directorio principal de la aplicación Next.js
│   │   ├── layout.tsx                # Layout raíz de la aplicación
│   │   ├── page.tsx                  # Página principal con buscador de países
│   │   ├── page.css                  # Estilos de la página principal
│   │   ├── globals.css               # Estilos globales
│   │   ├── country/
│   │   │   └── [name]/
│   │   │       ├── page.tsx          # Página dinámica para detalles del país
│   │   │       └── page.css          # Estilos de la página de país
│   │   └── favicon.ico               # Favicon de la aplicación
│   │
│   ├── components/                   # Componentes reutilizables
│   │   ├── CountryCard/
│   │   │   ├── CountryCard.tsx       # Componente para mostrar tarjeta de país
│   │   │   └── CountryCard.css       # Estilos de la tarjeta
│   │
│   ├── lib/                          # Utilidades y librerías
│   │   └── api/
│   │       ├── axios.ts              # Configuración de axios
│   │       └── paises.ts             # Funciones para obtener datos de países
│   │
│   └── types/
│       └── Country.ts                # Tipos TypeScript para Country 
│
├── public/                           # Archivos estáticos públicos
│   ├── next.svg
│   ├── vercel.svg
│   ├── globe.svg
│   ├── file.svg
│   └── window.svg
│
├── package.json                      # Dependencias y scripts del proyecto
├── tsconfig.json                     # Configuración de TypeScript
├── next.config.ts                    # Configuración de Next.js
└── README.md                         # Este archivo
```

### Descripción de directorios

- **src/app**: Contiene las rutas y páginas de la aplicación. Incluye la página principal con el buscador y una ruta dinámica para mostrar detalles de cada país.
- **src/components**: Componentes React reutilizables como tarjetas de países y la página de detalles completa.
- **src/lib/api**: Funciones para conectar con la API REST de países y configuración de axios.
- **src/types**: Definiciones de tipos TypeScript para la aplicación.
- **public**: Archivos estáticos servidos directamente por Next.js.

### Funcionalidades principales

- **Listado de países**: Muestra todos los países disponibles en un grid de tarjetas.
- **Búsqueda de países**: Permite buscar países por nombre.
- **Detalles del país**: Al hacer clic en una tarjeta, muestra información completa del país seleccionado.
- **API REST**: Utiliza la API de REST Countries para obtener información de países.

## Contribuir

Para contribuir, puedes crear una nueva rama y proponer tus cambios en una pull-request

## Licencia

GNU GPLv3

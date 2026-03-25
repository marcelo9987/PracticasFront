"use client"

import Image from "next/image";
import "./page.css";
import Head from "next/head";
import {Metadata} from "next";
import {useEffect, useState} from "react";
import Link from "next/link";

const  Home =  () =>
{
    useEffect(() =>
    {
        document.title="Biblioteca de música";
    }, []);

    return(
    <div>
        <header className={"titulo"}>
            <h1>Colección de música</h1>
        </header>
        <div>

            <Link href={`/albums/`}>
                <button>Buscar</button>
            </Link>
            <Link href={`/favoritos`}>
                <button>Favoritos</button>
            </Link>
        </div>
    </div>
    )
}

export default Home;

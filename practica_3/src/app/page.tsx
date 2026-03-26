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
    <div className="home-page">
        <header className={"titulo"}>
            <h1>Colección de música</h1>
        </header>
        <div className="home-actions">

            <Link href={`/albums/`}>
                <button className="home-action-btn">Buscar</button>
            </Link>
            <Link href={`/favoritos`}>
                <button className="home-action-btn">Favoritos</button>
            </Link>
        </div>
    </div>
    )
}

export default Home;

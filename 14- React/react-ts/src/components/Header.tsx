import type { ReactNode } from "react";

interface HeaderProps{
    imagem:{
        src: string;
        alt:string;
    }
    children?: ReactNode
}

export default function Header({imagem, children}: HeaderProps){
    return (<header>
        <img {...imagem}/>
        {children}
    </header>
    );
}
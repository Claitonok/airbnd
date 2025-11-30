'use client';
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";
import { fetchData } from "./utils/api";

export default async function Home() {

  const dados = await fetchData();

  return <>
  {/* {dados.accommodation[0].title} */}
    <header className="container mx-auto">
      <BarraSuperior />
      <BarraPesquisa />
    </header>

    <hr className="my-3" />

    <main className="container mx-auto">
    <NavegacaoAbasHorizontal icons={dados.icons}/>
    <Acomodacoes accommodation={dados.accommodation}/>
    </main>

    <footer className="container mx-auto flex justify-center items-center py-6">
     <Rodape />
    </footer>

  </>

}

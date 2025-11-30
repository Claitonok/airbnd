import AcomodacoesDetalhes from "@/widgets/AcomodacoesDetalhes";
import AcomodacoesDepoimentos from "@/widgets/AcomodacoesDepoimentos";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Galeria from "@/widgets/Galeria";
import Rodape from "@/widgets/Rodape";
import { fetchAcomodacaoById } from "../utils/api";
import { notFound } from "next/navigation";

interface PageProps {
    id: string;
}


export default async function Page(
    {params} : {params: Promise<PageProps>},
) {
    const {id} = await params;
    const acomodacao = await fetchAcomodacaoById(id);

    if (!acomodacao) {
        notFound();
    }
return <>
    <header className="container mx-auto">
      <BarraSuperior />
      <BarraPesquisa />
    </header>

    <hr className="my-3" />

    <main className="container mx-auto">

        <h1 className="font-semibold">{acomodacao?.title}</h1>

        <Galeria fotos={acomodacao?.photos} id={0} source={""} description={""} />

         <div>
            <p className="my-4">Descrição detalhada da acomodação {id}.</p>
            <AcomodacoesDetalhes />
            <AcomodacoesDepoimentos testimonials={acomodacao?.testimonials} />
         </div>

    </main>

    <footer className="container mx-auto flex justify-center items-center py-6">
        <Rodape />
    </footer>

</>

}

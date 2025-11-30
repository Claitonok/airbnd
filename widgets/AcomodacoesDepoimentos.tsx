import { Testimonials } from "@/app/types/AirbnbDados";
import { IconStarFilled } from "@/assets/icones";
import Image from "next/image";

interface AcomodacoesDepoimentosProps{
  testimonials: Testimonials[];
}

const AcomodacoesDepoimentos = (
  props: AcomodacoesDepoimentosProps
) => {

  const depoimentos = props.testimonials;

  return <>
    <div className="w-full py-4">
        <h2 className="text-xl font-semibold">Depoimentos dos Hóspedes</h2>
        
    {depoimentos.map((depoimento, indice) => (
        <div key={indice}>

        <div className="mt-4 space-y-4">
            <div className="border p-4 rounded-lg shadow-sm">
                <div className="flex flex-row justify-between items-center">
                <Image
                    src={depoimento.image}
                    alt={depoimento.name}
                    width={50}
                    height={50}
                    className="rounded-full mb-2"
                    unoptimized={true}
                 />
                 <p className="italic">{depoimento.comment}</p>
                </div>

                <span className="block mt-2 font-semibold">{depoimento.name}.<IconStarFilled className="inline-block text-yellow-500 ml-2"/> - {depoimento.rating}</span>
                <span className="block mt-2 font-semibold">{depoimento.rating} (400+ avaliações)</span>
            </div>
        </div>

        </div>
    ))}
    </div>
  </>
};
export default AcomodacoesDepoimentos;

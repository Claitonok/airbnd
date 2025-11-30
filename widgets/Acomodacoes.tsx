'use client';

import { Accommodation } from "@/app/types/AirbnbDados";
import AcomodacaoCompo from "@/components/Acomodacao";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface NavegacaoAbasAcomodacoesProps{
    accommodation: Accommodation[];
}

const Acomodacoes = (
  props: NavegacaoAbasAcomodacoesProps
) => {

  const acomodacoes = props.accommodation;

  return <>

<div className="flex items-center justify-between mt-8 mb-4">
   <Link href="/" className="text-2xl font-semibold">Acomodações mais procuradas</Link>
   <a href="/" className="text-blue-600 font-semibold">Ver todas</a>
</div>
    <section className="my-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {acomodacoes.map((acomodacao, indice) => (
      <SwiperSlide key={indice}>
          <Link className="flex flex-col gap-2" href={`/${acomodacao.slug}`}>

            <AcomodacaoCompo
            local={acomodacao.location.city}
            data={acomodacao.date}
            preco={acomodacao.price}
            avaliacao={acomodacao.rating}
            >
          <img 
            src={acomodacao.photos[0].source}
            alt={acomodacao.photos[0].description}
            className="w-full aspect-square object-cover rounded-lg"
          />
            </AcomodacaoCompo>

        </Link>
      </SwiperSlide>
      ))}
    </section>

  </>

}  

export default Acomodacoes;
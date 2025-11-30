// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BotaoIcone } from '@/components/BotaoIcone';
import { IconAdjustmentsHorizontal } from '@/assets/icones';
import Link from 'next/link';
import Image from 'next/image';
import {Photo} from '@/app/types/AirbnbDados';

interface NavegacaoAbasHorizontalProps{
    icons: Photo[];
}

const NavegacaoAbasHorizontal = (
  props: NavegacaoAbasHorizontalProps
) => {

  const iconsAirbnb = props.icons;

  return (
    <div className='flex items-center gap-4 overflow-x-auto'>
       {/* Navegação de filtros */}
        <Swiper spaceBetween={10}
         slidesPerView={3}
         breakpoints={{
            420:{slidesPerView: 3},
            640:{slidesPerView: 4},
            764:{slidesPerView: 5},
            1024:{slidesPerView: 6},
            1280:{slidesPerView: 7}
         }}
         className='flex-1'>

        {iconsAirbnb.map((iconsAir, indice) => (
            <SwiperSlide key={indice}>
                <Link href={iconsAir.url} className='flex flex-col items-center gap-2'>
                <Image
                    src={iconsAir.source}
                    alt={iconsAir.description}
                    width={24}
                    height={24}
                    unoptimized={true}
                    />
                    <span className='text-sm text-center whitespace-normal'>{iconsAir.description}</span>
                </Link>
            </SwiperSlide>
        ))}
        </Swiper>

       {/* Ícone de filtros */}
        <BotaoIcone icone={(
            <IconAdjustmentsHorizontal 
                aria-label="Icone de usuário" 
                size={32} 
                className="text-black-000"
    />
    )}>
        Filtros
    </BotaoIcone>
    </div>
  );
}

export default NavegacaoAbasHorizontal;
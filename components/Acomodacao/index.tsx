import { IconHeartFilled } from "@/assets/icones";

interface AcomodacaoProps {
    children?: React.ReactNode;
    local: string;
    data: string;
    preco: number;
    avaliacao: number;
}

const AcomodacaoCompo = ({
    children, local, data, preco, avaliacao
}: AcomodacaoProps) => {
  return (
   <>
    <figure className="relative">

        <div className="p-2 absolute w-full flex flex-row justify-between items-center">
            <span className="bg-white px-1 py-1 rounded-full font-semibold">Preferido dos hóspedes</span>

            <IconHeartFilled 
                aria-label="Favoritos"
                className="stroke-white opacity-80 hover:stroke-red-500 cursor-pointer"
                size={30}
            />
 
        </div>

        {children}

        <figcaption className="pt-2">
            <div className="flex flex-row">
                <span>{local}</span>
            </div>
            <div>{data}</div>
            <div className="text-gray-500">R$ {preco} por 2 noites - ⭐ {avaliacao}</div>
        </figcaption>
    </figure>

   </>
  );
}  

export default AcomodacaoCompo;
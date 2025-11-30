type Fotos = {
    id: number;
    source: string;
    description: string;
};

interface GaleriaProps {
    id: number;
    source: string;
    description: string;
    fotos: Fotos[];
}


const Galeria = (

    {fotos} : GaleriaProps

) => {

  return (

    <section className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fotos.map((foto, indice) => {

                    const primeiraFoto = indice == 0 ? 'col-span-4 row-span-4' : '';
                    
                return (
                    
                    <div key={indice} className="overflow-hidden rounded-lg shadow-lg">

                        <img src={foto.source}
                            alt={foto.description || `Imagem ${foto.id}`}
                            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                        
                    </div>

                );
            })}
        </div>
            
    </section>
    );
};
export default Galeria;

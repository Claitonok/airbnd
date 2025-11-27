import { IconSearch } from "@tabler/icons-react";


const BarraPesquisa = () => {
    return (
        <>
        <div className="border-2 border-gray-200 flex items-center
         rounded-full px-3 p-2 w-full max-w-2xl mx-auto shadow-lg shadow-gray-300">
            <input className="w-full focus:outline-none px-2" type="text" name="" id="" placeholder="Digite sua pesquisa" />

            <button type="submit" className="bg-red-600 rounded-full p-2 text-white hover:bg-red-400 transition">
            <IconSearch 
            aria-label="Pesquisa" 
            size={32}/>
            </button>
        </div>
        </>
    )
}

export default BarraPesquisa;
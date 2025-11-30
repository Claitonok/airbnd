

const Rodape = () => {
  return (
    <div className="w-full border-t border-gray-200 bg-white text-sm text-gray-700">
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center">
            <span>© 2026 AirBnb, Inc.</span>
            <div className="flex flex-row space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:underline">Privacidade</a>
                <a href="#" className="hover:underline">Termos</a>
                <a href="#" className="hover:underline">Mapa do site</a>
                <a href="#" className="hover:underline">Informações da empresa</a>
            </div>
        </div>
    </div>
  );
}
export default Rodape;
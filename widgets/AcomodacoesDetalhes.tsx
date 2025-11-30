import { IconAlarmSmoke, IconBrandCarbon, IconDesk, IconDog, IconParking, IconPhoto, IconPool, IconSailboat, IconToolsKitchen2, IconWifi } from "@/assets/icones";

const AcomodacoesDepoimentos = () => {
  return <>
    <div className="w-full py-4">
        <h2 className="text-xl font-semibold">Espaço inteiro: casa de campo</h2>
        <ul className="flex flex-row gap-2">
            <li>10 hópedes</li>
            <li>&middot;</li>
            <li>05 quartos</li>
            <li>&middot;</li>
            <li>5 camas</li>
            <li>&middot;</li>
            <li>6 banheiros</li>
        </ul>


    <h2 className="pt-4 text-xl font-semibold">O que esse lugar oferece?</h2>
        <ul className="py-6 grid grid-cols-2 items-center gap-y-6">

            <li className="flex gap-1.5">
                <IconPhoto/>
                <span>Visita para os montanhas</span>
            </li>

             <li className="flex gap-1.5">
                <IconToolsKitchen2/>
                <span>cozinha</span>
            </li>

             <li className="flex gap-1.5">
                <IconDesk/>
                <span>Espaço  de trabalho exclusivo</span>
            </li>

             <li className="flex gap-1.5">
                <IconPool/>
                <span>Piscinas privativas</span>
            </li>

             <li className="flex gap-1.5">
                <IconBrandCarbon/>
                <span>Alarme de segunça p/ gás</span>
            </li>
            
            <li className="flex gap-1.5">
                <IconSailboat/>
                <span>Visita para as águas</span>
            </li>

             <li className="flex gap-1.5">
                <IconWifi/>
                <span>Wi-Fi rápido (83 Mbps)</span>
            </li>
             <li className="flex gap-1.5">
                <IconParking/>
                <span>Estacionamenot incluído</span>
            </li>

            <li className="flex gap-1.5">
                <IconAlarmSmoke/>
                <span>Alarme de fumaça</span>
            </li>
              
            <li className="flex gap-1.5">
                <IconDog/>
                <span>Animais de estimação são permitidos</span>
            </li>

        </ul>

    </div>
  </>
};
export default AcomodacoesDepoimentos;


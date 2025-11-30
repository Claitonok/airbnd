import { Accommodation, AirbnbApiResponse} from "../types/AirbnbDados";

export async function fetchData(): Promise<AirbnbApiResponse> {
    
    try{
        const response = await fetch(`https://web.codans.com.br/airbnb`);
        const dados = response.json();
        return dados;
    } catch(e) {
        console.error(e);
        throw new Error(e + 'Failed to fetch accommodation data');
    }
}


export async function fetchAcomodacaoById(id: string):Promise<Accommodation | undefined> {

     try{
        const dados = await fetchData(); 
        const acomodacao = dados.accommodation.find( (item: Accommodation)=> {
            return item.slug === id;
        });

        return acomodacao;
    } catch(e) {
        console.error(e);
        throw new Error(e + 'Failed to fetch accommodation data');
    }
}


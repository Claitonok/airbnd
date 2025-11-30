
// AirbnbDados type
export interface AirbnbApiResponse {
    accommodation: Accommodation[];
    icons: Photo[];
}

// Accomodation type
export interface Accommodation{
    id: string;
    title: string;
    date: string;
    testimonials: Testimonials[];
    photos: Photo[];
    hasBadge: boolean;
    host: string;
    slug: string;
    location: Location;
    price: number;
    rating: number;
}

// Testimonial type
export interface Testimonials{
    id: string;
    name: string;
    image: string;
    comment: string;
    rating: number;
    customerTime: number;
    createdAt: number;
    stayedAt: number;
}


// Photo type
export interface Photo{
    id: number;
    source: string;
    description: string;
    url: string;
}

export interface Icons{
    id: number;
    description: string;
    source: string;
    url: string;
}

// Location type
export interface Location{
    description: string;
    city: string;
    state: string;
    country: string;
}

import { Location } from "./location.model";

export interface Business {
    image_url?: string;
    url?: string;
    name?: string;
    rating?: number;
    display_phone?: string;
    transactions?: string[];
    location?: Location
}
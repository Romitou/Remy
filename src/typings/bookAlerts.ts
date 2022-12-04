import { Restaurant } from './restaurants';

export interface BookAlert {
    id: number;
    restaurant: Restaurant;
    restaurantId: string;
    discordId: string;
    date: string;
    mealPeriod: 'breakfast' | 'lunch' | 'dinner';
    partyMix: number;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}

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

export interface BookNotification {
    bookAlertId: number;
    discordId: string;
    restaurant: Restaurant;
    date: string;
    mealPeriod: string;
    partyMix: number;
    hours: string[];
}

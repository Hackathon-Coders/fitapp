
import { User } from '../model/user';
export interface Tracker {
    user: User,
    date: Date,
    weight: number,
    foodCalories: String,
    exercise: String,
    walking: String
}
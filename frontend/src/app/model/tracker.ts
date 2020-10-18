
import { User } from '../model/user';
import { Exercise } from '../model/exercise';
import { Weight } from '../model/weight';
import { Running } from '../model/running';
import { Calories } from '../model/calories';


export interface Tracker {
    user: User,
    date: Date,
    weight: Weight,
    foodCalories: Calories,
    exercise: Exercise,
    walking: Running
}
import { User } from '../model/user';
import { Exercise } from '../model/exercise';
import { Calories } from '../model/calories';
import { Weight } from '../model/weight';
import { Running } from '../model/running';

export interface UserResponse {
    user: User,
    excerciselist: Exercise[],
    calorielist: Calories[],
    responseCode: String,
    weightlist: Weight[],
    runlist: Running[],
}
import {Routine} from './routine.model';
import {User} from './user.model';
import {Rating} from './rating.model';

export class Workout {
  constructor(
    public _id: string,
    public name: string,
    public routines: Routine[],
    public pause: number,
    public type: string,
    public createdBy: User,
    public createdOn: Date,
    public ratings: Rating[],
    public ratingMoy: number
  ) {
  }


}

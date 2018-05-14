export class WorkoutFormModel {

  constructor(
    public creatorId: string,
    public name: string,
    public level: string,
    public duration: number,
    public type: string,
    public equipment: boolean,
    public workoutType: string) {
  }

}

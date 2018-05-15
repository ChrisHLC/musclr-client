export class Relationship {
  constructor(public user_one_id: string,
              public user_two_id: string,
              public status: string,
              public action_user_id: string) {
  }
}

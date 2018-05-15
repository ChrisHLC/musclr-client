export class Chat {
  constructor(public chat_id: number,
              public user_from_id: string,
              public user_to_id: string,
              public message: string,
              public sent_on: Date) {
  }
}

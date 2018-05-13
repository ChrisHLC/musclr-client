export class Chat {
  constructor(public chat_id: number,
              public user_from_name: string,
              public user_to_name: string,
              public message: string,
              public sent_on: Date) {
  }
}

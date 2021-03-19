export interface Message {
  type: 'SENT' | 'RECEIVED';
  name: string;
  message: string;
  time: number;
}

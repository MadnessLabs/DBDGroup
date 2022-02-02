import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
export declare class AppAdmin {
  db: Firestore;
  auth: Auth;
  formData: Tournament;
  onInput(event: any): void;
  onSubmit(): void;
  render(): any;
}

import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
export declare class AppHome {
  formData: {
    name?: string;
    type?: string;
  };
  db: Firestore;
  auth: Auth;
  onSubmit(): void;
  onInput(event: any): void;
  componentDidLoad(): Promise<void>;
  render(): any;
}

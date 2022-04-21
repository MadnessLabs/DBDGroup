import { ComponentInterface } from "../../stencil-public-runtime";
export declare class TournamentCard implements ComponentInterface {
  image: string;
  name: string;
  dateTime: string;
  rules: string[];
  href: string;
  componentDidLoad(): void;
  render(): any;
}

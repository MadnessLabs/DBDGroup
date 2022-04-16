import { ComponentInterface } from "../../../stencil-public-runtime";
export declare class PageTournamentList implements ComponentInterface {
  filterBarEl: any;
  paginationEl: any;
  query: string;
  filters: any;
  endpoint: string;
  limit: number;
  onSearchInput(event: any): void;
  componentDidLoad(): void;
  render(): any;
}

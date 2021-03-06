/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Firestore } from "firebase/firestore";
import { Auth } from "firebase/auth";
import { AuthService, DatabaseService } from "@fireenjin/sdk";
import { Tournament, TournamentStatus } from "./interfaces";
export namespace Components {
    interface AppAdmin {
        "auth": Auth;
        "db": Firestore;
    }
    interface AppHome {
        "auth": AuthService;
        "db": DatabaseService;
        "tournamentId": any;
    }
    interface AppList {
    }
    interface AppOauth {
        "discord": boolean;
    }
    interface AppTournament {
        "auth": AuthService;
        "db": DatabaseService;
        "status": TournamentStatus;
        "tournamentId": string;
        "userId": string;
    }
    interface AppTournamentList {
    }
    interface DbdTournamentCard {
        "dateTime": string;
        "href": string;
        "image": string;
        "name": string;
        "rules": string[];
        "status": TournamentStatus;
        "timestamp": Date;
    }
    interface DbdgroupRouter {
    }
    interface ModalLogin {
        "auth": AuthService;
    }
    interface ModalProfile {
        "auth": AuthService;
        "db": DatabaseService;
        "documentId": string;
        "headerTitle": string;
        "userId": string;
    }
    interface ModalScoring {
        "tournament": Tournament;
        "tournamentId": string;
    }
    interface ModalSurvivorScoring {
        "tournament": Tournament;
        "tournamentId": string;
    }
    interface ModalTournamentDetail {
        "db": DatabaseService;
        "rules": string[];
        "tournament": Tournament;
        "tournamentId": string;
    }
    interface ModalTournamentEdit {
        "mainTitle": "Create Tournament";
        "tournament": Tournament;
        "tournamentId": string;
    }
}
declare global {
    interface HTMLAppAdminElement extends Components.AppAdmin, HTMLStencilElement {
    }
    var HTMLAppAdminElement: {
        prototype: HTMLAppAdminElement;
        new (): HTMLAppAdminElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppListElement extends Components.AppList, HTMLStencilElement {
    }
    var HTMLAppListElement: {
        prototype: HTMLAppListElement;
        new (): HTMLAppListElement;
    };
    interface HTMLAppOauthElement extends Components.AppOauth, HTMLStencilElement {
    }
    var HTMLAppOauthElement: {
        prototype: HTMLAppOauthElement;
        new (): HTMLAppOauthElement;
    };
    interface HTMLAppTournamentElement extends Components.AppTournament, HTMLStencilElement {
    }
    var HTMLAppTournamentElement: {
        prototype: HTMLAppTournamentElement;
        new (): HTMLAppTournamentElement;
    };
    interface HTMLAppTournamentListElement extends Components.AppTournamentList, HTMLStencilElement {
    }
    var HTMLAppTournamentListElement: {
        prototype: HTMLAppTournamentListElement;
        new (): HTMLAppTournamentListElement;
    };
    interface HTMLDbdTournamentCardElement extends Components.DbdTournamentCard, HTMLStencilElement {
    }
    var HTMLDbdTournamentCardElement: {
        prototype: HTMLDbdTournamentCardElement;
        new (): HTMLDbdTournamentCardElement;
    };
    interface HTMLDbdgroupRouterElement extends Components.DbdgroupRouter, HTMLStencilElement {
    }
    var HTMLDbdgroupRouterElement: {
        prototype: HTMLDbdgroupRouterElement;
        new (): HTMLDbdgroupRouterElement;
    };
    interface HTMLModalLoginElement extends Components.ModalLogin, HTMLStencilElement {
    }
    var HTMLModalLoginElement: {
        prototype: HTMLModalLoginElement;
        new (): HTMLModalLoginElement;
    };
    interface HTMLModalProfileElement extends Components.ModalProfile, HTMLStencilElement {
    }
    var HTMLModalProfileElement: {
        prototype: HTMLModalProfileElement;
        new (): HTMLModalProfileElement;
    };
    interface HTMLModalScoringElement extends Components.ModalScoring, HTMLStencilElement {
    }
    var HTMLModalScoringElement: {
        prototype: HTMLModalScoringElement;
        new (): HTMLModalScoringElement;
    };
    interface HTMLModalSurvivorScoringElement extends Components.ModalSurvivorScoring, HTMLStencilElement {
    }
    var HTMLModalSurvivorScoringElement: {
        prototype: HTMLModalSurvivorScoringElement;
        new (): HTMLModalSurvivorScoringElement;
    };
    interface HTMLModalTournamentDetailElement extends Components.ModalTournamentDetail, HTMLStencilElement {
    }
    var HTMLModalTournamentDetailElement: {
        prototype: HTMLModalTournamentDetailElement;
        new (): HTMLModalTournamentDetailElement;
    };
    interface HTMLModalTournamentEditElement extends Components.ModalTournamentEdit, HTMLStencilElement {
    }
    var HTMLModalTournamentEditElement: {
        prototype: HTMLModalTournamentEditElement;
        new (): HTMLModalTournamentEditElement;
    };
    interface HTMLElementTagNameMap {
        "app-admin": HTMLAppAdminElement;
        "app-home": HTMLAppHomeElement;
        "app-list": HTMLAppListElement;
        "app-oauth": HTMLAppOauthElement;
        "app-tournament": HTMLAppTournamentElement;
        "app-tournament-list": HTMLAppTournamentListElement;
        "dbd-tournament-card": HTMLDbdTournamentCardElement;
        "dbdgroup-router": HTMLDbdgroupRouterElement;
        "modal-login": HTMLModalLoginElement;
        "modal-profile": HTMLModalProfileElement;
        "modal-scoring": HTMLModalScoringElement;
        "modal-survivor-scoring": HTMLModalSurvivorScoringElement;
        "modal-tournament-detail": HTMLModalTournamentDetailElement;
        "modal-tournament-edit": HTMLModalTournamentEditElement;
    }
}
declare namespace LocalJSX {
    interface AppAdmin {
        "auth"?: Auth;
        "db"?: Firestore;
    }
    interface AppHome {
        "auth"?: AuthService;
        "db"?: DatabaseService;
        "onDbdModalOpen"?: (event: CustomEvent<{
    component: string;
    componentProps?: any;
    cssClass?: string;
  }>) => void;
        "tournamentId"?: any;
    }
    interface AppList {
    }
    interface AppOauth {
        "discord"?: boolean;
    }
    interface AppTournament {
        "auth"?: AuthService;
        "db"?: DatabaseService;
        "onDbdModalOpen"?: (event: CustomEvent<any>) => void;
        "onDbdPopoverOpen"?: (event: CustomEvent<any>) => void;
        "onFireenjinShare"?: (event: CustomEvent<any>) => void;
        "status"?: TournamentStatus;
        "tournamentId"?: string;
        "userId"?: string;
    }
    interface AppTournamentList {
    }
    interface DbdTournamentCard {
        "dateTime"?: string;
        "href"?: string;
        "image"?: string;
        "name"?: string;
        "rules"?: string[];
        "status"?: TournamentStatus;
        "timestamp"?: Date;
    }
    interface DbdgroupRouter {
    }
    interface ModalLogin {
        "auth"?: AuthService;
    }
    interface ModalProfile {
        "auth"?: AuthService;
        "db"?: DatabaseService;
        "documentId"?: string;
        "headerTitle"?: string;
        "onDbdLogin"?: (event: CustomEvent<any>) => void;
        "onDbdModalClose"?: (event: CustomEvent<any>) => void;
        "userId"?: string;
    }
    interface ModalScoring {
        "onDbdModalClose"?: (event: CustomEvent<any>) => void;
        "tournament"?: Tournament;
        "tournamentId"?: string;
    }
    interface ModalSurvivorScoring {
        "onDbdModalClose"?: (event: CustomEvent<any>) => void;
        "tournament"?: Tournament;
        "tournamentId"?: string;
    }
    interface ModalTournamentDetail {
        "db"?: DatabaseService;
        "onDbdModalClose"?: (event: CustomEvent<any>) => void;
        "rules"?: string[];
        "tournament"?: Tournament;
        "tournamentId"?: string;
    }
    interface ModalTournamentEdit {
        "mainTitle"?: "Create Tournament";
        "onDbdModalClose"?: (event: CustomEvent<any>) => void;
        "tournament"?: Tournament;
        "tournamentId"?: string;
    }
    interface IntrinsicElements {
        "app-admin": AppAdmin;
        "app-home": AppHome;
        "app-list": AppList;
        "app-oauth": AppOauth;
        "app-tournament": AppTournament;
        "app-tournament-list": AppTournamentList;
        "dbd-tournament-card": DbdTournamentCard;
        "dbdgroup-router": DbdgroupRouter;
        "modal-login": ModalLogin;
        "modal-profile": ModalProfile;
        "modal-scoring": ModalScoring;
        "modal-survivor-scoring": ModalSurvivorScoring;
        "modal-tournament-detail": ModalTournamentDetail;
        "modal-tournament-edit": ModalTournamentEdit;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-admin": LocalJSX.AppAdmin & JSXBase.HTMLAttributes<HTMLAppAdminElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-list": LocalJSX.AppList & JSXBase.HTMLAttributes<HTMLAppListElement>;
            "app-oauth": LocalJSX.AppOauth & JSXBase.HTMLAttributes<HTMLAppOauthElement>;
            "app-tournament": LocalJSX.AppTournament & JSXBase.HTMLAttributes<HTMLAppTournamentElement>;
            "app-tournament-list": LocalJSX.AppTournamentList & JSXBase.HTMLAttributes<HTMLAppTournamentListElement>;
            "dbd-tournament-card": LocalJSX.DbdTournamentCard & JSXBase.HTMLAttributes<HTMLDbdTournamentCardElement>;
            "dbdgroup-router": LocalJSX.DbdgroupRouter & JSXBase.HTMLAttributes<HTMLDbdgroupRouterElement>;
            "modal-login": LocalJSX.ModalLogin & JSXBase.HTMLAttributes<HTMLModalLoginElement>;
            "modal-profile": LocalJSX.ModalProfile & JSXBase.HTMLAttributes<HTMLModalProfileElement>;
            "modal-scoring": LocalJSX.ModalScoring & JSXBase.HTMLAttributes<HTMLModalScoringElement>;
            "modal-survivor-scoring": LocalJSX.ModalSurvivorScoring & JSXBase.HTMLAttributes<HTMLModalSurvivorScoringElement>;
            "modal-tournament-detail": LocalJSX.ModalTournamentDetail & JSXBase.HTMLAttributes<HTMLModalTournamentDetailElement>;
            "modal-tournament-edit": LocalJSX.ModalTournamentEdit & JSXBase.HTMLAttributes<HTMLModalTournamentEditElement>;
        }
    }
}

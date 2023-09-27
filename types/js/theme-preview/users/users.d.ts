import '@supersoniks/concorde/core';
import { LitElement } from 'lit';
declare const users_base: (new (...args: any[]) => import("@supersoniks/concorde/core/mixins/Subscriber").SubscriberInterface<import("@supersoniks/concorde/core/_types/types").CoreJSType>) & typeof LitElement;
export declare class users extends users_base {
    static styles: any[];
    render(): import("lit-html").TemplateResult<1>;
}
declare const user_base: (new (...args: any[]) => import("@supersoniks/concorde/core/mixins/Subscriber").SubscriberInterface<import("@supersoniks/concorde/core/_types/types").CoreJSType>) & typeof LitElement;
export declare class user extends user_base {
    static styles: any[];
    avatar: string;
    first_name: string;
    email: string;
    last_name: string;
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};

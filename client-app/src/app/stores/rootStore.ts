import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import { createContext } from "react";
import { configure } from "mobx";
import commonStore from "./commonStore";
import ModalStore from "./modalStore";

configure({ enforceActions: "always" });

export class RootStore {
  activityStore: ActivityStore;
  userStore: UserStore;
  commonStore: commonStore;
  modalStore: ModalStore;
  constructor() {
    this.activityStore = new ActivityStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new commonStore(this);
    this.modalStore = new ModalStore(this);
  }
}

export const RootContextStore = createContext(new RootStore());

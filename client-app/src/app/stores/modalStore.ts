import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class ModalStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable.shallow Modal = {
    open: false,
    body: null,
  };

  @action OpenModal = (content: any) => {
    this.Modal = {
      open: true,
      body: content,
    };
  };

  @action CloseModal = () => {
    this.Modal = {
      open: false,
      body: null,
    };
  };
}

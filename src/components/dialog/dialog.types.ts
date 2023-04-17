import { Companion } from "../companion/companion";
import { MessageActionsArea } from "../messageActionsArea/messageActionsArea";
import { MessageBlock } from "../messageBlock/messageBlock";

export type DialogPropsType = {
  companion: Companion;
  items: MessageBlock[];
  actions: MessageActionsArea;
};

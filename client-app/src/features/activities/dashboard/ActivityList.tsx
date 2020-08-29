import React, { useContext, Fragment } from "react";
import { Item, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { ActivityListItem } from "./ActivityListItem";
import { RootContextStore } from "../../../app/stores/rootStore";
import {format} from 'date-fns';

const ActivityList: React.FC = () => {
  const rootStore = useContext(RootContextStore);
  const { computedByDate } = rootStore.activityStore;
  return (
    <Fragment>
      {computedByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Label size="large" color="blue" content={format(new Date(group), "eeee do MMMM")} />
          <Item.Group divided>
            {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
          </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  );
};
export default observer(ActivityList);

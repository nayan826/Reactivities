import React, { useEffect, useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { RootContextStore } from "../../../app/stores/rootStore";
const ActivityDashborad: React.FC = () => {
  const rootStore = useContext(RootContextStore);
  const { loadActivities, loadingInitial } = rootStore.activityStore;
  useEffect(() => {
    loadActivities();
  }, [loadActivities]);
  if (loadingInitial)
    return <LoadingComponent content="Loading activities..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>Activities Filters</h1>
      </Grid.Column>
    </Grid>
  );
};
export default observer(ActivityDashborad);

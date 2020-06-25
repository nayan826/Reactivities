import React, { useEffect, Fragment, useContext } from "react";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import ActivityDashborad from "./../../features/activities/dashboard/Activitydashborad";
import { LoadingComponent } from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);
  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashborad />
      </Container>
    </Fragment>
  );
};

export default observer(App);

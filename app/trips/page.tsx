import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";

import getReservations from "../actions/getReservation";
import getCurrentUser from "../actions/getCurrentUser";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized Operations"
        subtitle="Please login to your account!"
      />
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length == 0) {
    <EmptyState
      title="No Trips Found"
      subtitle="Looks like you have not reserve any trips"
    />;
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;

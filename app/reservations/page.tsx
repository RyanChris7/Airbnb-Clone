import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ReservationClient from "./ReservationClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized Operations"
        subtitle="Please login to an account"
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser?.id,
  });

  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No Reservation Found"
        subtitle="No reservations on your property"
      />
    );
  }

  return (
    <ReservationClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationPage;

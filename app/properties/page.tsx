import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized Operations"
        subtitle="Please login to your account!"
      />
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No Properties Found"
        subtitle="Looks like you have not rent any properties"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;

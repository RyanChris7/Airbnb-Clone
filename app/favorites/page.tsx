import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorite";

const FavoritePage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavorites();

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No Favorites Found"
        subtitle="You have not select any favorite properties"
      />
    );
  }

  return <FavoriteClient listings={listings} currentUser={currentUser} />;
};

export default FavoritePage;

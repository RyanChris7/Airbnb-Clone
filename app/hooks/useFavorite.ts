import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { SafeUser } from "../types";

import userLoginModal from "./useLoginModal";

interface UseFavoriteProps {
  currentUser?: SafeUser | null;
  listingId: string;
}

const useFavorite = ({ currentUser, listingId }: UseFavoriteProps) => {
  const router = useRouter();
  const loginModal = userLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something Went Wrong");
      }
    },
    [hasFavorited, currentUser, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;

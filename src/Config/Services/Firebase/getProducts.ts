import {
  collection,
  getDocs,
  query,
  Timestamp,
  limit,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const getProducts = async (
  Collection: string,
  field: string,
  value: any,
  startIndex: number
) => {
  try {
    const q = query(
      collection(db, Collection),
      // where("parentUrl", "==", "dothanh"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    const data: Array<any> = [];

    querySnapshot.forEach((doc: any) => {
      const createdAt = doc.data().createdAt.toDate();
      const serverTime = Timestamp.now().toDate();

      const timeDiff = serverTime.getTime() - createdAt.getTime();
      const daysDiff = Math.round(timeDiff / 86400000);

      data.push({ id: doc.id, ...doc.data(), daysSinceCreation: daysDiff });
    });

    return data;
  } catch (error) {
    console.error("Error getting documents by field: ", error);
  }
};

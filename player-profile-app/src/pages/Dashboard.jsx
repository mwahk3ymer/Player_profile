import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Dashboard() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "players", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPlayer(docSnap.data());
      }
    };

    fetchPlayer();
  }, []);

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: {player.name}</p>
      <p>Position: {player.position}</p>
      <p>Jersey: {player.jerseyNumber}</p>
      <p>Age: {player.age}</p>
    </div>
  );
}

export default Dashboard;
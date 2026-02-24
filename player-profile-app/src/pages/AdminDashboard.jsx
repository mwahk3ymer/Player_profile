import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function AdminDashboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const querySnapshot = await getDocs(collection(db, "players"));
      const playersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPlayers(playersData);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>All Players</h2>
      {players.map(player => (
        <div key={player.id}>
          <p>{player.name} - #{player.jerseyNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
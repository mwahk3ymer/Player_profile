import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function CompleteProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    position: "",
    jerseyNumber: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    await setDoc(doc(db, "players", user.uid), {
      ...form,
      role: "player"
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Complete Player Profile</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="position" placeholder="Position" onChange={handleChange} />
        <input name="jerseyNumber" placeholder="Jersey Number" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default CompleteProfile;
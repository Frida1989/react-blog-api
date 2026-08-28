import { useState, useEffect } from "react";

function UserInfo({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://dummyjson.com/users/${userId}`
      );

      const data = await response.json();

      setUser(data);
    }

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Laddar användarinformation...</p>;
  }

  return (
    <div className="user-info">
      <img
        src={user.image}
        alt={`Profilbild på ${user.username}`}
        width="80"
      />

      <div>
        <p><strong>Användarnamn:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Stad:</strong> {user.address.city}</p>
      </div>
    </div>
  );
}

export default UserInfo;
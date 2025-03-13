import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleRedirect}>Go to Dashboard</button>
    </div>
  );
}

export default Profile;
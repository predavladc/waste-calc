import { getCategorySelectedStates } from "../../State/calculator";
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      {JSON.stringify(getCategorySelectedStates())}
    </div>
  );
}

export default Profile;

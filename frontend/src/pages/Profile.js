function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150"
          alt=""
        />

        <h1>
          {user?.name}
        </h1>

        <p>
          {user?.email}
        </p>

        <button className="auth-btn">
          Edit Profile
        </button>

      </div>

    </div>

  );

}

export default Profile;
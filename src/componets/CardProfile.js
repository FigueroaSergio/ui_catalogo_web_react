function CardProfile({ user }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <strong>Identificacion</strong>
        <p className="card-text" id="user-id">
          {user.identification}
        </p>
        <strong>Name</strong>
        <p className="card-text" id="user-mail">
          {user.name}
        </p>
        <strong>Email</strong>
        <p className="card-text" id="user-mail">
          {user.email}
        </p>
        <strong>Perfil</strong>
        <p className="card-text" id="user-profile">
          {user.type}
        </p>
      </div>
    </div>
  );
}
export { CardProfile };

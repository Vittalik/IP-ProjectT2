export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
  
    {
      field: "password",
      headerName: "Password",
      width: 140,
    },
    {
      field: "role",
      headerName: "Role",
      width: 140,
    },
  ];
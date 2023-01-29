export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name_sponsor",
      headerName: "Name",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.name_sponsor}
          </div>
        );
      },
    },
    {
      field: "img_sponsor",
      headerName: "Image",
      width: 150,
    },
    {
      field: "link",
      headerName: "Link",
      width: 150,
    },    
    {
        field: "edition",
        headerName: "Edition",
        width: 130,
      },
  ];
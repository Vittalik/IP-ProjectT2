export const userColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "title",
      headerName: "Title",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "desc",
      headerName: "Description",
      width: 160,
    },
  
    {
      field: "img",
      headerName: "Image",
      width: 120,
    },
    {
      field: "date",
      headerName: "Date",
      width: 110,
    },
    {
      field: "uid",
      headerName: "UID",
      width: 50,
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
  ];
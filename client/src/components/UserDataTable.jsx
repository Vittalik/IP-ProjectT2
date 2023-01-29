import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../styles/datatablesource";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import "../styles/datatable_design.scss"
import axios from "axios";


const Datatable = () => {

  const [users, setUsers] = useState([])
  const location = useLocation();
  const navigate = useNavigate();

 useEffect(()=>{
    const fetchData = async ()=>{
    try{
        const res = await axios.get("/users")
        setUsers(res.data);
        console.log(res.data);
    }catch(err){
        console.log(err)
    }
    }
    fetchData();
},[])





  const handleDelete2 = async (id) => {
    setUsers(users.filter((item) => item.id !== id));
    try{
    await axios.delete(`/users/${id}`);
      navigate("/admin")
    }catch(error){
    console.error(error.response.data);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 141,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete2(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
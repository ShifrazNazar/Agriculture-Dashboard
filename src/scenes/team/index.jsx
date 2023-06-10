import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Stack from "@mui/material/Stack";
import {
  firestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "../../firebase";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

export default function UsersList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [team, setTeam] = useState({
    ID: "",
    name: "",
    age: "",
    phone: "",
    email: "",
    accessLevel: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeam((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store values in Firestore
      const collectionRef = collection(firestore, "team");
      await addDoc(collectionRef, team);
      console.log("Team data successfully stored in Firestore!");
      // Reset form values
      setTeam({
        ID: "",
        name: "",
        age: "",
        phone: "",
        email: "",
        accessLevel: "",
      });
      closeModal(); // Close the modal after submitting the form
      getUsers(); // Fetch the updated data after adding a new product
      showConfirmation(); // Show confirmation alert
    } catch (error) {
      console.error("Error storing access level data in Firestore:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(firestore, "team"));
    const tempArr = [];
    querySnapshot.forEach((doc) => {
      tempArr.push({ ...doc.data(), id: doc.id });
    });
    setRows(tempArr);
  };

  const handleChangePage = (params) => {
    setPage(params.page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const showConfirmation = () => {
    Swal.fire("Success!", "teams data stored in Firestore successfully.", "success");
  };

  const deleteApi = async (id) => {
    const userDoc = doc(firestore, "team", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    { field: "ID", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { accessLevel } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              accessLevel === "admin"
                ? colors.greenAccent[600]
                : accessLevel === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {accessLevel === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {accessLevel === "manager" && <SecurityOutlinedIcon />}
            {accessLevel === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {accessLevel}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Stack spacing={2} direction="row">
          <EditIcon
            style={{
              fontSize: "20px",
              color: "blue",
              cursor: "pointer",
            }}
            className="cursor-pointer"
            // onClick={() => editUser(params.id)}
          />
          <DeleteIcon
            style={{
              fontSize: "20px",
              color: "darkred",
              cursor: "pointer",
            }}
            onClick={() => {
              deleteUser(params.id);
            }}
          />
        </Stack>
      ),
    },
  ];

  return (
    <div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="ID"
              id="teamID"
              name="ID"
              value={team.ID}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Name"
              id="teamName"
              name="name"
              value={team.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Age"
              id="teamAge"
              name="age"
              value={team.age}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />

            <TextField
              fullWidth
              label="email"
              id="teamEmail"
              name="email"
              value={team.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Phone"
              id="teamPhone"
              name="phone"
              value={team.phone}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Access Level"
              id="teamAccessLevel"
              name="accessLevel"
              value={team.accessLevel}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Box m="20px">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Header
            title="Team List"
            subtitle="List of team for Future Reference"
          />
        </Typography>

        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          {" "}
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onPageSizeChange={handleChangeRowsPerPage}
            components={{ Toolbar: GridToolbar }}
            autoHeight
          />
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            onClick={openModal}
            sx={{ mt: 2 }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </div>
  );
}

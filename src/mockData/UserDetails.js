import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function createData(id, firstName, lastName, status) {
  return { id, firstName, lastName, status };
}

const rowsData = [
  createData('IDK101', 'Anu', 'P K', 'Active'),
  createData('IDK102', 'Ben', 'Thomas', 'Inactive'),
  createData('IDK103', 'Cathy', 'Smith', 'Active'),
  createData('IDK104', 'David', 'Jones', 'Inactive'),
  createData('IDK105', 'Eva', 'Brown', 'Active'),
];

export default function BasicTable() {
    // Load rows data from localStorage, if available, or use initial data
    const loadRowsFromLocalStorage = () => {
      const savedRows = localStorage.getItem('userRows');
      return savedRows ? JSON.parse(savedRows) : rowsData;
    };
    const [rows, setRows] = React.useState(loadRowsFromLocalStorage());
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState('');
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [formValues, setFormValues] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    status: '',
  });
  React.useEffect(() => {
    localStorage.setItem('userRows', JSON.stringify(rows));
  }, [rows]);

  
  const handleDialogOpen = (type, row = null) => {
    setDialogType(type);
    setSelectedRow(row);
    setFormValues(
      row || {
        id: '',
        firstName: '',
        lastName: '',
        status: '',
      }
    );
    setDialogOpen(true);
  };

 
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };


  const handleAction = () => {
    if (dialogType === 'Add') {
      setRows([...rows, formValues]);
    } else if (dialogType === 'Edit') {
      setRows(
        rows.map((row) => (row.id === selectedRow.id ? formValues : row))
      );
    } else if (dialogType === 'Delete') {
      setRows(rows.filter((row) => row.id !== selectedRow.id));
    }
    handleDialogClose();
  };

  return (
    <>
      {/* Table */}
      <TableContainer component={Paper}>
        <Table sx={{ Width: '97%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                <IconButton
                    onClick={() => handleDialogOpen('Add')}
                    color="success"
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDialogOpen('Edit', row)}
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                 
                 
                  <IconButton
                    onClick={() => handleDialogOpen('Delete', row)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{`${dialogType} User`}</DialogTitle>
        <DialogContent>
          {(dialogType === 'Add' || dialogType === 'Edit') && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="id"
                label="User ID"
                type="text"
                fullWidth
                value={formValues.id}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="status"
                label="Status"
                type="text"
                fullWidth
                value={formValues.status}
                onChange={handleInputChange}
              />
            </>
          )}
          {dialogType === 'Delete' && (
            <p>Are you sure you want to delete this user?</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAction} color="primary">
            {dialogType}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

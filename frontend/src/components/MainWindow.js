import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function addItemRequest() {
    // TODO: send data to backend
    const response = request("http://127.0.0.1:5000/uuid/set", 'POST', {"name": "test item"});
    console.log(response);
}

async function request(url='', method='', data={}) {
    const response = await fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

function MainWindow() {
    const [isAddItemDialogOpen, setAddItemDialogOpen] = React.useState(false);

    const handleAddItemDialogOpen = () => {
        setAddItemDialogOpen(true);
    };
  
    const handleAddItemDialogClose = () => {
        setAddItemDialogOpen(false);
    };

    const handleAddItemDialogSubmit = () => {
        addItemRequest();
        setAddItemDialogOpen(false);
    }

    return (
        <div>
            <Dialog open={isAddItemDialogOpen} onClose={handleAddItemDialogClose}>
                <DialogTitle>{"Add Item"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        variant="standard"
                    />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddItemDialogClose} 
                            color="primary" autoFocus>
                        Close
                    </Button>
                    <Button onClick={handleAddItemDialogSubmit} 
                            color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Button variant="contained" onClick={() => handleAddItemDialogOpen()}>Add Item</Button>
        </div>
    );
}

export default MainWindow;
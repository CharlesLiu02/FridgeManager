import * as React from 'react';
import Button from '@mui/material/Button';

function addItem() {
    console.log("add item")
}

function MainWindow() {
    return (
        <div>
            <Button variant="contained" onClick={() => addItem()}>Add Item</Button>
        </div>
    );
}

export default MainWindow;
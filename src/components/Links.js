import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 800,
        marginLeft: '200px',
        marginTop: '10px',
    }
});

const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'component', headerName: 'Component', width: 130 },
    { field: 'link', headerName: 'Link', width: 250 },
];

const rows = [
    { id: 1, component: "Keycaps", link: "www.google.com"},
];

export default function Links() {
    const classes = useStyles();

    return (
        <div style={{ margin: 'auto', width: '85%', marginLeft: '200px', marginTop: '50px', }}>
            <DataGrid autoHeight rows={rows} columns={columns} />
        </div>
    );
}
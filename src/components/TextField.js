import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

const Text = () => (
 <MuiThemeProvider>
    <TextField
      hintText="Hint Text"
    />
	</MuiThemeProvider>
);

export default Text;
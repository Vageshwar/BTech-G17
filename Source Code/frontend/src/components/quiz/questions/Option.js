import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Box from '@material-ui/core/Box';

const defaultProps = {
        bgcolor: 'background.paper',
        m: 1,
        p:1,
        borderColor: 'text.primary',
        marginLeft:10,
        cellPadding:5,
      };
export default function Option(props) {
  
  var option=props.value[0].toUpperCase() + props.value.slice(1,props.value.length);
  console.log("Options",props.answer);
  return (
        <Box border={1} {...defaultProps}>
          <FormControlLabel value={option} control={<Radio checked={option===props.answer} onClick={(eve)=> props.onChange(eve.target.value)} />} label={option+"\t" }/>
        </Box>
  );
}
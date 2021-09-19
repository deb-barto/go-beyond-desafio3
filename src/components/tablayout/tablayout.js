import * as React from 'react';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup';
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import { styled } from '@material-ui/core/styles';
import './tablyout.css'
import CardHc from '../cards/hc'
import CardGb from '../cards/gobeyond'
import CardJS from '../cards/funy'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    borderRadius:"10px",
    width: "160px",
    margin:"0px",

    '&.Mui-selected':{
      backgroundColor: "black",
    },
    '&.Mui-disabled': {
      border:"none",
      borderRadius:"10px",
    },
    '&:not(:first-of-type)': {
      border:"none",
      borderRadius:"10px",
    },
    '&:first-of-type': {
      border:"none",
      borderRadius:"10px",
    },
}
}));

export default function TabLayout() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Tabs> 
    <div className="shortcontainer"> 
    <StyledToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
    >
       <ToggleButton value="GB" ><Tab><button className="btn">🚀 Go Beyond</button></Tab></ToggleButton>
       <ToggleButton value="HC"><Tab><button className="btn">👊 Hiring Coders</button></Tab></ToggleButton>
       <ToggleButton value="JS"><Tab><button className="btn">🛸Projects Js</button></Tab></ToggleButton>
    </StyledToggleButtonGroup>
    </div> 
    <Panel><CardGb/></Panel>
    <Panel><CardHc/></Panel>
    <Panel><CardJS/></Panel>

    </Tabs>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux';
import { PRICE } from '../../Redux/Actions/actions'
import { useSelector } from 'react-redux'



const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const min = useSelector(state => state.MaxMin.min);
  const max = useSelector(state => state.MaxMin.max);
  const classes = useStyles();
  const [value, setValue] = React.useState([min - 1, max + 1]);
  const dispatch = useDispatch();


  const handleChange = (event, newValue) => {
    setValue(newValue);

    dispatch({
      type: PRICE,
      payload: { price: value }
    })
  };


  return (
    <div className={classes.root}>

      <Typography id="range-slider" gutterBottom>
        Price range:
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={min - 1}
        max={max + 1}
      />
    </div>
  );
}

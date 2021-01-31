import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    flaggedAttempted: {
        height: 50,

        borderRadius: 10,
        background: 'linear-gradient(180deg, rgba(255,0,0,1) 20%,white 20%, white 75%, #07b257 75%)'
    },
    flaggedUnattempted: {
        height: 50,

        borderRadius: 10,
        background: 'linear-gradient(180deg, rgba(255,0,0,1) 20%,white 20%, white 75%, rgba(195,195,195,1) 75%)'
    },
    attempted: {
        height: 50,

        borderRadius: 10,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 75%, #07b257 25%)'
    },
    unattempted: {
        height: 50,

        borderRadius: 10,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 75%, rgba(195,195,195,1) 25%)'
    },
    currentQue: {
        height: 50,

        border: '1px solid black',
        borderRadius: 10,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 75%, rgb(0,0,0) 25%)'
    }

}));

const QuestionIcon = (props) => {
    const classes = useStyles();
    const No = props.qNO;
    const status = props.status;
    const flagged = props.flagged;
    if(status === 'current')
        return (<Button variant="contained" className={classes.currentQue}>{No}</Button>);
    if(flagged){
        if(status === 'attempted')
            return (<Button onClick={props.onChange} variant="contained" className={classes.flaggedAttempted}>{No}</Button>); 
        else
            return (<Button onClick={props.onChange} variant="contained" className={classes.flaggedUnattempted}>{No}</Button>);
    }
    else{
        if(status === 'attempted')
            return (<Button onClick={props.onChange} variant="contained" className={classes.attempted}>{No}</Button>);
        else
            return (<Button onClick={props.onChange} variant="contained" className={classes.unattempted}>{No}</Button>);
    }
}

export default QuestionIcon;
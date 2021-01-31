import QuestionIcon  from './QuestionIcon';
import Grid from '@material-ui/core/Grid';

const QuestionsPanel = (props) => {

    const updateNav = props.updateNav;
    const currentQ = props.current;
    const qNo = props.qNo;
    const attemptedQ = props.attemptedQ;
    const flaggedQ = props.flagged;
    var QIcons = []; 
    var flag = false;
    for(let i=1; i<=qNo; i++){
        if(currentQ === i )
        QIcons.push(<Grid item xs={2} ><QuestionIcon qNO={i} status='current'/></Grid>)
        else {
        flaggedQ.includes(i) ? flag = true: flag = false;
        attemptedQ.includes(i) ? QIcons.push(<Grid item xs={2} ><QuestionIcon value={i} onChange={()=> updateNav(i)} qNO={i} status='attempted' flagged = {flag}/></Grid>)
        : QIcons.push(<Grid item xs={2} ><QuestionIcon value={i} onChange={()=>updateNav(i)} qNO={i} status='unattempted' flagged = {flag}/></Grid>);
        }
    }
    return(
        <div>
            <Grid container spacing={1}>
                    {QIcons}
            </Grid>
        </div>
    );
}

export default QuestionsPanel;
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Option from './Option';
import FlagIcon from '@material-ui/icons/Flag';
import RadioGroup from '@material-ui/core/RadioGroup';


export default function QuestionBody(props) {
  const currentQ = props.currentQ;
  var flaggedQ = props.flagged;
  var Qno = props.no;
  var no="Q." + props.no;
  var Q=no+"\t" + currentQ.question;
  var options= currentQ.options;
  const userChoice = props.userChoice;
  console.log("Question Body",userChoice);
  return (
    <>
      <CardHeader
        avatar={
          flaggedQ.includes(Qno)?
            <Button  onClick={props.onFlagged}>{<FlagIcon style={{color: 'red'}}/>}</Button>:<Button onClick={props.onFlagged}>{<FlagIcon />}</Button>
        }
        title={<Typography gutterBottom variant="h5" component="h2">
        {Q}
        </Typography>}
      />
      <CardActions>
        <RadioGroup onChange={props.onAttempted}>
          {
            options.map((e)=>
            <Option onChange={props.updateUserChoice} value={e.qs} answer={userChoice}/>)
          }
          </RadioGroup>
      </CardActions>

    </>
  );
}
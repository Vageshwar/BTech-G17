import QuizHeader from './components/quiz/QuizHeader';
import {Grid, Card, CardActions, Button } from '@material-ui/core';
import QuestionsPanel from './components/quiz/rightPanel/RightPanel.js';
import QuestionBody, {  } from "./components/quiz/questions/QuestionBody";
import Countdown from 'react-countdown';
import questionBank from './service/questions.js';
import userData from './service/userData.js';
import {  useState, useEffect } from 'react';

function App() {

		// var userChoice = {
		// 	prn: userData.prn,
		// 	startDate : 'dd-mm-yyy',
		// 	choices: {},
		// 	current: currentQ,
		// }
		useEffect(() => {
			   setStartDate(Date.now());
		  }, []);
	// 	const  blackListedKeys = ['Control', 'Alt', 'Tab']
	// 	window.addEventListener('keydown', function (event) {

	// 		// if the keyCode is 16 ( shift key was pressed )
		
	// 			// prevent default behaviour
	// 			if(blackListedKeys.includes(event.key)){
	// 				event.preventDefault();
	// 			return false;
	// 			}
				
		
				
			
		
	// })
	var [attempted, updateAttempted] = useState([]);
	const [startDate,setStartDate] = useState(Date.now());
	const [flagged, updateFlagged] = useState([]);
	const [currentQ, updateCurrentQ] = useState(1);
	var endDate = startDate + questionBank.duration;
	const handleAttempted = () => {
		updateAttempted(
			arr => [...arr, currentQ]
			
		);
		attempted = [...new Set(attempted)];
		console.log('AttemptedArray',attempted);
	}
	const handleFlagged = () => {
		if(!flagged.includes(currentQ))
			updateFlagged(
				arr => [...arr, currentQ]
			)
		else{
			var temp = [...flagged]
			temp.splice(temp.indexOf(currentQ));
			updateFlagged(
				temp
			)
		}
		// console.log('FlaggedArray',flagged);
		// console.log('CurrentQ',currentQ);
	}
	const handlePrev = () => {
		updateCurrentQ(currentQ-1);
	}
	const handleNext = () => {
		updateCurrentQ(currentQ+1);
	}

	const handleUserChoice = (val) => {

		updateUserChoice({...userChoices, [currentQ]: val})

		// console.log(JSON.stringify(userChoices));
	}

	var [userChoices, updateUserChoice] = useState({});

  return (
    <div>
      <Grid container justify={'center'} spacing={2}>
        <Grid item xs={12} >
        	<QuizHeader prn={userData.prn} status="Valid"/>
        </Grid>
		<Grid item container spacing={2} xs={12}>
			<Grid item xs={8}>
				<Card>
				<QuestionBody onFlagged={handleFlagged} onAttempted={handleAttempted} currentQ={questionBank.questions[currentQ - 1]} no = {currentQ} flagged={flagged} userChoice={userChoices[currentQ.toString()]} updateUserChoice={handleUserChoice}/>
				<CardActions>
		
			{
			(currentQ !== 1) ?
				<Button variant="contained" size="small" color="primary" href="#" onClick={handlePrev}>
				Prev
			</Button>:<></>
		  }
		  {currentQ < questionBank.questions.length?<Button  variant="contained" size="small" color="primary" href="#" onClick={handleNext}>
          Next
        </Button>:<></>}
        
      </CardActions>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Grid item xs={12} container>
					<QuestionsPanel updateNav={(val)=> updateCurrentQ(val) } qNo={questionBank.questions.length} attemptedQ={attempted} flagged={flagged} current={currentQ}/>
				</Grid>
				<Grid item xs={12}>
				<Button onClick={()=>{alert(JSON.stringify(userChoices))}} variant="contained" style={{background:'green',color: 'white', marginTop: 10}}>
          Submit
        </Button>
				</Grid>
				<Grid item xs={8}>
				<Countdown date={endDate} />
				</Grid>
			</Grid>
        </Grid>
		<Grid item xs={12} >
        	<h1>Group 17</h1>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;

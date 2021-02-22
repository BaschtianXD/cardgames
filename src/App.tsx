import React from 'react';
import './App.css';
import { AppBar, Button, Card, CardActions, CardContent, CardHeader, Container, createStyles, CssBaseline, Divider, Grid, makeStyles, Paper, Theme, Toolbar, Typography } from '@material-ui/core';
import { Route, Switch as RouterSwitch, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		gameCard: {
			height: "100%"
		},
		mainBox: {
			margin: theme.spacing(2)
		}
	})
)

const games = [
	{
		name: "The Voting Game",
		description: "Who do your friends think could be the leader of a cult? Find out this one and many more funny facts about what your friends think in the Voting Game."
	},
	{
		name: "Cards Against Humanity",
		description: "Cards Against Humanity is a party game for horrible people. Unlike most of the party games you've played before, Cards Against Humanity is as despicable and awkward as you and your friends. The game is simple. Each round, one player asks a question from a black card, and everyone else answers with their funniest white card."
	},
	{
		name: "Uno",
		description: "Come on, it's Uno"
	},
	{
		name: "Secret Hitler",
		description: "TODO"
	}
]

function App() {

	const history = useHistory()

	const goToRoute = (path: string) => {
		return () => { history.push(path) }
	}

	const classes = useStyles()

	return (
		<div>
			<CssBaseline />
			<Container maxWidth="lg">
				<AppBar position="sticky">
					<Toolbar>
						<Typography variant="h6">
							Cardgames
						</Typography>
					</Toolbar>
				</AppBar>
				<RouterSwitch>
					<Route path="/uno">
						<Typography>Uno?</Typography>
						<Button variant="contained" onClick={goToRoute("/")}>Back to Main Menu</Button>
					</Route>
					<Route path="/">
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant="h3" align="center">Here are the games you can play</Typography>
							</Grid>
							{games.map((game, index) => (
								<Grid item xs={12} md={6} lg={4} >
									<Card>
										<CardHeader
											title={<Typography variant="h4" align="center">{game.name}</Typography>}
										/>
										<CardContent>
											<Typography variant="body1">{game.description}</Typography>
										</CardContent>
										<CardActions>
											<Button variant="text">More Information</Button>
											<Button variant="text">Play</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Route>
				</RouterSwitch>
			</Container >
		</div >
	);
}

export default App;

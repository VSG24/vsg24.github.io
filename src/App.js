import {
	Switch,
	Route,
	Link as RouterLink, HashRouter
} from "react-router-dom";
import Home from './pages/home/index.jsx';
import Contact from './pages/contact/index.jsx';
import Resume from './pages/resume/index.jsx';
import {Container, Grid, Button, makeStyles, MuiThemeProvider} from "@material-ui/core";
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import Page from "./components/Page";

const theme = createMuiTheme({
	palette: {
		primary: { main: '#000' },
	},
});

const useStyles = makeStyles({
	linksContainer: {
		textAlign: 'center'
	}
});

const education = [
	{
		date: 'Sep 2014 - Feb 2019',
		title: 'Azad University of Karaj - Iran',
		subtitle: 'Bachelor of Science in Information Technology (B.Sc IT)'
	}
];

const work = [
	{
		date: 'Jan 2017 - Jan 2018',
		title: 'Full Stack Developer',
		subtitle: 'Armandar Sina Engineering Co'
	},
	{
		date: 'Aug 2018 - Jan 2020',
		title: 'Full Stack Developer',
		subtitle: 'Badian Andishe'
	},
	{
		date: 'Feb 2021 - Current',
		title: 'Front-end Developer',
		subtitle: 'Sarvehana Psychological Research Co'
	}
];

const volunteer = [
	{
		date: 'Oct 2016 - Feb 2018',
		title: 'Full Stack Developer',
		subtitle: 'UNIVER30t - Educational content sharing startup'
	},
	{
		date: 'Dec 2017 - Jul 2018',
		title: 'Full Stack / Mobile Developer',
		subtitle: 'veezee music - Open source cross-platform music streamer'
	}
];

export default function App() {
	const classes = useStyles();
	return (
		<MuiThemeProvider theme={theme}>
			<HashRouter>
				<Container>
					<Grid component="nav"
						  container
						  direction="row"
						  justify="center"
						  alignItems="center"
						  style={{margin: "1rem 0"}}>
						<Grid item xs={false} xl />
						<Grid className={classes.linksContainer} item xs={12} xl={2} style={{textAlign: "right", padding: ".5rem 1rem"}}>
							<Button fullWidth color="primary" component={RouterLink} to={"/"}>Home</Button>
						</Grid>
						<Grid className={classes.linksContainer} item xs={12} xl={2} style={{textAlign: "right", padding: ".5rem 1rem"}}>
							<Button fullWidth color="primary" component={RouterLink} to={"/resume"}>Resume</Button>
						</Grid>
						<Grid className={classes.linksContainer} item xs={12} xl={2} style={{textAlign: "right", padding: ".5rem 1rem"}}>
							<Button fullWidth color="primary" component={RouterLink} to={"/contact"}>Contact</Button>
						</Grid>
						<Grid item xs={false} xl />
					</Grid>

					<br />

					<Switch>
						<Route exact path="/">
							<Page title="Home"><Home education={education} work={work} volunteer={volunteer} /></Page>
						</Route>
						<Route path="/resume">
							<Page title="Resume"><Resume /></Page>
						</Route>
						<Route path="/contact">
							<Page title="Contact"><Contact /></Page>
						</Route>
					</Switch>

					<Route exact path="/(|resume)" render={() => (
						<Grid className="MuiPaper-rounded" component="footer"><div>Last update: 2021/06/22</div></Grid>
					)} />
				</Container>
			</HashRouter>
		</MuiThemeProvider>
	);
}

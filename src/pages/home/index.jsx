import {Divider, Grid} from "@material-ui/core";
import './index.css';
import TimelineItem from "../../components/TimelineItem.jsx";
import Description from "../../components/Description";

export default function Home(props) {
	return (
		<Grid container direction="column">
			<Grid container direction="row">
				<Grid item xs={12}>
					<Description />
				</Grid>
			</Grid>
			<Grid item style={{margin: "4rem 0"}}>
				<h2 className="timeline-group-title">Education</h2>
				<TimelineItem list={props.education} />
			</Grid>
			<Divider />
			<Grid item style={{margin: "4rem 0"}}>
				<h2 className="timeline-group-title">Work</h2>
				<TimelineItem subStyle={{color: 'red', fontWeight: '800'}} list={props.work} />
			</Grid>
			<Divider />
			<Grid item style={{margin: "4rem 0"}}>
				<h2 className="timeline-group-title">Volunteer Experience</h2>
				<TimelineItem subStyle={{color: 'red', fontWeight: '800'}} list={props.volunteer} />
			</Grid>
		</Grid>
	);
}

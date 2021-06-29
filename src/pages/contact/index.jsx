import {Divider, Grid, makeStyles} from "@material-ui/core";
import SocialLinks from "../../components/SocialLinks";

const useStyles = makeStyles({
	email: {
		fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
		fontWeight: 800,
		display: "block",
		marginTop: "1rem"
	}
});

export default function Contact(props) {
	const classes = useStyles();
	return (
		<>
			<Divider />
			<Grid container direction="column">
				<Grid item>
					<h2 className="timeline-group-title">Contact</h2>
					<SocialLinks />
					<br />
					<p>
						You can contact me through above links or you can reach me by mail:
						<span className={classes.email}>vahid.a1996 at gmail.com</span>
					</p>
				</Grid>
			</Grid>
		</>
	);
}

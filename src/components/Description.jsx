import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import styles from './Description.module.css';
import SocialLinks from "./SocialLinks";

export default function Description() {
	return (
		<Card style={{boxShadow: "rgb(195 195 195) 0px -4px 20px 0px"}} className={styles.root}>
			<Grid container direction="row">
				<Grid item xl md xs={12} className={styles.content}>
					<CardContent className={styles.cardContent}>
						<Typography className={styles.title} color="textSecondary" gutterBottom>
							Hello, I'm
						</Typography>
						<Typography style={{fontWeight: "bold"}} variant="h4" component="h1">
							Vahid Amiri Motlagh
						</Typography>
						<Typography className={styles.pos}  variant="h5" color="textSecondary">
							A Software Engineer
						</Typography>
						<Typography className={styles.description} variant="body1" component="p">
							I'm a software developer currently living and working in Karaj (Iran).
							I like working with latest technologies available in the mobile and web development scene.
							I was born in June 1996. I can speak Persian (native) and also English (professional working proficiency).
							I'm an active member of Stackoverflow where I try to be a decent contributor by asking and answering interesting and challenging questions in diverse topics.
							<SocialLinks />
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xl={4} md={4} xs={12} className={styles.imageContainer}>
					<img className={styles.image} src="https://avatars.githubusercontent.com/u/7500363?v=4" alt="Vahid Amiri Motlagh" />
				</Grid>
			</Grid>
		</Card>
	);
}

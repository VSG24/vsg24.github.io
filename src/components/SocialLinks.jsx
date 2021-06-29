import styles from "./SocialLinks.module.css";
import stackoverflowIcon from "../assets/stackoverflow.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

export default function SocialLinks() {
	return (
		<span>
			<a href="https://stackoverflow.com/users/5173926/vahid-amiri?tab=profile" target="_blank" rel="noreferrer" className={styles.socialIcons}><img src={stackoverflowIcon} alt="Stackoverflow" /></a>
			<a href="https://github.com/vsg24" target="_blank" rel="noreferrer" className={styles.socialIcons}><img src={github} alt="Github" /></a>
			<a href="https://linkedin.com/in/vsg24" target="_blank" rel="noreferrer" className={styles.socialIcons}><img src={linkedin} alt="Linkedin" /></a>
			<a href="https://instagram.com/vsg24" target="_blank" rel="noreferrer" className={styles.socialIcons}><img src={instagram} alt="Instagram" /></a>
		</span>
	);
}

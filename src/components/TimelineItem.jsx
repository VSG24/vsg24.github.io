export default function TimelineItem(props) {
	return (
		<>
			{props.list.map((x, index) => (
				<div className="timeline-container" key={index}>
					<div className="timeline-date">{x.date}</div>
					<div className="timeline-title">{x.title}</div>
					<div style={props.subStyle} className="timeline-sub">{x.subtitle}</div>
				</div>
			))}
		</>
	);
}

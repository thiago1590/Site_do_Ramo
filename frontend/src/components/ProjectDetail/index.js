import React from "react";
import styles from "./Modal.module.scss";

export function ProjectDetail({ project }) {
	return (
		<div className={styles.main}>
			<div className={styles.imageHolder}>
				<img src={project.imageURL}/>
			</div>

			<div className={styles.projectDescription}>
				<strong> {project.name} </strong>
				<p> {project.description} </p>
				
				{project.ended ? (
					<span>Status: <strong>Finalizado</strong></span>
				) : (
					<span>Status: <strong>Em Andamento</strong></span>
				)
				}

				<span>Membros</span>
				
				<div className={styles.members}>
					{ project.members.split(",").map((member, idx) => {
						return (
							<div className={styles.memberHolder} key={idx}>{member}</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}
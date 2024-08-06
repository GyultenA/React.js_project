/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { getTeamById } from "../../../api/teamService";
import styles from './TeamDetails.module.css'


export default function TeamDetails () {
    const [teamDetails, setDetails] = useState([]);

    const [showDetails, setShowDetails] = useState(true);

    const {teamId} = useParams();


    useEffect(() => {
        if (teamId) {
            getTeamById(teamId)
                .then((data) => {
                    setDetails(data);

                })
                .catch((error) => {
                    console.error(`Error fetching review:'${error.message}`);


                });
        }
    }, [teamId]);

    const onClose = () => {
        setShowDetails(false);
    }



    return (
        <>
 
 <article className={styles.details}>
            <h3>{teamDetails.name}</h3>
            <p> occupation: {teamDetails.occupation}</p>
            <div>
                <img src={teamDetails.imageUrl} />
            </div>
            <p>{teamDetails.description}</p>

          
        </article>

        </>
    )
}


import { useEffect, useState } from "react";

import Service from "../service/Service";
import Food from "../food/Food";
import * as teamService from "../../api/teamService";
import TeamList from "./team-list/TeamList";

export default function Team() {
  const [teams, setTeam] = useState([]);

  useEffect(() => {
    teamService.getAllTeam()
      .then(result => setTeam(result))
      .catch(err => console.log(err))
  }, []);

  console.log(teams.length)

  //{teams.map(team => <TeamList key={team._id} {...team} />)}

  return (

    <>
      <div className="container-fluid py-5" style={{ marginBottom: "600px" }}>
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary text-uppercase">Team Members</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Qualified Pets Care Professionals
            </h1>
          </div>
          <div
            className="owl-carousel team-carousel position-relative owl-loaded owl-drag"
            style={{ paddingRight: 25 }}
          >


            <div
              className="owl-item" 
              style={{ width: "120%", marginRight: 45, display: "flex", 
                justifyContent: "flex-start", gap: "50px", }}
            >

              {teams.map(team => <TeamList key={team._id} {...team} />)}



            </div>
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1316px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 4277
                }}
              >












              </div>
              <div className="owl-nav">
                <div className="owl-prev">
                  <i className="bi bi-arrow-left"></i>
                </div>
                <div className="owl-next">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Food />
    </>
  )
}
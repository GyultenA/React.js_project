import TeamList from "./team-list/TeamList";

export default function Team(){
    return(
        <div className="container-fluid py-5">
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
                        className="owl-carousel team-carousel position-relative"
                        style={{ paddingRight: 25 }}
                    >
                       
                       <TeamList />
                        
                      
                       
                    </div>
                </div>
            </div>
    )
}
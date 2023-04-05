import "./gallery.css"
import { Link } from "react-router-dom"

const Gallery = ({crewMembers}) => {

    

    return(
        <div className="gallery-page">
            <div className="members-container">
                {crewMembers && crewMembers.length > 0?
                    crewMembers.map((member, index) => {
                        return(
                            <div className="member-card">
                                <h2>{member.name}</h2>
                                <p>{member.species}</p>
                                <p>{member.role}</p>
                                <Link to={`/editing/${member.id}`}>Edit Crewmember</Link>
                            </div>
                        )
                    })
                    :
                    ""
                } 
            </div>
        </div>
    )
}

export default Gallery
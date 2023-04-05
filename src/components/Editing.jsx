import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../client"
import "./editing.css"

const Editing = ({crewMembers}) => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [role, setRole] = useState()

    useEffect(() => {

        if(crewMembers && crewMembers.length > 0)
        {
            
            const memb = crewMembers.filter((mem) => mem.id === parseInt(id))[0]

            // console.log(memb)

            setName(memb.name)
            setSpecies(memb.species)
            setRole(memb.role)
        }

    }, [crewMembers])
    
    const handleNameChange = (e) => {
        const newName = e.target.value
        setName(newName)
    }

    const handleSpeciesChange = (e) => {
        const newSpecies = e.target.value
        setSpecies(newSpecies)
    }

    const handleRoleChange = (e) => {
        const newRole = e.target.value
        setRole(newRole)
    }

    const updateMember = async (e) => {
        e.preventDefault()
        const member = {name: `${name}`, species: `${species}`, role: `${role}`}

        if(!(member.name && member.species && member.role))
        {
            alert("Please fill in all fields")
            return
        }

        await supabase
            .from('crewMembers')
            .update(member)
            .eq('id', id)
        
        window.location = "/gallery";
    }

    const deleteMember = async () => {

        await supabase
            .from('crewMembers')
            .delete()
            .eq('id', id);
        
        window.location = "/gallery";
    }

    return(
        <div className="editing-page">
            {crewMembers &&
                <form onSubmit={updateMember}>
                    <label>Name</label><br/>
                    <input id="name" name="name" type="text" value={name} onChange={handleNameChange}/><br/><br/>

                    <label>Species</label><br/>
                    <input id="species" name="species" type="text" value={species} onChange={handleSpeciesChange}/><br/><br/>

                    <label>Role</label><br/>
                    <input id="role" name="role" type="text" value={role} onChange={handleRoleChange}/><br/><br/>

                    <button onClick={deleteMember} className="deleteButton">Delete</button>
                    <input type="submit" value="Submit" />
                </form>
                
            }
        </div>
    )
}

export default Editing
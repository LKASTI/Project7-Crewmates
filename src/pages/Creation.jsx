import { useState } from "react"
import {supabase} from "../client"
import "./creation.css"

const Creation = () => {
    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")
    const [role, setRole] = useState("")

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

    const createMember = async (e) => {
        e.preventDefault()

        const member = {name: `${name}`, species: `${species}`, role: `${role}`}

        if(!(member.name && member.species && member.role))
        {
            alert("Please fill in all fields")
            return
        }

        const {data, error} = 
            await supabase
                .from('crewMembers')
                .insert(member)
                .select()

        console.log(error)

        window.location = "/gallery"
    }

    return(
        <div className="creation-page">
            <form onSubmit={createMember}>
                <label>Name</label><br/>
                <input id="name" name="name" type="text" value={name} onChange={handleNameChange}/><br/><br/>

                <label>Species</label><br/>
                <input id="species" name="species" type="text" value={species} onChange={handleSpeciesChange}/><br/><br/>

                <label>Role</label><br/>
                <input id="role" name="role" type="text" value={role} onChange={handleRoleChange}/><br/><br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Creation
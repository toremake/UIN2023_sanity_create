import { useState } from "react"
import { writeClient } from "../utils/sanity/client"

export default function AddShow() {
    const [title, setTitle] = useState("")

    //saveShow: lagrer show til Sanity
    function saveShow(event) {
        event.preventDefault()
        console.log(title)
        writeClient.create({
            _type: "show",
            title: title
        }).then((document) => {setTitle(""); console.log("TV-serien er lagret med id ", document._id)}).catch((error) => {console.log("Noe galt skjedde: ", error.message)})
    }

    return (
        <>
            <h1>Add Show</h1>
            <form>
                <p>
                    <label htmlFor="title">Tittel</label>
                    <input id="title" name="title" 
                    onChange={(event) => {setTitle(event.target.value);}} value={title}type="text" />
                </p>
                <button onClick={saveShow}>Lagre</button>
            </form>
        </>
    )
}
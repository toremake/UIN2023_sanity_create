import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchShow } from "../utils/sanity/showServices"
import { writeClient } from "../utils/sanity/client"

export default function Show() {

    const {id} = useParams()
    const [show, setShow] = useState(null)

    async function getShow(id) {
        const data = await fetchShow(id)
        setShow(data[0])
    }

    useEffect(() => {
        getShow(id)
    }, [id])

    function saveReview(event) {
        event.preventDefault()
        const name = document.getElementById("name").value
        const rating = document.getElementById("rating").value
        const comment = document.getElementById("comment").value
        const reviewObject = {
            _type: "review",
            name: name,
            rating: Number(rating),
            comment: comment
        }
        
        writeClient.patch(id).setIfMissing({reviews: []})
        .append('reviews', [reviewObject]).commit({autoGenerateArrayKeys: true})
        .then((r) => {console.log("Vurdering lagret")})
        .catch((error) => {console.log("Noe feilet: ", error.message)})

        console.log(reviewObject)
    }

    return (
        <article>
            <h2>{show?.title}</h2>
            <ul>
                {show?.reviews?.map((r,i) => <li key={i}>
                    <p>{r.name} | Vurdering: {r.rating}</p>
                    {r.comment ? <p>{r.comment̋}</p> 
                    : null}</li>)}
            </ul>
            <hr />
            <form>
                <p>
                    <label htmlFor="name">Navn</label>
                    <input type="text" name="name" id="name" />
                </p>
                <p>
                    <label htmlFor="rating">Vurdering</label>
                    <select name="rating" id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="comment">Kommentar</label>
                    <textarea name="comment" id="comment"></textarea>
                </p>
                <button onClick={saveReview}>Lagre vurdering</button>
            </form>
        </article>
    )
}
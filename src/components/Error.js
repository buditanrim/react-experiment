import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Error</h1>
            <p>{err.status}</p>
        </div>


    )
}

export default Error
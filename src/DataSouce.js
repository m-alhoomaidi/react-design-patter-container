import React, { useEffect, useState } from "react";
import axios from "axios";
export const DataSource = ({ children, resourceUrl, resourceName }) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        (async () => {
            axios.get(resourceUrl)
                .then((response) => {
                    if (response.data.length > 0)
                        setData(response.data)
                    else
                        setMsg('there is not data is thie source Yet')
                    setIsLoading(false)
                })
                .catch((error) => {
                    setMsg(error.message)
                    setIsLoading(false)
                })

        })()
    }, [])

    return (
        <div className="container">
            {
                isLoading ? <h1>Loading ...</h1> :
                    data ?
                        React.Children.map(children, child => (
                            React.isValidElement(child) &&
                            data.map((item, index) => (
                                React.cloneElement(child, { [resourceName]: item })
                            ))
                        )) :
                        <h1>{msg}</h1>
            }
        </div>
    )
}
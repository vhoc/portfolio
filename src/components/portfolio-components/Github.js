import React, {useState, useEffect} from "react";

const Github = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [loadedRepos, setLoadedRepos] = useState([])

    useEffect( () => {

        setIsLoading(true)

        fetch(
            'https://api.github.com/users/vhoc/repos'
        ).then(response => {
            return response.json()
        }).then(data => {
            
            const repos = []

            for (const key in data) {
                const repo = {
                    id: key,
                    ...data[key]
                }
                repos.push(repo)
            }
            
            setIsLoading(false)
            setLoadedRepos(repos)
            //console.log(repos)
        })

    }, [] )
    
    

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (

        <>
            <section>
                <h1>Github repositories!</h1>
                <p>{loadedRepos}</p>
            </section>
            

        </>

    );

}

export default Github;
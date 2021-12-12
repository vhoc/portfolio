import  React from 'react'

export const GithubRepo = (props) => {

    return(

        <div className='card mx-2'>
            <div className='card-header'>
                <h3>{props.name}</h3>
            </div>
            <div className='card-body'>
                <strong>{props.shortDescription}</strong>
                <p>Tech: {props.technology}</p>
                <div className='text-left'>
                <p className='text-left'>
                    {props.longDescription}
                </p>
                    <a className='btn btn-lg btn-primary' href={`https://github.com/vhoc/${props.repoPath}`}>Go to the repo</a>
                </div>
            </div>
        </div>

    )

}
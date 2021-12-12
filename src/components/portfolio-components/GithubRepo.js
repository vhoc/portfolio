import  React from 'react'

export const GithubRepo = (props) => {

    return (

        <div className='card m-2 col-12 col-xs-6 col-sm-5 col-lg-3'>
            <div className='card-header'>
                <h4>{props.name}</h4>
            </div>
            <div className='card-body d-flex flex-column justify-content-between'>
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
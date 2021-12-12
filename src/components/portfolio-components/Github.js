import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubRepo } from './GithubRepo';

const Github = () => {

    return (

        <>
            <section className='d-flex flex-column justify-content-center'>
                <span><FontAwesomeIcon icon={faGithub} size="3x"/></span>
                <h1>Github repositories</h1>

                <div className='d-flex flex-wrap justify-content-around p-1'>

                   <GithubRepo
                    name='Paxvox'
                    shortDescription='The frontend of a satisfacion poll targeted at restaurants.'
                    technology='ReactJS'
                    longDescription="This is an ongoing learning project which has served me well to learn the foundations of React JS, it's also my most active repository"
                    repoPath='paxvox'
                   />

                   <GithubRepo


                    name='Paxvox API'
                    shortDescription='The backend for the afore-mentioned satisfaction poll system.'
                    technology='Laravel Lumen'
                    longDescription="This is the backend API for Paxvox. It is on its very early stages. It will include user privileges, and will support reports with fancy charts and stuff."
                    repoPath='VenkaLite'
                   />

                    <GithubRepo
                    name='VenkaLite'
                    shortDescription='A cross-platform program that takes selected data from a MSSQL Server database and sends it to a cloud API backend.'
                    technology='Netcore 6 C# '
                    longDescription="This little tool downloads a list of SQL queries from a remote API and executes each one of them to obtain data from a local (or LAN located) Microsoft SQL Server database. It then sends the data back to the remote API to be saved or updated in the API's database."
                    repoPath='VenkaLite'
                   />

                </div>
                
            </section>
            

        </>

    );

}

export default Github;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faAtlas } from '@fortawesome/free-solid-svg-icons'
import profilePic from './assets/img/vhoc.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header shadow">
        <h2>Victor Olvera</h2>
        <p>IT Admin | Programmer</p>
      </header>
      <img src={profilePic} className="Profile-pic" alt="Victor Olvera"/>
      <section className="py-3">
        <div className="d-flex justify-content-center about flex-column mt-3">
          <div>About me</div>
          <div className="short-description">Self-taught IT expert and programmer</div>
          <div className="brief px-5 m-2">Technology and computers have been my passion from a young age. Right now I'm in the process of a career turn from a more hardware and technical aspect of Information Technologies into the world of web and software development. With previous notions of PHP, HTML, CSS and Javascript I started to learn and practice the Laravel Framework, among other related tools, and more recently: Javascript ES6+, React, C# language and Git. I've also made and contributed to several Wordpress websites.
          </div>
          <div className="brief px-5 m-2">I've also developed a year of experience on the <strong>server administration</strong> area, particularly Linux. I set up and currently mantain four AWS Linux EC2 and two Lightsail instances servicing several Wordpress sites, databases, a Laravel based REST API and a complete Postfix/Dovecot/Postfixadmin multi-domain E-mail server with AntiSpam and Antivirus capabilities.
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container">
          <div className="row my-3">
            
            <div className="col-md-4">
              <div className="card text-center h-100">
                <div className="card-block p-2">
                  <h4 className="card-title">Github</h4>
                  <h2><FontAwesomeIcon icon={faGithub} size="3x"/></h2>
                  <p>
                    Code repositories
                    <br/>
                    In the making!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center h-100">
                <div className="card-block p-2">
                  <h4 className="card-title">Webfolio</h4>
                  <h2><FontAwesomeIcon icon={faAtlas} size="3x"/></h2>
                  <p>Websites I've made or contributed to</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center h-100">
                <div className="card-block p-2">
                  <h4 className="card-title">Contact</h4>
                  <h2><FontAwesomeIcon icon={faEnvelopeOpenText} size="3x"/></h2>
                  <p>
                    Send me a message
                    <br/>
                    Is there anything I can help with?
                  </p>
                </div>
              </div>
            </div>            

          </div>
        </div>
      </section>


    </div>
  );
}

export default App;

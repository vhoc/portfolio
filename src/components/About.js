import React from "react";

const About = () => {

    return (

        <>
            <section className="py-3">
                <div className="d-flex justify-content-center about flex-column mt-3">
                    <div>About me</div>
                    <div className="short-description">Self-taught IT expert and programmer</div>
                    <div className="brief px-5 m-2">Technology and computers have been my passion from a young age. Right now I'm in the process of a career turn from a more hardware and technical aspect of Information Technologies into the world of web and software development. With previous notions of PHP, HTML, CSS and Javascript I started to learn and practice the Laravel Framework, among other related tools, and more recently: Javascript ES6+, React, C# language and Git. I've also made and contributed to several Wordpress websites.</div>
                    <div className="brief px-5 m-2">I've also developed a year of experience on the <strong>server administration</strong> area, particularly Linux. I set up and currently mantain four AWS Linux EC2 and two Lightsail instances servicing several Wordpress sites, databases, a Laravel based REST API and a complete Postfix/Dovecot/Postfixadmin multi-domain E-mail server with AntiSpam and Antivirus capabilities.</div>
                </div>
            </section>
        </>

    );

}

export default About;
import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/files/Niharika_MCA_B.pdf`;
    link.download = 'Niharika_MCA_B.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            NIHARIKA <span>A</span>
          </div>
          <ul className="nav-menu">
            {['about', 'skills', 'projects', 'internship', 'education', 'contact'].map((section) => (
              <li
                key={section}
                onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
          <div className="nav-icons">
            <a href="https://www.linkedin.com/in/niharika-raghavendra-0038b7225" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Niharikaarmin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            {/* <a href="https://www.instagram.com/_thanisha._?igsh=Mzltb2pneHM2ZWt1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}

          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            NIHARIKA <span className="highlight"></span>
          </h1>
          <p className="hero-subtitle">Data Science Enthusiast</p>
          <p className="hero-description">
            Crafting innovative, scalable, and user-focused solutions with a passion for data science and full-stack development.
          </p>
          <div className="hero-buttons">
            <button className="btn">Get In Touch</button>
            <button className="btn" onClick={handleDownload}>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="about-me-container" id="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I’m a passionate and self-motivated tech enthusiast with a strong foundation in Computer Networking, Ethical Hacking, and Data Science. I enjoy exploring the technical depth of networks, analyzing data-driven insights, and securing systems through hands-on cybersecurity techniques.

I have hands-on experience with tools like Wireshark, Nmap, Scapy, and Cisco Packet Tracer, along with scripting in Python for automation and network simulation. I actively work on projects involving packet sniffing, network attacks (for ethical hacking practice), and DHCP/DNS server implementation using tools like Scapy.

On the Data Science side, I’m skilled in Python, NumPy, Pandas, Scikit-learn, Matplotlib, and have built machine learning models for prediction, classification, and data visualization. I’m also learning to combine cybersecurity logs and network traffic data with data analytics to detect anomalies and prevent intrusions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React.js</div>
            </div>
          </div>


          <div className="skills-box">
            <h3>PROGRAMMING LANGUAGES</h3>
            <div className="skills-grid">
              <div className="skill">PYTHON</div>
              <div className="skill">JAVA</div>
              <div className="skill">C++</div>
              <div className="skill">C#</div>
              <div className="skill">PHP</div>
            
            </div>
            </div>




          <div className="skills-box">
            <h3>Database Management</h3>
            <div className="skills-grid">
              <div className="skill">MongoDB</div>
              <div className="skill">MySQL</div>
            </div>
          </div>
          <div className="skills-box">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              <div className="skill">ECLIPSE</div>
              <div className="skill">GitHub</div>
              <div className="skill">Figma</div>
              <div className="skill">Jupyter Notebook</div>
              <div className="skill">Google Colab</div>
              <div className="skill">VS Code</div>
              <div className="skill">Data Science</div>
              <div className="skill">TURBO C++</div>
            </div>


        








          </div>


              <div className="skills-box">
            <h3>DEVELOPING SKILLS</h3>
            <div className="skills-grid">
              <div className="skill">Networking</div>
              <div className="skill">DATA SCIENCE</div>
               <div className="skill">ETHICAL HACKING</div>
            
          
            
            </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project-card featured">
            <img
              src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F3e2959c0-6cb9-4ad2-88e4-439cd3c2fb17/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAGf8EvrhAIbbhtjSaBr_MITPU6Az4_z0ZNkRbriWshLQ&exp=1750503264&osig=AAAAAAAAAAAAAAAAAAAAAFlzGIXEM7psljmR_NRiOZNksEBvpOtq1d3S_4rcyzLm&signer=media-rpc&x-canva-quality=screen"
              alt="Dog Breed Recognition"
            />



            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>AutoencoderCNN Number Recognition</h3>
              <p>
               This project combines Autoencoders and Convolutional Neural Networks (CNNs) to recognize handwritten digits (0–9), typically using the MNIST dataset. It first uses an Autoencoder to learn a compressed representation (encoding) of digit images and then uses a CNN classifier to accurately predict the digit class based on the reconstructed or original image.


              </p>
              <div className="tags">
                <span className="tag">TENSORFLOW</span>
                <span className="tag">CNN</span>
                <span className="tag">NUMPY</span>
                <span className="tag">MATPLOTLIB</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Niharikaarmin/AutoencoderCNN-number-recognition"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img
              src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F2125a8ad-f0a3-4526-a7e4-35af4fa19872/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAFGCgt93Q-9MqesjajizFmCuP06CgJJpS2DYDa6j8rEt&exp=1750505088&osig=AAAAAAAAAAAAAAAAAAAAANUv3y0arWKLF6qGhkLiLGL4L01OKkb26_1jH_5yVQjB&signer=media-rpc&x-canva-quality=screen"
              alt="Natural Language Processing"
            />
            <div className="card-content">
              <h3>LAN using Socket</h3>
              <p>
                This project is a real-time communication system built using Socket Programming over a Local Area Network (LAN). It allows multiple users connected to the same LAN (like in a college lab or home WiFi) to send and receive messages between a server and clients using TCP sockets.


              </p>
              <div className="tags">
                <span className="tag">SOCKET</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Niharikaarmin/LAN-using-Socket"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className="project-card featured">
            <img
              src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F355690a6-04ba-4bb5-9b5f-24a0957ee319/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAACfxio3XVXrrVHlm3W2pZZChQgk-IKWvzD4BwXBRpYDE&exp=1750504934&osig=AAAAAAAAAAAAAAAAAAAAAA5lNltA7Cgdn7FEqBhNKZDvMLtbZr7EOTX83MhHSYs7&signer=media-rpc&x-canva-quality=screen"
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>ARP SPOOFING</h3>
              <p>
               The goal of this project is to demonstrate a Man-in-the-Middle (MITM) attack using ARP Spoofing. This shows how a hacker can intercept communication between a victim and a router by manipulating the ARP
              </p>
              <div className="tags">
                <span className="tag">Scapy</span>
                <span className="tag">ARP</span>
                <span className="tag">ETHER</span>
                <span className="tag">SEND</span>
                <span className="tag">SRP</span>
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Thanisha2727/ARP-SPOOFING"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>





            
          </div>
            <div className="project-card">
            <img
              src="https://ccnapracticallabs.com/wp-content/uploads/2025/04/dhcp-snooping-works.jpg"
              alt="Dhcp Snooping"
            />
          <div className="card-content">
              <h3>Dhcp Snooping </h3>
              <p>
           DHCP Snooping is a Layer 2 security feature used to prevent rogue DHCP servers from distributing invalid IP addresses to users. In this project, we create a Python script using Scapy to detect DHCP servers on the LAN and validate whether they are authorized or not.


              </p>
              <div className="tags">
                <span className="tag">SCAPY</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Niharikaarmin/Dhcp-snooping-using-scapy"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
            </div>

     <div className="project-card featured">
            <img
              src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F40bce8b1-ceb2-4fb5-8e30-c9659f544fbf/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAABjuDtyWWRAX883OA-44F9-cV0xFHfmi7H_vfjYb6mrC&exp=1750505122&osig=AAAAAAAAAAAAAAAAAAAAAN1TIRGD5VDmOhL-VyDOPiym6UDTj6vs0jUj3QEuM5oj&signer=media-rpc&x-canva-quality=screen"
              alt="KM Malligai Store"
            />
            <div className="card-content">
              <span className="tag">Featured</span>
              <h3>Sales-Prediction-App-Machine-Learning</h3>
              <p>
               This project uses Machine Learning to predict future sales based on historical data such as advertising budgets, location, date, or number of units sold. A user-friendly app interface is created using Kivy/KivyMD, allowing users to upload CSV datasets, view results, and get predictions.


              </p>
              <div className="tags">
                <span className="tag">KIVYMD</span>
                <span className="tag">SCIKIT-LEARN</span>
                <span className="tag">MATPLOTLIB</span>
                
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Niharikaarmin/-Sales-Prediction-App-Python-KivyMD-Machine-Learning-"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>





            
          </div>




             <div className="project-card">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/84/8a/b4/848ab476-4b69-1c4e-50da-71d96114dcdc/AppIcon-85-220-4-2x.png/1200x630wa.png"
              alt="Natural Language Processing"
            />
          <div className="card-content">
              <h3>VOICE CHANGER USING LIBROSA</h3>
              <p>
           This project transforms your real-time voice input into Shinobu Kocho’s anime-style voice using a combination of speech processing, deep learning (TensorFlow), and audio synthesis. It captures your live voice through a microphone, converts it into a spectrogram, passes it through a trained voice conversion model, and reconstructs the output as Shinobu’s voice in real-time.

</p>
              <div className="tags">
                
          <span className="tag">TENSORFLOW</span>
          <span className="tag">LIBROSA</span>
          <span className="tag">NUMPY</span>
          <span className="tag">CNN</span>
          <span className="tag">SOUNDFILE</span>
             
              </div>
              <div className="buttons">
                <a
                  href="https://github.com/Niharikaarmin/AutoencoderCNN"
                  className="btn-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
            </div>




            
        </div>
      </section>

      {/* Internship Section */}
      <section className="internship-section" id="internship">
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">Practical experience and hands-on learning through internships</p>
        <div className="internship-list">
          <div className="internship-card">
            <div className="internship-date">May 03, 2024</div>
            <h3>Frontend Developer</h3>
            <div className="company-name">
              🏢{' '}
              <h3>
                <a href="https://rooman.net" className="blue-link" target="_blank" rel="noopener noreferrer">
                  Rooman Technologies
                </a>
              </h3>
            </div>
            <ul className="internship-points">
              <li> Built responsive web pages using HTML and CSS.</li>
              <li> Designed clean layouts with Flexbox and Grid.</li>
              <li>Improved page styling for better user experience.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="icon-circle"></div>
          <div className="edu-details">
            <h3>Master of Computer Applications</h3>
            <p className="highlight">Data Science</p>
            <a href="https://www.alliance.edu.in" className="blue-link" target="_blank" rel="noopener noreferrer">
              Alliance University
            </a>
            <p className="info-icons">
              <span><i className="fa fa-calendar"></i> SEP 2024 - MAY 2026</span>
              <span><i className="fa fa-map-marker"></i> Bengaluru, India</span>
            </p>
            <p className="cgpa">CGPA: 9.1</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or inquiries!</p>
            <div className="info-box">
              <span className="icon"><i className="fa fa-envelope"></i></span>
              <div className="info">
                <strong>Email:</strong> <a href="mailto:niharikaamin422@gmail.com">niharikaamin422@gmail.com</a>
              </div>
            </div>
            <div className="info-box">
              <span className="icon"><i className="fa fa-phone"></i></span>
              <div className="info">
                <strong>Phone:</strong> +91 8904419867
              </div>
            </div>
            <div className="info-box">
              <span className="icon"><i className="fa fa-map-marker"></i></span>
              <div className="info">
                <strong>Location:</strong> Bengaluru, India
              </div>
            </div>
          </div>
          <div className="contact-form">
  <form action="https://formsubmit.co/niharikaamin422@gmail.com" method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Subject" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Your Message" required></textarea>


    <input type="hidden" name="_captcha" value="false" />


    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

    <button type="submit">Send Message</button>
  </form>

  <h3>Send a Message</h3>
</div>

        </div>
      </section>
    </>
  );
};

export default Hero;
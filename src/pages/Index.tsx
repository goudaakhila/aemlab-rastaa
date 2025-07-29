
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Award, ChevronRight, Menu, X, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { schedule1, schedule2} from "@/data/schedule";
import { speakers} from "@/data/speaker";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'date','sponsors', 'schedule', 'registration'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId); // ← Add this
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Top Row: Department + Contact Info */}
          <div className="w-full rounded-b-md bg-gradient-to-r from-teal-600 to-purple-500 text-white text-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-0 h-auto py-1 px-4 sm:px-6 lg:px-8">
            <div className="font-medium text-center sm:text-left">
              Department of Electrical Engineering, IIT Indore
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 items-center text-xs">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.68.59 1 1 0 011 1v3.6a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
                <span>0512-259-7058</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v16h16V4H4zm8 8l8-5H4l8 5z" />
                </svg>
                <a
                  href="mailto:ieeesbcspc@iiti.ac.in"
                  className="hover:underline text-white text-xs sm:text-sm"
                >
                  ieeesbcspc@iiti.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
         
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
              src="\src\images\iiti.png" 
              alt="IIT Indore Logo" 
              className="w-8 h-8 object-contain"
            />
              <span className="font-bold text-xl text-gray-900">IIT Indore</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About','Sponsors', 'Schedule', 'Registration'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Sponsors', 'Schedule', 'Registration'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
              <section
          id="home"
          className="relative pt-32 sm:pt-24 pb-5 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/images/back1.png')" }}

        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                RASTAA <span className="text-blue-400">2025</span>
              </h1>
              <p className="text-lg text-gray-300">A National Workshop on</p>
              <p className="text-xl md:text-2xl text-gray-200 mb-2">
                Recent Advancement in Stealth Technologies for Airborne Applications
              </p>
              
              {/* Logos and Info Section */}
                    <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-center sm:space-x-6 mb-8">
                      {/* Left Logo */}
                      <img
                        src="/src/images/Picture2.jpg"
                        alt="DRDO Logo"
                        className="h-32 w-32 rounded-full object-cover shadow-lg"
                      />

                      {/* Text Block */}
                      <div className="text-gray-300 text-center space-y-1">
                        <p className="text-md font-semibold">Jointly Organized by</p>
                        <p className="text-md">Aeronautical Development Establishment, ADE-DRDO, Bengaluru</p>
                        <p className="text-md">&</p>
                        <p className="text-md">Department of Electrical Engineering, IIT Indore</p>
                        <p className="text-md italic">in collaboration with IEEE APS SBC, IIT Indore</p>
                      </div>

                      {/* Right Logo */}
                      <img
                        src="/src/images/IITI_logo.png"
                        alt="IIT Indore Logo"
                        className="h-28 sm:h-32 w-auto"
                      />
                    </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto text-gray-100">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>September 17-18, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>IIT Indore Campus</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>100+ Participants</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
              <Button size="lg" onClick={() => scrollToSection('registration')} className="bg-blue-600 hover:bg-blue-700">
                Register Now
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                Learn More
              </Button>
            </div>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden mt-6 relative z-10">
            <div className="whitespace-nowrap animate-marquee text-red-200 font-semibold text-lg">
              Registration is Open • Registration Deadline: 01 August 2025 • Notification to the candidates: 05 August 2025
            </div>
          </div>
        </section>

      {/* About Section
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About RASTAA 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading researchers, industry experts, and students for two days of cutting-edge 
              presentations, workshops, and networking in <span className="text-blue-600 font-bold">Stealth Technologies for airborne</span> applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>World-Class Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hear from renowned researchers and industry leaders shaping the future of AI and ML.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Networking Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with peers, collaborators, and potential mentors from academia and industry.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Hands-on Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participate in practical sessions and gain hands-on experience with latest tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {/* About Section */}
        <section id="about" className="py-24 bg-gray-50 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">About RASTAA 2025</h2>
            {/* Section Heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Workshop Overview */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">🛠️ Workshop Overview</h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify indent-6">
                    This joint workshop by ADE-DRDO and the Department of Electrical Engineering, IIT Indore,
                    explores cutting-edge stealth technologies for airborne platforms. Topics include radar cross-section
                    (RCS) reduction, electromagnetic stealth, low-observable materials, antennas, absorber design,
                    and frequency-selective surfaces (FSSs). Participants will gain insights into practical strategies
                    and advanced methods for stealth implementation in modern aerospace systems.
                  </p>
                </div>

                {/* About the Host */}
                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">🏛️ About the Host</h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-justify indent-6">
                    IIT Indore is an Institute of National Importance, established in 2009, dedicated to excellence
                    in science and engineering. The Department of Electrical Engineering hosts the Applied
                    Electromagnetics Laboratory, engaged in RF, microwave, FSSs, absorber design, and antenna
                    technologies. The department collaborates actively with DRDO and aerospace industries to
                    drive innovation and research in advanced electromagnetic applications.
                  </p>
                </div>
              </div>
          <section id = "date" className="py-10 bg-gray-50 scroll-mt-10">
            {/* Important Dates Section */}
              <div className="max-w-4xl mx-auto bg-white shadow-md p-4 rounded-xl text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">📅 Important Dates</h2>
                <p className="text-sm text-gray-700">
                  Registration Deadline: <span className="text-red-600 font-medium">01 August 2025</span><br />
                  Notification to the candidates: <span className="text-red-600 font-medium">05 August 2025</span><br />
                  Workshop Dates: <span className="text-red-600 font-medium">18–19 September 2025</span>
                </p>
              </div>
            {/* Workshop Coordinators Section */}
            <div className="max-w-5xl mx-auto mt-6 bg-white shadow-md p-6 rounded-xl">
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">👥 Workshop Coordinators</h2>
              <div className="flex flex-col md:flex-row justify-around text-sm text-gray-700">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <p><strong>Dr. Saptarshi Ghosh</strong><br />
                  Associate Professor, IIT Indore, India.<br />
                  E-mail: <a href="mailto:sghosh@iiti.ac.in" className="text-blue-600">sghosh@iiti.ac.in</a></p>
                  <p className="mt-2">IEEE APS SBC IITI Execom Members<br />
                  E-mail: <a href="mailto:ieeeapssbc@iiti.ac.in" className="text-blue-600">ieeeapssbc@iiti.ac.in</a></p>
                </div>
                <div className="text-center md:text-left">
                  <p><strong>Dr. Vijay Kumar Sutrakar</strong><br />
                  Scientist ‘F’ &amp; Head,<br />
                  Stealth Technology Division,<br />
                  Aeronautical Development Establishment (ADE),<br />
                  DRDO, Bengaluru.<br />
                  E-mail: <a href="mailto:vks.ade@gov.in" className="text-blue-600">vks.ade@gov.in</a></p>
                </div>
              </div>
            </div>
        </section>
            {/* Four Feature Cards */}
            <div className="mt-0 grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <img src="/src/images/stealth.png" alt="EM Stealth" className="w-20 h-20 object-contain mb-4 rounded-full" />
                  <Award className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-center">Expert Talks on EM Stealth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Hear from DRDO scientists, professors, and defense technologists on RCS reduction, surface treatments, and stealth verification techniques.
                  </p>
                </CardContent>
              </Card>
              {/* Card 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <img src="/src/images/networking.png" alt="Networking" className="w-20 h-20 object-contain mb-4 rounded-full" />
                  <Users className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-center">Collaborative Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Connect with peers, collaborators, and mentors from academia, R&D centers, and industry focused on RF stealth and electromagnetic design.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <img src="/src/images/sim.png" alt="Workshop" className="w-20 h-20 object-contain mb-4 rounded-full" />
                  <Clock className="w-10 h-10 text-blue-600 mb-2" />
                  <CardTitle className="text-center">Simulation & Design Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    Engage in hands-on sessions with CST, HFSS, and MATLAB to model FSS, absorber surfaces, and conformal structures.
                  </p>
                </CardContent>
              </Card>
              {/* Card 4 */}
            </div>
          </div>
        </section>
        {/* Date section */}
        
        {/* Sponsorship Section */}
        <section id="sponsors" className="py-24 bg-white scroll-mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We thank our esteemed sponsors for supporting RASTAA 2025 and enabling innovation in stealth technologies.
              </p>
            </div>

            {/* Signature Sponsor 
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Signature Sponsor</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-blue-50 p-6 rounded-lg shadow-sm">
                <img
                  src="/src/images/drdo1.png"
                  alt="Signature Sponsor"
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Defense Research Organization</h4>
                  <p className="text-gray-600 text-sm max-w-md">
                    A leader in developing advanced electromagnetic technologies for national defense applications.
                  </p>
                </div>
              </div>
            </div>
              */}
            {/* Gold Sponsors */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4 text-center">Gold Sponsors</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center bg-yellow-50 p-4 rounded-lg shadow-sm">
                  <img src="/src/images/hcl.png" alt="Gold Sponsor 1" className="h-16 mr-4 object-contain" />
                  <div>
                    <h4 className="font-bold text-gray-800">HAL (ARDC)</h4>
                    <p className="text-sm text-gray-600">Advancing aerospace research and stealth aircraft development.</p>
                  </div>
                </div>
                <div className="flex items-center bg-yellow-50 p-4 rounded-lg shadow-sm">
                  <img src="/src/images/csir.png" alt="Gold Sponsor 2" className="h-16 mr-4 object-contain" />
                  <div>
                    <h4 className="font-bold text-gray-800">CSIR-NAL</h4>
                    <p className="text-sm text-gray-600">Driving innovation in stealth coatings and materials for AMCA.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Silver Sponsors</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <img
                  src="/src/images/drdo1.png"
                  alt="Signature Sponsor"
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
                  <div>
                    <h4 className="font-bold text-gray-800">IIT Kanpur</h4>
                    <p className="text-sm text-gray-600">Research lab on microwave absorbers and stealth meta-surfaces.</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <img
                  src="/src/images/drdo1.png"
                  alt="Signature Sponsor"
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
                  <div>
                    <h4 className="font-bold text-gray-800">DRDO</h4>
                    <p className="text-sm text-gray-600">Supporting radar cross-section reduction systems and stealth testing.</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <img
                  src="/src/images/drdo1.png"
                  alt="Signature Sponsor"
                  className="h-24 w-24 rounded-full object-cover shadow-md"
                />
                  <div>
                    <h4 className="font-bold text-gray-800">DMSRDE</h4>
                    <p className="text-sm text-gray-600">Advanced materials sponsor for radomes and conformal coatings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Speakers Section 
      <section id="speakers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keynote Speakers</h2>
            <p className="text-xl text-gray-600">
              Learn from the brightest minds in machine learning and AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{speaker.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {speaker.title}
                  </CardDescription>
                  <p className="text-sm text-gray-500">{speaker.affiliation}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{speaker.topic}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* 
      <section id="schedule" className="py-24 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
            <p className="text-xl text-gray-600">
              Two days packed with learning, networking, and innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 1 - September 17, 2025</h3>
              <div className="space-y-4">
                {schedule1.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-32 flex-shrink-0">
                      <span className="font-semibold text-blue-600">{item.time}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      {item.speaker && (
                        <p className="text-gray-600 text-sm">{item.speaker}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'keynote' ? 'bg-blue-100 text-blue-800' :
                        item.type === 'workshop' ? 'bg-green-100 text-green-800' :
                        item.type === 'break' ? 'bg-gray-100 text-gray-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Day 2 - September 18, 2025</h3>
              <div className="space-y-4">
                {schedule2.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-32 flex-shrink-0">
                      <span className="font-semibold text-blue-600">{item.time}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      {item.speaker && (
                        <p className="text-gray-600 text-sm">{item.speaker}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'keynote' ? 'bg-blue-100 text-blue-800' :
                        item.type === 'workshop' ? 'bg-green-100 text-green-800' :
                        item.type === 'break' ? 'bg-gray-100 text-gray-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      Schedule Section */}
      
      {/* Registration Section */}
      <section id="registration" className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Secure your spot at RASTAA 2025 and be part of the future of stealth technology
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Students (UG/PG/PhD)</CardTitle>
                  <div className="text-3xl font-bold">₹1,180</div>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Faculty Members</CardTitle>
                  <div className="text-3xl font-bold">₹4,720</div>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Industry/R&D Professionals</CardTitle>
                  <div className="text-3xl font-bold">₹9,440</div>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">DRDO Scientist</CardTitle>
                  <div className="text-3xl font-bold">₹5,900</div>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxYovdQCC1jGaMNLIIVTL4jJ8i-OnXHpOcaaUpzcSh6hdqsw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Register Now
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl">RASTAA 2025</span>
              </div>
              <p className="text-gray-400">
                Recent Advancement in Stealth Technologies for Airborne Applications
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ieeeapssbc@iiti.ac.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-512-259-XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>IIT Indore, MP 453552</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>Accommodation</div>
                <div>Travel Information</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AEM Lab IIT Indore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

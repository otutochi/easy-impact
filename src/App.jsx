import './App.css';
import Project from './components/Project'

const App = () => {

  return (
    <div className="App">
      <h1>Easy Impact</h1>
      <h2>Impact made easy</h2>
      <p><i>"Finding meaningful volunteer opportunities shouldn't be complicated. 
        Easy Impact brings together organizations that need your support&mdash;all in one place.
        Take the next step towards making a real impact with just one simple click."</i></p>

      <div className="projects">
        <Project org='Wesley Foundation' loc="Saint Simons, GA" imgpath='\wesley.png' link='https://www.statewesley.org/' />
        <Project org='Cheyenne River Youth Project' loc="Eagle Butte, SD" imgpath='\cheyenne.jpg' link='http://www.lakotayouth.org/' />
        <Project org='SoupMobile' loc="Dallas, TX" imgpath='\soup.jpg' link='http://www.soupmobile.org/' />
        <Project org='Sci Starter' loc="Nationwide" imgpath='\scistarter.webp' link='http://www.arkidsread.org/' />
        <Project org='AR Kids Read' loc="Pine Bluff, AR" imgpath='\arkidsread.webp' link='https://www.statewesley.org/' />
        <Project org='Tutoring Chicago' loc="Chicago, IL" imgpath='\tchicago.jpg' link='http://www.tutoringchicago.org/' />
        <Project org='EldersHelpers' loc="Austin, TX" imgpath='\elders.webp' link='https://elderhelpers.org/' />
        <Project org='Federal Bureau of Prisons' loc="Fort Dix, NJ" imgpath='\prison.webp' link='https://volunteer.reentry.gov/Volunteer/s/' />
        <Project org="SUN 'n FUN" loc="Lakeland, FL" imgpath='\sun.png' link='http://wwwflysnf.org/' />
        <Project org='The ENGin Program' loc="New York, NY" imgpath='\eng.avif' link='http://www.enginprogram.org/' />
        <Project org='Pacific Community Ventures' loc="San Francisco, CA" imgpath='\pacific.webp' link='https://www.pacificcommunityventures.org/' />
        <Project org='Wheels For All' loc="Pie Bluff, AR" imgpath='\wheels.webp' link='http://wheelsforall.org/' />


      </div>
      
    </div>
  )
}

export default App
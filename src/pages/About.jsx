import BeeHouses from '../components/about/BeeHouses'
import BeeKeepers from '../components/about/BeeKeepers'
import Map from '../components/about/Map'

const About = () => {
  return (
    <main className="mb-3">
      <Map />
      <article className="my-3 p-2" id="houses_and_keepers">
        <h4>Houses and Keepers</h4>
        <BeeHouses />
        <hr />
        <BeeKeepers />
      </article>
    </main>
  )
}

export default About

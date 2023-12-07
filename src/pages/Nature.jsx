import Bees from '../components/nature/Bees'
import Honey from '../components/nature/Honey'
import TypesOfBees from '../components/nature/TypesOfBees'
import TypesOfHoney from '../components/nature/TypesOfHoney'

const Nature = () => {
  return (
    <main className="mb-3">
      <article className="mb-2">
        <Bees />
        <TypesOfBees />
      </article>
      <article className="mb-2">
        <Honey />
        <TypesOfHoney />
      </article>
    </main>
  )
}

export default Nature

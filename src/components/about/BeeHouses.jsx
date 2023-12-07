import './styles.css'

const BeeHouses = () => {
  return (
    <div className="row my-2 bee_houses">
      <div className="col-12 col-md-6 p-3">
        <h6 className="mx-2">Houses</h6>
        <p>
          Beekeeping is an essential and traditional practice in Myanmar, and
          bee houses play a crucial role in supporting bee colonies and honey
          production. These houses are designed to provide a suitable
          environment for bees to thrive while facilitating the collection of
          honey. Here are some common types of bee houses in Myanmar:
        </p>
        <ul>
          <li>
            <h6>Bamboo Hives</h6>
            <p>
              Bamboo is a widely used material for constructing bee hives in
              Myanmar. Beekeepers craft hives from bamboo sections, creating a
              natural and breathable environment for the bees.
            </p>
          </li>
          <li>
            <h6>Traditional Wooden Hives</h6>
            <p>
              Wooden hives, crafted from locally available wood, are another
              prevalent type. These hives are designed with removable frames,
              making it easier for beekeepers to manage the colonies and extract
              honey.
            </p>
          </li>
          <li>
            <h6>Straw Skeps</h6>
            <p>
              Straw skeps are traditional, dome-shaped bee houses that have been
              used for centuries. While they are less common today due to modern
              beekeeping practices, some beekeepers in Myanmar still utilize
              them.
            </p>
          </li>
          <li>
            <h6>Modern Langstroth Hives</h6>
            <p>
              With advancements in beekeeping, some beekeepers in Myanmar have
              adopted modern Langstroth hives. These standardized hives allow
              for systematic management and easy extraction of honey frames.
            </p>
          </li>
        </ul>
        <p>
          Bee houses in Myanmar are often strategically placed in locations with
          abundant floral resources to ensure the bees have access to a variety
          of nectar and pollen. Beekeepers play a vital role in maintaining and
          managing these houses, fostering sustainable beekeeping practices and
          the conservation of bee populations.
        </p>
      </div>
      <div className="col-12 col-md-6 text-center p-2 bee_houses_img_box">
        <img
          src="./assets/images/bee_houses.jpeg"
          alt="Bee houses in myanmar"
        />
        <img src="./assets/images/bee_hives.jpg" alt="Bee houses in myanmar" />
      </div>
    </div>
  )
}

export default BeeHouses

import "./about.css";

import owner1 from "../../assets/Img/saida.jpg";
import owner2 from "../../assets/Img/abdula.jpg";
import owner3 from "../../assets/Img/irfan.jpg";

const owners = [
  {
    id: 1,
    name: "Mr. Saida",
    image: owner1,
    phoneNumber: "+91-9949353283",
  },
  {
    id: 2,
    name: "Mr. Abdhulla",
    image: owner2,
    phoneNumber: "+91-9849305002",
  },
  {
    id: 3,
    name: "Mr. Irfan",
    image: owner3,
    phoneNumber: "+91-9052525027",
  },
];

const About = () => {
  return (
    <div className="about">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about__content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi
          porro, repudiandae alias placeat minus ex recusandae laboriosam, rem,
          voluptas nesciunt iste repellendus asperiores labore. Deleniti nostrum
          ea possimus quasi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          debitis earum ad quia, eius repellendus quisquam sint molestiae amet
          expedita odit perferendis nemo deleniti sequi error odio magni
          molestias eaque!
        </p>

        <h3>Learn more about the people behind our company.</h3>
        <div className="owners">
          {owners.map((owner) => (
            <div key={owner.id} className="owner-card">
              <img src={owner.image} alt={owner.name} />
              <h2>{owner.name}</h2>
              <span>Phone: {owner.phoneNumber}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

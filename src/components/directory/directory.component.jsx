import React from "react";
import MenuItem from "../menuItem/menuItem.components";
import "./directory.styles.scss";


//Directory is a component that displays all the menuItem and contains their hard coded data and passes them. 
//On the homepage
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Blog",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          id: 1,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Events",
          imageUrl: "https://i.ibb.co/SNRZVxN/Cedex.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Noios",
          imageUrl: "https://i.ibb.co/18w23Zy/Lune-1.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "On est",
          imageUrl: "https://i.ibb.co/vBLRFFm/Nawals.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "En Ligne",
          imageUrl: "https://i.ibb.co/0rQrj7p/Petrolette.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {
          //Here spreading all values of the section[] as ...otherSections. Equivalent of title={title} size={size} ...
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}
export default Directory;

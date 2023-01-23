import React, { useState } from "react";
import Section from "../../interfaces/section.interface";
import MenuItem from "../menuItem/menuItem.components";
import "./directory.styles.scss";


//Directory is a component that displays all the menuItem and contains their hard coded data and passes them.
//On the homepage
const Directory: React.FC<React.FC> = () => {
    const [sections] = useState<Section[]>([
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
            title: "Noïo",
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
    ])

    return (
        <div className="directory-menu">
            {
                //Here spreading all values of the section[] as ...otherSections. Equivalent of title={title} size={size} ...
                sections.map((section: Section) => (
                    <MenuItem key={section.id} section={section} />
                ))
            }
        </div>
    );

}
export default Directory;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";

//Component that holds a Card displaying an image and a title corresponding to a category of the shop
//Props are passed by the Diectory component where MenuItem is mapped.
const MenuItem: React.FC<Section> = (section: Section) => {
    const { isUp, linkUrl, size, imageUrl, title } = section
    const navigate = useNavigate();

    return (
        <div onClick={() => isUp ? navigate(`/${linkUrl}`) : null} className={`${size ? size : ''} ${isUp ? "" : "WIP"} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                {isUp ? (<span className="subtitle">CLICK ME</span>) :
                    <span className="subtitle">COMING</span>
                }
            </div>
        </div>
    );
};

export default MenuItem;

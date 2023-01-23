import React from "react";
import Item from "../../interfaces/item.interface";

import "./blog-item.styles.scss";
interface BlogItemProps {
    item: Item;
}
const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
    const { title, description, imageUrl } = item;
    return (
        <div className="blog-item border">
            <div className="title">
                {title}
            </div>
            <div className="background-image border" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="blog-description">
                {description}
            </div>
        </div>
    )
};

export default BlogItem;

import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        //I love these spreadings <3 (...otherDataNotUsefulInThisComponentButWe'reGonnaUseThemInHisChild )
        //Would've knew how to use them before
        items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })
      }
    </div>
  </div>
);

export default PreviewCollection;

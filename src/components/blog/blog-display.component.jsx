import React from "react";
import BlogItem from "../blog-item/blog-item.component";
import "./blog-display.styles.scss";


//Directory is a component that displays all the menuItem and contains their hard coded data and passes them. 
//On the homepage
class BlogDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          title: "C'est la fete a la grosse noio AJD !!! Alleeeeeeeeeez",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:'Jej :"Jej, plus communément appelé « jej humain », « humain », ou « être humain », appartient à la famille des hominidés toulousains. L’animal de petite taille se manifeste par une production graphique employant diverses techniques de gravures dont notamment la technique du monotype, procédé dimpression qui produit un tirage unique.',
          id: 1,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Blog2",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"Aurel : “Je suis Aurel, tatoueur depuis 3ans et étudiant l'utilisation des bowls tibétains depuis un an environ. Je fais des séances de tatouages un peu particulières mélant sono thérapie, lithothérapie et géométrie sacrée. Présent en tant qu'exposant uniquement je vous présenterai quelques unes de mes œuvres dont certaines sur le thème du skate (une autre grande partie de ma vie/mon inspiration). Et en plus c'est un peu plus long que ça parce que j'ai besoin de tester la longueur alors il va falloir ecrire un peu. Même un peu beaucoup voir ce qu'on peut faire.",
          id: 2,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Blog3",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"LESCOPAINS « est un collectif d’artistes réunissant Sønn, Fils Kurylak et Baron. Ce collectif toulousain s’est formé pour travailler ensemble dans le partage et l’approche de nouvelles expériences. »",
          id: 3,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Blog4",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"Aurel : “Je suis Aurel, tatoueur depuis 3ans et étudiant l'utilisation des bowls tibétains depuis un an environ. Je fais des séances de tatouages un peu particulières mélant sono thérapie, lithothérapie et géométrie sacrée. Présent en tant qu'exposant uniquement je vous présenterai quelques unes de mes œuvres dont certaines sur le thème du skate (une autre grande partie de ma vie/mon inspiration). Et en plus c'est un peu plus long que ça parce que j'ai besoin de tester la longueur alors il va falloir ecrire un peu. Même un peu beaucoup voir ce qu'on peut faire.",
          id: 4,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Blog5",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"Yooooo c la description",
          id: 5,
          linkUrl: "blog",
          isUp: true
        },
        {
          title: "Blog6",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"Yooooo c la description",
          id: 6,
          linkUrl: "blog",
          isUp: true
        }, 
        {
          title: "Blog 7",
          imageUrl: "https://i.ibb.co/cyJHcMz/Canelle.jpg",
          description:"Yooooo c la description",
          id: 6,
          linkUrl: "blog",
          isUp: true
        }, 
      ],
    };
  }

  sliceItems(items) {
    let slicedItems = []

    if (items.length){
      for(let index=0; index < items.length; index = index+3 ) {
        slicedItems.push(items.slice(index,index+3))
      }
    }
    
    return slicedItems
  }

  render() {
    return (
      <div className="blog-display"> 
        {
          //Here spreading all values of the section[] as ...otherSections. Equivalent of title={title} size={size} ...
          this.state.items.length && this.sliceItems(this.state.items).length ? this.sliceItems(this.state.items).map(
            (section,index) => {
              return (
                <div className="item-section" key={index}>
                  {
                  section.map(({ id, ...otherSectionProps }) => (
                    <BlogItem key={id} {...otherSectionProps} />
                  ))}
                </div>)
            }
          ) :null
        }
      </div>
    );
  }
}
export default BlogDisplay;

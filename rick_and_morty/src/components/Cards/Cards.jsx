import Card from '../Card/Card';
import style from '../Cards/Cards.module.css'

export default function Cards(props) {
      const { characters, onClose } = props;

      return ( 
      <div className={style.container}>
      {
      characters?.map((char ,index) => ( 
            <Card 
                  id={char.id}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                  onClose={()=>onClose(char.id)}
                  key={index}
                  />
      ))}  
      
      </div>
      )
}


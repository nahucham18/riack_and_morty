import style from './Card.module.css'

export default function Card(props) {

   const { onClose } = props
   return (
      <div className={style.container}>

         <button className={style.btn} onClick={onClose}>X</button>
         <img  className={style.image} src={props.image} alt={props.name} />
         <div className={style.description}>
            <h2 className={style.titulo}>{props.name}</h2>
            <h2 className={style.propiedad}>{props.species}</h2>
            <h2 className={style.propiedad}>{props.gender}</h2>
         </div>
      </div>
   );
}

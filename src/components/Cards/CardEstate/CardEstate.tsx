import { Estate } from "../../../types/modals/estate";

const estate = [
  {name: 'Новостройки', description: 'Лучшие новостройки в Старом Осколе', image: '/images/', id: 1},
  {name: 'Дома', description: 'Уютные новые дома с теплоизоляцией', image: '/images/', id: 2},
  {name: 'Участки', description: 'Более 200 выгодных участков от 150 тыс. р. за сотку.', image: '/images/', id: 3},
  {name: 'Комнаты', description: 'Выгодный вариант жилья от 700 тыс. р.', image: '/images/', id: 4}
];


const CardEstate = ( {name, description, image, id}:Estate ) => {
  return (
    <div className="estate">
      <div className="estate-img">`${image}`</div>
      <div className="estate-name">`${name}</div>
      <div className="estate-desc">`${description}`</div>
    </div>
  )
}

export default CardEstate;
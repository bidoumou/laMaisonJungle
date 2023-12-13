import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(e){
    console.log('Ceci est mon événement : ', e)
}

function PlantItem({name, cover, id, light, water}){
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}

export default PlantItem
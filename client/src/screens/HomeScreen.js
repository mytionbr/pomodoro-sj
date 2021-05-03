import Chronometer from '../components/Chronometer'

const HomeScreen = ({settings,dispatch,colorManager}) => {
    console.log()
    
    return (
       <Chronometer settings={settings} dispatch={dispatch} colorManager={colorManager}/>
    )
}

export default HomeScreen

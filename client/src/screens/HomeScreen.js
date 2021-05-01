import Chronometer from '../components/Chronometer'

const HomeScreen = ({settings,dispatch}) => {
    console.log()
    
    return (
       <Chronometer settings={settings} dispatch={dispatch}/>
    )
}

export default HomeScreen

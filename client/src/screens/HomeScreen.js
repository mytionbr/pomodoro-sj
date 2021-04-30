import Chronometer from '../components/Chronometer'

const HomeScreen = ({settings,setSettings}) => {
    console.log()
    
    return (
       <Chronometer settings={settings} setSettings={setSettings}/>
    )
}

export default HomeScreen

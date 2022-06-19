import preloader from '../../../assets/images/Spinner-1s-200px.svg'

let Preloader = (props) => {
    return <div style={{ width: '200px' }}>
        <img src={preloader} alt="" />
    </div >
}

export default Preloader;
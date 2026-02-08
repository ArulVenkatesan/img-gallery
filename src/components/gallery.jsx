

function Gallery(props){

    return (

        <div className="m-1">
            <div className="border border-black  p-3 text-center " style={{width:"230px"}} >
          <img src={props.img} alt="" />
          <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Gallery
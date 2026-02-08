function Circle (props) {
    return(
        <>
            <div className="relative h-32 w-32 rounded-full cursor-pointer group">
                <img 
                    src={props.image}
                    alt="circle-items" 
                    className="absolute rounded-full h-40 w-40 object-cover hover:scale-105 transition-all duration-200 shadow-md shadow-[#6E4826]"
                />

                <svg className="absolute size-6 left-22 fill-red-600 group-hover:animate-[spin_0.5s_0.2] group-hover:scale-105"><use xlinkHref="#plus"/></svg>
            </div>
        </>
    )
}

export default Circle
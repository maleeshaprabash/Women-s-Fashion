import SvgIcon from "./SvgIcons"

function NavBar () {
    return(
        <>
        <SvgIcon />
        <div className="flex relative justify-around items-center py-15">
            <div className="text-[25px] font-Aclonica text-[#6E4826] tracking-wide">Kamelia</div>
            <div className="md:flex hidden">
                <ul className="flex gap-10 font-PortLligatSans font-semibold tracking-wider text-[#6E4826]">
                    <li>Home</li>
                    <li>Collection</li>
                    <li>Brand</li>
                    <li className="hover:text-[#6E4826]/80 hover:scale-105 cursor-pointer">Sign Up</li>
                </ul>
            </div>
            <div className="flex gap-8 fill-[#6E4826]">
                <svg className="size-6"><use xlinkHref="#heart" /></svg>
                <svg className="size-6"><use xlinkHref="#cart" /></svg>
            </div>
        </div>
        </>
    )
}

export default NavBar
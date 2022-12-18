/* eslint-disable no-unused-vars */
import Progress from "Components/common/Loader/Progress";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { authLogout } from "store/Slices/authSlice";

const MenuSideBar = ({ setOpen, open }) => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(authLogout())
    }
    
		return (
		<>
			<div className="fixed top-0 w-full flex z-20">
				<div className="flex justify-between items-center w-full p-3  bg-sky-800 ">
					<button
						className={` cursor-pointer p-2 ml-2
								border-2 rounded-md  ${!open && "rotate-180"}`}
						onClick={() => setOpen(!open)}
					>
						<FaBars className="text-white" />
					</button>
					<button onClick={() => handleLogout()}>
						<FiLogOut size={30} className="text-white" />
					</button>
				</div>
			</div>
			<Progress percent={15} milliseconds={4000} />
		</>
	);
};
export default MenuSideBar;

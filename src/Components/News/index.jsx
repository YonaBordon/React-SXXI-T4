import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findAllAndSearch as getNews } from "Services/News/NewsApiServices";
import { error } from "utils/alerts/alerts";

import Title from "Components/Title/Title";
import Card from "Components/Card/Card";
import Spinner from "Components/common/Loader/Spinner/Spiner";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function News({ details }) {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (!details) {
			getNews()
				.then(res => {
					setNews(res.data.data);
					setIsLoading(false);
				})
				.catch(() => {
					error("No se pudo obtener los miembros del staff");
					setIsLoading(false);
				});
		} else {
			setNews(details);
			setIsLoading(false);
		}
	},[details]);

	return (
		<>
			{details && (
				<div className="mx-auto w-8/12 flex justify-between items-center">
					<h2 className="text-xl ">Últimas Novedades</h2>
					<Link to="/novedades" className="flex justify-center items-center">
						Ver mas <MdOutlineKeyboardArrowRight />
					</Link>
				</div>
			)}
			<div className="flex justify-center">
				<div
					className={`${
						!details && !isLoading && "bg-slate-100 shadow-xl rounded"
					} w-full sm:w-full md:w-4/5 lg:w-9/12`}
				>
					{!details && !isLoading && <Title text="Novedades" />}
					{isLoading && (
						<div className="w-full h-full flex justify-center items-center">
							<Spinner />
						</div>
					)}
					<div className="p-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
						{news?.map(datos => (
							<Card key={datos.id} title={datos.name} image={datos.image} description={datos.content} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

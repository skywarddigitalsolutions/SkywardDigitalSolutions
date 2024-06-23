import Image from "next/image";
import Proyecto1 from "../../public/design.png";

export default function CardsProyectos() {
    return (
        <div className="h-[400px] w-[250px] bg-primario rounded-2xl flex flex-col transform transition-transform duration-300 hover:scale-105">
            <div className="flex-grow">
                <Image src={Proyecto1} alt="Proyecto" className="rounded-2xl" />
            </div>
            <div className="flex flex-col mx-5 flex-grow justify-between" id="textos">
                <h4 className="text-center text-white text-lg mt-2">Proyecto1</h4>
                <div className="flex justify-between items-center mt-auto mb-5" id="items">
                    <div className="flex flex-col justify-center items-center text-gray-500 text-sm">
                        <h5>15</h5>
                        <p>Días</p>
                    </div>
                    <div className="w-[0.1rem] h-full bg-gray-500 mx-2"></div>
                    <div className="flex flex-col justify-center items-center text-gray-500 text-sm">
                        <h5>15</h5>
                        <p>Días</p>
                    </div>
                    <div className="w-[0.1rem] h-full bg-gray-500 mx-2"></div>
                    <div className="flex flex-col justify-center items-center text-gray-500 text-sm">
                        <h5>15</h5>
                        <p>Días</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

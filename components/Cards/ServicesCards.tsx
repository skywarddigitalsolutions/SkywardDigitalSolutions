import React from "react";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import ButtonCards from "./ButtonCards";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const ServicesCards = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.1 });
  

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <motion.div
        ref={ref1}
        className="card col-span-12"
        variants={cardVariants}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <Card className="relative h-[300px] sm:hidden">
          <CardHeader className="absolute top-4 left-4 p-2 rounded-md z-50 bg-transparent">
            <div className="d-flex flex-col justify-center">
              <p className="text-tiny text-white uppercase font-bold">Sitio Web</p>
              <h4 className="text-white/60 font-medium text-large">Personalizable</h4>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="w-full h-full object-cover"
            src="/designwebsite.webp"
            loading="lazy"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Conocé los tipos de sitios web</p>
              </div>
            </div>
            <ButtonCards serviceId={1} />
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        ref={ref2}
        className="card col-span-12"
        variants={cardVariants}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute top-4 left-4 p-2 rounded-md z-50 bg-transparent">
            <div className="d-flex flex-col justify-center">
              <p className="text-tiny text-white uppercase font-bold">Diseño de sitio web</p>
              <h4 className="text-white/60 font-medium text-large">Personalizable</h4>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="diseñoweb.webp"
            loading="lazy"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Definí el estilo de tu web</p>
              </div>
            </div>
            <ButtonCards serviceId={2} />
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        ref={ref3}
        className="card col-span-12"
        variants={cardVariants}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute top-4 left-4 p-2 rounded-md z-50 bg-transparent">
            <div className="d-flex flex-col justify-center">
              <p className="text-tiny text-white uppercase font-bold">CopyWriting</p>
              <h4 className="text-white/60 font-medium text-large">De tu sitio web</h4>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="copy.webp"
            loading="lazy"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Ahorrá tiempo pensando los textos</p>
              </div>
            </div>
            <ButtonCards serviceId={3} />
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        ref={ref4}
        className="card col-span-12"
        variants={cardVariants}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute top-4 left-4 p-2 rounded-md z-50 bg-transparent">
            <div className="d-flex flex-col justify-center">
              <p className="text-tiny text-white uppercase font-bold">Mantenimiento</p>
              <h4 className="text-white/60 font-medium text-large">Mensual</h4>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="mantenimiento.webp"
            loading="lazy"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 justify-between">
            <div>
              <p className="text-white/60 text-tiny">Sentite actualizado cada mes</p>
            </div>
            <ButtonCards serviceId={4} />
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        ref={ref5}
        className="card col-span-12"
        variants={cardVariants}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute top-4 left-4 p-2 rounded-md z-50 bg-transparent">
            <div className="d-flex flex-col justify-center">
              <p className="text-tiny text-white uppercase font-bold">SEO</p>
              <h4 className="text-white/60 font-medium text-large">Para tu sitio web</h4>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="design5.webp"
            loading="lazy"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Posicionate mejor que otros en las búsquedas</p>
              </div>
            </div>
            <ButtonCards serviceId={5} />
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ServicesCards;

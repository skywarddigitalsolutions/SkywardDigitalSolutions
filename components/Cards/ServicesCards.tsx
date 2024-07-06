import React from "react";

import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import ButtonCards from "./ButtonCards";



export default function ServicesCards() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Sitio Web
          </p>
          <h4 className="text-white font-medium text-large">Personalizable</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/designwebsite.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Elegi el plan que se amolde mejor a vos
              </p>
            </div>
          </div>
          <ButtonCards serviceId={1} />
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Diseño de sitio web
          </p>
          <h4 className="text-white font-medium text-large">Personalizable</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="diseñoweb.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Elegi el plan que se amolde mejor a vos
              </p>
            </div>
          </div>
          <ButtonCards serviceId={2}  />
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            CopyWriting
          </p>
          <h4 className="text-white font-medium text-large">
            De tu sitio web{" "}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="copy.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Elegi el plan que se amolde mejor a vos
              </p>
            </div>
          </div>
          <ButtonCards serviceId={3} />
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Mantenimiento
          </p>
          <h4 className="text-white font-medium text-large">Mensual</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src="mantenimiento.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 justify-between">
          <div>
            <p className="text-white/60 text-tiny">
              Elegi el plan que se amolde mejor <br /> a vos
            </p>
          </div>
          <ButtonCards serviceId={4} />
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">SEO </p>
          <h4 className="text-white/90 font-medium text-xl">
            Para tu sitio web
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="design5.webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Elegi el plan que se amolde mejor a vos
              </p>
            </div>
          </div>
          <ButtonCards serviceId={5} />
        </CardFooter>
      </Card>
    </div>
  );
}

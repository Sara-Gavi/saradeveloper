import Image from "next/image";
import Link from "next/link";

export default function MobileMvpPage() {
  return (
    <main className="min-h-screen bg-[#f49f68] p-8 md:p-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-xl md:text-3xl font-bold text-white mb-10 text-center md:text-left leading-tight">
          Construyendo la experiencia del MVP
        </h1>

        {/* GRID*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* SECCIÓN DE TEXTO */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-12 order-2 lg:order-1">
            {/* 1. Maquetación de pantallas en React Native*/}
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-md">
              <h3 className="font-bold text-base text-orange-600 mb-2">
                1. Maquetación de pantallas en React Native
              </h3>
              <p className="text-xs text-gray-800 leading-relaxed">
                Desarrollo de la interfaz siguiendo diseños de Figma, utilizando
                TypeScript y NativeWind, e implementando componentes como
                ScrollView y control de las áreas seguras de los dispositivos.
              </p>
            </div>

            {/* 2. Formularios validados y conexión con Firebase */}
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-md">
              <h3 className="font-bold text-base text-orange-600 mb-2">
                2. Formularios validados y conexión con Firebase
              </h3>
              <p className="text-xs text-gray-800 leading-relaxed">
                Creación de formularios con React Hook Form y Zod, integrados
                con los servicios para mostrar y enviar datos de forma segura a
                Firestore.
              </p>
            </div>

            {/* 3. Feedback visual y experiencia de usuaria */}
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-md">
              <h3 className="font-bold text-base text-orange-600 mb-2">
                3. Feedback visual y experiencia de usuaria
              </h3>
              <p className="text-xs text-gray-800 leading-relaxed">
                Implementación de modales, mensajes informativos y estados
                vacíos para mejorar el flujo y acompañar a la usuaria durante
                cada acción.
              </p>
            </div>

            {/* 4. Colaboración con diseño y adaptación a la arquitectura técnica*/}
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-md">
              <h3 className="font-bold text-base text-orange-600 mb-2">
                4. Colaboración y Adaptación a la Arquitectura
              </h3>
              <p className="text-xs text-gray-800 leading-relaxed">
                Participación con el equipo de diseño para revisar el flujo
                UX/UI, y adaptación a la arquitectura definida por el
                desarrollador senior (stores, servicios y hooks).
              </p>
            </div>

            {/* 5. Integración de servicios externos */}
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-md">
              <h3 className="font-bold text-base text-orange-600 mb-2">
                5. Integración de servicios externos (Google Places)
              </h3>
              <p className="text-xs text-gray-800 leading-relaxed">
                Estudio y uso de los servicios existentes para obtener datos
                automáticos desde la API de Google Places, integrándolos en los
                formularios y pantallas del flujo de la aplicación.
              </p>
            </div>
          </div>

          {/* SECCIÓN DE IMÁGENES*/}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 lg:col-span-7 order-1 lg:order-2">
            {/* Imagen 1 */}
            <Image
              src="/img/mobile1.png"
              alt="Pantalla principal de la app"
              width={200}
              height={400}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            />

            {/* Imagen 3 */}
            <Image
              src="/img/mobile3.png"
              alt="Pantalla de perfil de usuario"
              width={200}
              height={400}
              className="w-full h-auto transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            />
          </div>
        </div>

        {/* Botón de Volver al Portfolio*/}
        <div className="mt-20 text-center pb-12">
          <Link
            href="/#projects"
            className="group inline-flex items-center bg-white text-orange-600 font-extrabold text-lg py-4 px-10 rounded-full shadow-xl hover:bg-orange-50 transition-all hover:-translate-y-1"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300 mr-2">
              ←
            </span>
            Volver al portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
